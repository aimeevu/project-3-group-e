from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import json
import pandas as pd

app = Flask(__name__)
database = ""

#app.config["MONGO_URI"] = f"mongodb://localhost:27017/{database}"
#mongo = PyMongo(app)

engine = create_engine(f"mongodb://localhost:27017/{database}")
Base = automap_base()
Base.prepare(engine,reflect=True)
statePartyAffiliations = Base.classes.statePartyAffiliations

@app.route("/")
def index():
    print("Hello")
    #return render_template('index.html')
    return ("Hello")

@app.route("/api/v1.0/test")
def getData():
    print("Data")
    df = pd.read_sql(
        f'SELECT * FROM statePartyAffiliations',
        con=engine,
    )
    return jsonify(df)

if __name__ == "__main__":
    app.run()
