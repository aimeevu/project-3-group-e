from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
from bson.json_util import dumps

import json
import pandas as pd

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
database = "gun_violenceDB"
app.config["MONGO_URI"] = f"mongodb://localhost:27017/{database}"
mongo = PyMongo(app)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/v1.0/test")
def getData():
    return '{"Hello":"World"}'
    # df = pd.read_sql(
    #     f'SELECT * FROM statePartyAffiliations',
    #     con=engine,
    # )
    # return jsonify(df)

@app.route("/api/v1.0/massshooting")
def getMassShooting():
    shootings = mongo.db.massShootings.find()
    return dumps(shootings)

@app.route("/api/v1.0/fatalpoliceshooting")
def getPoliceShooting():
    shootings = mongo.db.fatalPoliceShootings.find()
    return dumps(shootings)

@app.route("/api/v1.0/accidentaldeath")
def getAccidentalDeath():
    deaths = mongo.db.accidentalDeath.find()
    return dumps(deaths)

if __name__ == "__main__":
    app.run()
