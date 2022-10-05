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
FIELDS3 = {'Year': True, 'Date': True, 'State': True, 'Killed': True, 'Injured': True, '_id': False}

COLLECTION4 = 'gunOwnership'
FIELDS4 = {'State': True, 'gunOwnership': True, 'totalGuns': True, '_id': False}

COLLECTION5 = 'combine2019'
FIELDS5 = {'Year': True, 'State': True, 'massShootings': True,'accidentalDeath': True,'fatalPoliceShootings': True,'_id': False}

COLLECTION6 = 'combine2020'
FIELDS6 = {'Year': True, 'State': True, 'massShootings': True,'accidentalDeath': True,'fatalPoliceShootings': True,'_id': False}

COLLECTION7 = 'combine2021'
FIELDS7 = {'Year': True, 'State': True, 'massShootings': True,'accidentalDeath': True,'fatalPoliceShootings': True,'_id': False}

COLLECTION8 = 'combine2022'
FIELDS8 = {'Year': True, 'State': True, 'massShootings': True,'accidentalDeath': True,'fatalPoliceShootings': True,'_id': False}

COLLECTION9 = 'combinData_byState'
FIELDS9 = {'State': True, 'massShootings': True,'accidentalDeath': True,'fatalPoliceShootings': True,'_id': False}

COLLECTION10 = 'combineData_StateParty'
FIELDS10 = {'massShootings': True,'accidentalDeath': True,'fatalPoliceShootings': True,'_id': False}

COLLECTION11 = 'gunOwnership_StateParty'
FIELDS11 = {'gunOwnership': True,'totalGuns': True,'_id': False}



#add route to map the URLs to the data from MongoDB

@app.route("/")
def index():
    return render_template("charts.html")

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

@app.route("/gun_violenceDB/combine2019")
def combine2019():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION5]
    deaths = collection.find(projection=FIELDS5)
    json_combined = []
    for death in deaths:
        json_combined.append(death)
    json_combined = json.dumps(json_combined, default=json_util.default)
    
    return json_combined

@app.route("/gun_violenceDB/combine2020")
def combine2020():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION6]
    deaths = collection.find(projection=FIELDS6)
    json_combined = []
    for death in deaths:
        json_combined.append(death)
    json_combined = json.dumps(json_combined, default=json_util.default)
    
    return json_combined

@app.route("/gun_violenceDB/combine2021")
def combined2021():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION7]
    deaths = collection.find(projection=FIELDS7)
    json_combined = []
    for death in deaths:
        json_combined.append(death)
    json_combined = json.dumps(json_combined, default=json_util.default)
    
    return json_combined

@app.route("/gun_violenceDB/combine2022")
def combined2022():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION8]
    deaths = collection.find(projection=FIELDS8)
    json_combined = []
    for death in deaths:
        json_combined.append(death)
    json_combined = json.dumps(json_combined, default=json_util.default)
    
    return json_combined

@app.route("/gun_violenceDB/combinData_byState")
def combinData_byState():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION9]
    deaths = collection.find(projection=FIELDS9)
    json_combined = []
    for death in deaths:
        json_combined.append(death)
    json_combined = json.dumps(json_combined, default=json_util.default)
    
    return json_combined

@app.route("/gun_violenceDB/combineData_StateParty")
def combineData_StateParty():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION10]
    deaths = collection.find(projection=FIELDS10)
    json_combined = []
    for death in deaths:
        json_combined.append(death)
    json_combined = json.dumps(json_combined, default=json_util.default)
    
    return json_combined

@app.route("/gun_violenceDB/gunOwnership_StateParty")
def gunOwnership_StateParty():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION11]
    deaths = collection.find(projection=FIELDS11)
    json_combined = []
    for death in deaths:
        json_combined.append(death)
    json_combined = json.dumps(json_combined, default=json_util.default)
    
    return json_combined

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)
