from flask import Flask
import os
import subprocess

app = Flask(__name__)

scone_dir = os.path.join(os.path.dirname(__file__), '..', 'data', 'ScoNe')
if not os.path.exists(scone_dir):
    print("ScoNe directory not found, cloning from GitHub...")
    # Make sure the ../data directory exists; create it if it doesn't
    os.makedirs(os.path.dirname(scone_dir), exist_ok=True)
    # Clone the ScoNe repository
    subprocess.run(['git', 'clone', 'https://github.com/selenashe/ScoNe.git', scone_dir], check=True)


from app import routes