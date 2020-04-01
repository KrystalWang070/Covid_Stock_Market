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
db.Model.metadata.reflect(db.engine)
# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from .models import usa


@app.route("/api/pals")
def pals():
   usa_data = db.query.all()
    return jsonify(usa_data)

# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run()
