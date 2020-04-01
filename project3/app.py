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

# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
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


if __name__ == "__main__":
    app.run()
