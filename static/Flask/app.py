#  app.py
# for refernce on using psgres instead of SQLite - https://www.digitalocean.com/community/tutorials/how-to-use-a-postgresql-database-in-a-flask-application

# @app.route('/')
# def plot_values():
#     # replace next line with whatever data you need from your database
#     data = {'x_values': [1, 2, 3, 4, 5], 'y_values': [1, 4, 9, 16, 25]}
#     return render_template('index.html', data=data)

# # // index.html
# <html>
#     <head>
#         //head code
#     </head>
#     <body>
#         <script type="text/javascript">
#             let x_values = {{ data.x_values }}
#             let y_values = {{ data.y_values }}
#         </script>
#         <div class="line_graph>
#             <script src="line_graph.js"></script>
#         </div>
#     </body>
# </html>

# need to standardize x_values and y_values 

# # // line_graph.js
# var trace1 = {
#   x: x_values, //[1, 2, 3, 4, 5]
#   y: y_values, //[1, 4, 9, 16, 25]
#   type: 'scatter'
# };
# let data = [trace1];
# Plotly.newPlot('line_graph', data);


# small snippet of code from article to get posgres connection - I THINK?
# def get_db_connection():
#     conn = psycopg2.connect(host='localhost',
#                             database='flask_db',
#                             user=os.environ['DB_USERNAME'],
#                             password=os.environ['DB_PASSWORD'])
#     return conn





import numpy as np # Taken from a class activity - unsure if numpy is needed

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from password import password

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


#################################################
# Database Setup - using sqlite
#################################################

# engine = create_engine("sqlite:///titanic.sqlite")

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup - using postgres - used this site as reference https://www.geeksforgeeks.org/connecting-postgresql-with-sqlalchemy-in-python/
#################################################

# engine = create_engine(f"postgresql://postgres:{password}@localhost:5432/Gun_Violence")
# vs
engine = create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/Gun_Violence") #  application of psycopg taken from this overstackflow https://stackoverflow.com/questions/9353822/connecting-postgresql-with-sqlalchemy
connection = engine.connect()
var = Session.query(gunviolence).all()

db = SQLAlchemy(app)

# psycopg2 are basically the Python drivers for PostgreSQL that need to be installed separately. - tldr howver this points to me not even knowing what the psycopg2 library even does ...... oof
# ok but is it now connected what now? how do I query? here or in the routes? it looks like the sqlite has more code to it - what does it do and does the postgres method need the same bases?

#################################################
# Flask Routes
#################################################


@app.route("/") # are we only going to use one route? and how do we use this route to display our data? 
def plot_values():
    # replace next line with whatever data you need from your database 
    #data = {'x_values': var, 'y_values': [1, 4, 9, 16, 25]} 
    # data2 =  {'x_values': [1, 2, 3, 4, 5], 'y_values': [1, 4, 9, 16, 25]}  - second data made as my database will contain two datasets: data and metaData
    #return render_template('index.html', data=data)

# how do we implement both databases? metadata and data? 
# return render_template('index.html', data1=data1, data2 = dta2a)

#################################################
# Flask Execution
#################################################

if __name__ == '__main__':
    app.run(debug=True)


# query properly
# test with Mai's data
# make sure that they are renderd properly 

