# import necessary libraries

# import necessary libraries

import os

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from flask_jsonpify import jsonify

#Create a engine for connecting to SQLite3.
#Assuming salaries.db is in your app root folder

kr = create_engine('sqlite:///korea.db')
uk = create_engine('sqlite:///uk.db')
usa = create_engine('sqlite:///usa.db')

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
api = Api(app)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")
<<<<<<< HEAD
#################################################
# MODEL Setup
#################################################
class Korean(Resource):
    def get(self):
        conn = kr.connect()
        query = conn.execute("select * from korea")
        result = {'kr': [dict(zip(tuple(query.keys()), i)) for i in query.cursor]}
        return jsonify(result)

class USA(Resource):
    def get(self):
        conn = usa.connect()
        query = conn.execute("select * from usa")
        result = {'usa': [dict(zip(tuple(query.keys()), i)) for i in query.cursor]}
        return jsonify(result)

class UK(Resource):
    def get(self):
        conn = uk.connect()
        query = conn.execute("select * from uk")
        result = {'uk': [dict(zip(tuple(query.keys()), i)) for i in query.cursor]}
        return jsonify(result)

 

api.add_resource(Korean, '/api/kr')
api.add_resource(USA, '/api/usa')
api.add_resource(UK, '/api/uk')

if __name__ == '__main__':
     app.run()
=======



# Query the database and send the jsonified results

@app.route("/usa", methods=["GET"])

def usa():
    return jsonify({'usa': usa.query.get()})
  

@app.route("/api/usacovid")
def usacovid():
    results = db.session.query(usa.time, usa.open, usa.high,usa.low, usa.last, usa.change, usa.volume, usa.cases,usa.deaths,usa.geoid).all()

    time = [result[0] for result in results]
    open = [result[1] for result in results]
    high = [result[2] for result in results]
    low = [result[3] for result in results]
    last = [result[4] for result in results]
    change = [result[5] for result in results]
    volume = [result[6] for result in results]
    cases = [result[7] for result in results]
    deaths = [result[8] for result in results]
    geoid = [result[9] for result in results]


    usa_dataset = [{
        "time": time,
        "open": open,
        "high": high,
        "low": low,
        "last": last,
        "change": change,
        "volume": volume,
        "cases": cases,
        "deaths": deaths,
        "geoid": geoid,
       
    }]

    return jsonify(usa_dataset)



# Query the database and send the jsonified results
@app.route("/kr", methods=["GET"])

def kr():
    return jsonify({'kr': kr.query.get()})

@app.route("/api/krcovid")
def krcovid():
    results = db.session.query(kr.time, kr.open, kr.high,kr.low, kr.last, kr.change, kr.volume, kr.cases,kr.deaths,kr.geoid).all()

    time = [result[0] for result in results]
    open = [result[1] for result in results]
    high = [result[2] for result in results]
    low = [result[3] for result in results]
    last = [result[4] for result in results]
    change = [result[5] for result in results]
    volume = [result[6] for result in results]
    cases = [result[7] for result in results]
    deaths = [result[8] for result in results]
    geoid = [result[9] for result in results]


    kr_dataset = [{
        "time": time,
        "open": open,
        "high": high,
        "low": low,
        "last": last,
        "change": change,
        "volume": volume,
        "cases": cases,
        "deaths": deaths,
        "geoid": geoid,
       
    }]

    return jsonify(kr_dataset)



# Query the database and send the jsonified results
@app.route("/uk", methods=["GET"])

def uk():
    return jsonify({'uk': uk.query.get()})


@app.route("/api/ukcovid")
def ukcovid():
    results = db.session.query(uk.time, uk.open, uk.high,uk.low, uk.last, uk.change, uk.volume, uk.cases,uk.deaths,uk.geoid).all()

    time = [result[0] for result in results]
    open = [result[1] for result in results]
    high = [result[2] for result in results]
    low = [result[3] for result in results]
    last = [result[4] for result in results]
    change = [result[5] for result in results]
    volume = [result[6] for result in results]
    cases = [result[7] for result in results]
    deaths = [result[8] for result in results]
    geoid = [result[9] for result in results]


    uk_dataset = [{
        "time": time,
        "open": open,
        "high": high,
        "low": low,
        "last": last,
        "change": change,
        "volume": volume,
        "cases": cases,
        "deaths": deaths,
        "geoid": geoid,
       
    }]

    return jsonify(uk_dataset)




if __name__ == "__main__":
    app.run()
>>>>>>> 8e820982297a1355363be37c752a63ad0ffc5fcb
