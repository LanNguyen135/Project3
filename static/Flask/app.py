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

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(autoload_with=engine)

# # Save reference to the table
# Passenger = Base.classes.passenger


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup - using postgres
#################################################

# engine = create_engine(f"postgresql://postgres:{password}@localhost:5432/Gun_Violence")
# vs
engine = create_engine(f"postgresql+psycopg2://postgres:{password}@localhost:5432/Gun_Violence") #  application of psycopg taken from this overstackflow https://stackoverflow.com/questions/9353822/connecting-postgresql-with-sqlalchemy
connection = engine.connect()
db = SQLAlchemy(app)

# psycopg2 are basically the Python drivers for PostgreSQL that need to be installed separately. - tldr howver this points to me not even knowing what the psycopg2 library even does ...... oof

#################################################
# Flask Routes
#################################################


@app.route("/") # are we only going to use one route? and how do we use this route to display our data? 
def data_values():
    # Query All Records in the the Database
    query = text("SELECT * FROM Census_Data")
    data = engine.execute(query)
    for record in data:
        print(record)
# is this an ok test?

    # replace next line with whatever data you need from your database - so does this mean not importing the databsse here but rather get the data we need from the database right?
    data = {'x_values': [1, 2, 3, 4, 5], 'y_values': [1, 4, 9, 16, 25]} 
    # data2 =  {'x_values': [1, 2, 3, 4, 5], 'y_values': [1, 4, 9, 16, 25]}  - second data made as my database will contain two datasets: data and metaData
    # This is not how we will call our postgres data - it will be diffrent - again how do we import postgres?

    return render_template('index.html', data=data) # whats up with render_template? as in why is it not colored in? which library does it even come from?

# how do we implement both databases? metadata and data? 
# return render_template('index.html', data1=data1, data2 = data2)? i forgot how my instructor did it - going to need to ask him - but first need to setup posgtgres connection.



# Flask Execution
if __name__ == '__main__':
    app.run(debug=True)
