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

# # // line_graph.js
# var trace1 = {
#   x: x_values, //[1, 2, 3, 4, 5]
#   y: y_values, //[1, 4, 9, 16, 25]
#   type: 'scatter'
# };
# let data = [trace1];
# Plotly.newPlot('line_graph', data);



# def get_db_connection():
#     conn = psycopg2.connect(host='localhost',
#                             database='flask_db',
#                             user=os.environ['DB_USERNAME'],
#                             password=os.environ['DB_PASSWORD'])
#     return conn


import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask import Flask
app = Flask(__name__)


@app.route('/')
def data_values():
    # replace next line with whatever data you need from your database
    data = {'x_values': [1, 2, 3, 4, 5], 'y_values': [1, 4, 9, 16, 25]}
    return render_template('index.html', data=data)

# // index.html
<html>
    <head>
        //head code
    </head>
    <body>
        <script type="text/javascript">
            let x_values = {{ data.x_values }}
            let y_values = {{ data.y_values }}
        </script>
        <div class="line_graph>
            <script src="line_graph.js"></script>
        </div>
    </body>
</html>

# // line_graph.js
var trace1 = {
  x: x_values, //[1, 2, 3, 4, 5]
  y: y_values, //[1, 4, 9, 16, 25]
  type: 'scatter'
};
let data = [trace1];
Plotly.newPlot('line_graph', data);