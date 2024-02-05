from flask import Flask
import os
import subprocess
from flask_cors import CORS



app = Flask(__name__)


CORS(app)

scone_dir = os.path.join(os.path.dirname(__file__), '..', 'data', 'ScoNe')
if not os.path.exists(scone_dir):
    print("ScoNe directory not found, cloning from GitHub...")
    os.makedirs(os.path.dirname(scone_dir), exist_ok=True)
    subprocess.run(['git', 'clone', 'https://github.com/selenashe/ScoNe.git', scone_dir], check=True)


from app import routes