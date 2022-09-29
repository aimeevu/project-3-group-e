from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func
import json
import pandas as pd

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
database = "crimestats"
app.config["MONGO_URI"] = f"mongodb://localhost:27017/{database}"
mongo = PyMongo(app)

# Could not get sqlalchemy to connect to mongodb.
# engine = create_engine(f"mongodb://localhost:27017/{database}")
# Base = automap_base()
# Base.prepare(engine,reflect=True)
# statePartyAffiliations = Base.classes.statePartyAffiliations

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

if __name__ == "__main__":
    app.run()
