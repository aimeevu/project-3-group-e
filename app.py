from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

#build the server to retrive data from Mongo database

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'gun_violenceDB'

COLLECTION1 = 'accidentalDeath'
FIELDS1 = {'Year': True, 'Date': True, 'State': True, 'City_Or_County': True, 'Killed': True, '_id': False}

COLLECTION2 = 'fatalPoliceShootings'
FIELDS2 = {'Year': True, 'Date': True, 'State': True, 'City': True, 'manner_of_death': True, '_id': False}

COLLECTION3 = 'massShootings'
FIELDS3 = {'Year': True, 'State': True, 'Killed': True, 'Injured': True, '_id': False}

COLLECTION4 = 'gunOwnership'
FIELDS4 = {'State': True, 'gunOwnership': True, 'totalGuns': True, '_id': False}

#add route to map the URLs to the data from MongoDB

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/gun_violenceDB/accidentalDeath")
def accidentalDeath():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION1]
    accidents = collection.find(projection=FIELDS1)
    json_accidents = []
    for accident in accidents:
        json_accidents.append(accident)
    json_accidents = json.dumps(json_accidents, default=json_util.default)
    connection.close()
    return json_accidents

@app.route("/gun_violenceDB/fatalPoliceShootings")
def fatalPoliceShootings():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION2]
    shootings = collection.find(projection=FIELDS2)
    json_fatalPoliceShootings = []
    for shooting in shootings:
        json_fatalPoliceShootings.append(shooting)
    json_fatalPoliceShootings = json.dumps(json_fatalPoliceShootings, default=json_util.default)
    connection.close()
    return json_fatalPoliceShootings

@app.route("/gun_violenceDB/massShootings")
def massShootings():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION3]
    shootings = collection.find(projection=FIELDS3)
    json_massShootings = []
    for shooting in shootings:
        json_massShootings.append(shooting)
    json_massShootings = json.dumps(json_massShootings, default=json_util.default)
    connection.close()
    return json_massShootings

@app.route("/gun_violenceDB/gunOwnership")
def gunOwnership():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION4]
    guns = collection.find(projection=FIELDS4)
    json_gunOwnership = []
    for gun in guns:
        json_gunOwnership.append(gun)
    json_gunOwnership = json.dumps(json_gunOwnership, default=json_util.default)
    connection.close()
    return json_gunOwnership

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)
