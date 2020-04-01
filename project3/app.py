# import necessary libraries
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', '') or "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from .models import usa

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/map")
def map():
    return render_template("map.html")



# Query the database and send the jsonified results
//usa 
@app.route("/send", methods=["GET"])
def send():
    if request.method == "GET":
        
        usa_data = usa(time=time, open=open, high=high,low=low, last=last, change=change, volume=volume, cases=cases,deaths=deaths,geoid=geoid)
        db.session.add(usa_data)
        db.session.commit()
        return redirect("/", code=302)

    return render_template("index.html")    

@app.route("/api/usacovid")
def usacovid():
    results = db.session.query(usa_data.time, usa_data.open, usa_data.high,usa_data.low, usa_data.last, usa_data.change, usa_data.volume, usa_data.cases,usa_data.deaths,usa_data.geoid).all()

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

//korean

# Query the database and send the jsonified results
@app.route("/send", methods=["GET"])
def send():
    if request.method == "GET":
        
        kr_data = kr(time=time, open=open, high=high,low=low, last=last, change=change, volume=volume, cases=cases,deaths=deaths,geoid=geoid)
        db.session.add(kr_data)
        db.session.commit()
        return redirect("/", code=302)

    return render_template("index.html") 

@app.route("/api/krcovid")
def krcovid():
    results = db.session.query(kr_data.time, kr_data.open, kr_data.high,kr_data.low, kr_data.last, kr_data.change, kr_data.volume, kr_data.cases,kr_data.deaths,kr_data.geoid).all()

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

//uk

# Query the database and send the jsonified results
@app.route("/send", methods=["GET"])
def send():
    if request.method == "GET":
        
        uk_data = uk(time=time, open=open, high=high,low=low, last=last, change=change, volume=volume, cases=cases,deaths=deaths,geoid=geoid)
        db.session.add(uk_data)
        db.session.commit()
        return redirect("/", code=302)

    return render_template("index.html") 

@app.route("/api/ukcovid")
def ukcovid():
    results = db.session.query(uk_data.time, uk_data.open, uk_data.high,uk_data.low, uk_data.last, uk_data.change, uk_data.volume, uk_data.cases,uk_data.deaths,uk_data.geoid).all()

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
