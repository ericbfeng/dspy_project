Setup venv. 

Create a venv enviornment: 

python3 -m venv .venv 

source .venv/bin/activate

pip install -r requirements.txt

touch .env

within .env file add API_KEY=(your OPENAPI key here)

flask run
