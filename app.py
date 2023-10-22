# import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd
from flask import Flask, jsonify, render_template
from password import password


app = Flask(__name__)

def make_engine():
    engine = create_engine(f"postgresql://postgres:{password}@localhost:5432/Gun_Violence")
    return engine

@app.route('/api/v1.0/data')
def get_data():
    engine = make_engine()
    df = pd.read_sql_table('gunviolence', engine)
    return jsonify(df.to_dict(orient = 'records'))

@app.route('/api/v1.0/metadata')
def get_metadata():
    engine = make_engine()
    df = pd.read_sql_table('metadata', engine)
    return jsonify(df.to_dict(orient = 'records'))

@app.route('/')
def all_data():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)