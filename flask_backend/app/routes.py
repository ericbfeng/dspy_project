from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"

@app.route('/dspy_backend', methods=['POST'])
def handle_dspy_backend():
    if request.is_json:
        data = request.get_json()
        print("DONE")
        return jsonify({"status": "success", "message": "JSON received"}), 200
    else:
        return jsonify({"status": "error", "message": "Request must be JSON"}), 400