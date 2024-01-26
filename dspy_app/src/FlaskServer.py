from flask import Flask, render_template, request, jsonify
from nbconvert import HTMLExporter
import nbformat
import requests

app = Flask(__name__)

@app.route('/')
def serve_notebook():
    # Download the notebook
    notebook_url = "https://raw.githubusercontent.com/stanfordnlp/dspy/main/examples/nli/scone/scone.ipynb"
    notebook_content = requests.get(notebook_url).text

    # Convert notebook to HTML
    notebook = nbformat.reads(notebook_content, as_version=4)
    html_exporter = HTMLExporter()
    html_body, _ = html_exporter.from_notebook_node(notebook)

    return render_template('notebook_template.html', notebook_html=html_body)

@app.route('/execute_code', methods=['POST'])
def execute_code():
    try:
        # Get the compile code from the request data
        code = request.get_json().get('code', '')

        # Execute the compile in the Jupyter Notebook
        # Note: This is a simplistic example and may need modifications based on your requirements
        result = execute_code_in_notebook(code)

        # Return the result as JSON
        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def execute_code_in_notebook(code):
    # Send the request to the backend to compile
    result = f"Code execution result: {code}"
    return result

if __name__ == '__main__':
    app.run(debug=True)