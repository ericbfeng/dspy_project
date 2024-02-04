from app import app

from flask import request, jsonify 

import glob
import os
import pandas as pd
import random
import dspy
from dspy.evaluate import Evaluate
from dspy.teleprompt import BootstrapFewShotWithRandomSearch




NEW = False

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"




@app.route('/dspy_backend', methods=['POST'])
def handle_dspy_backend():
    if request.is_json:
        data = request.get_json()

        random.seed(1)

        turbo = dspy.OpenAI(model='gpt-3.5-turbo-1106', max_tokens=250, model_type='chat')
        dspy.settings.configure(lm=turbo)

        gpt4T = dspy.OpenAI(model='gpt-4-1106-preview', max_tokens=350, model_type='chat')

        #setup scone dataset:
        train, dev, test = get_splits()


        #evaluators
        scone_accuracy = dspy.evaluate.metrics.answer_exact_match
        evaluator = Evaluate(devset=test, num_threads=1, display_progress=True, display_table=0)


        premade =  ScoNeCoT()

        premade.load('data/Bootsrapped/scone-cot_fewshot-turbo-gpt4-demos.json') 

        cot_fewshot =  bootstrap(train, dev) if NEW else premade
        


        #set key to do this:
        #evaluator(cot_fewshot, metric=scone_accuracy)


        return jsonify({"status": "success", "message": "JSON received"}), 200
    else:
        return jsonify({"status": "error", "message": "Request must be JSON"}), 400




def get_splits(): 

    all_train = load_scone("data/ScoNe/scone_nli/train")


    random.shuffle(all_train)


    # 200 random train, 50 random dev:
    train, dev = all_train[: 200], all_train[200: 250]

    test = load_scone(dirname=f"data/ScoNe/scone_nli/test")
    test = [ex for ex in test if ex.category == "one_scoped"]


    return train, dev, test



def load_scone(dirname):
    dfs = []
    for filename in glob.glob(dirname + "/*.csv"):
        df = pd.read_csv(filename, index_col=0)
        df['category'] = os.path.basename(filename).replace(".csv", "")
        dfs.append(df)
    data_df = pd.concat(dfs)

    def as_example(row):
        # The 'one_scoped' file is from an earlier dataset, MoNLI, and
        # so is formatted a bit differently:
        suffix = '' if row['category'] == 'one_scoped' else '_edited'
        # Reformat the hypothesis to be an embedded clause in a question:
        hkey = 'sentence2' + suffix
        question = row[hkey][0].lower() + row[hkey][1: ].strip(".")
        question = f"Can we logically conclude for sure that {question}?"
        # Binary task formulation:
        label = "Yes" if row['gold_label' + suffix] == 'entailment' else "No"
        return dspy.Example({
            "context": row['sentence1' + suffix],
            "question": question,
            "answer": label,
            "category": row['category']
        }).with_inputs("context", "question")

    return list(data_df.apply(as_example, axis=1).values)





class ScoNeSignature(dspy.Signature):
    ("""You are given some context (a premise) and a question (a hypothesis). """
    """You must indicate with Yes/No answer whether we can logically """
    """conclude the hypothesis from the premise.""")

    context = dspy.InputField()
    question = dspy.InputField()
    answer = dspy.OutputField(desc="Yes or No")



class ScoNeCoT(dspy.Module):
    def __init__(self):
        super().__init__()
        self.generate_answer = dspy.ChainOfThought(ScoNeSignature)

    def forward(self, context, question):
        return self.generate_answer(context=context, question=question)




def bootstrap(train, dev):
    bootstrap_optimizer = BootstrapFewShotWithRandomSearch(
    max_bootstrapped_demos=8,
    max_labeled_demos=8,
    num_candidate_programs=10,
    num_threads=8,
    metric=scone_accuracy,
    teacher_settings=dict(lm=gpt4T))


    cot_zeroshot = ScoNeCoT()


    cot_fewshot = bootstrap_optimizer.compile(cot_zeroshot, trainset=train, valset=dev)

    return cot_fewshot

