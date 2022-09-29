from flask import Flask
from flask_pymongo import PyMongo
import json

app = Flask(__name__)
database = ""

#app.config["MONGO_URI"] = f"mongodb://localhost:27017/{database}"
#mongo = PyMongo(app)

@app.route("/")
def index():
    print("Hello")
    return ("Hello")

if __name__ == "__main__":
    app.run()
