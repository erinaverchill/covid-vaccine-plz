# WORK IN PROGRESS

# template code below pulled from 10.3.04
# check other files before finalizing
# this website is also helpful: https://pusher.com/tutorials/live-dashboard-python

# WORK IN PROGRESS

# SUN. 7/19
# 	* added sqlalchemy connection
# 	* source - https://medium.com/datalab-log/how-to-build-a-dashboard-prototype-using-leaflet-d3-js-and-python-1cfda38efbb5
# ----------------------------------------------------------------------------------

# TEMPLATE CODE 
# -------------------------------------------------------

# 1. import Flask, render_template (smoother graphics/animation), json
from flask import Flask
from flask import render_template
import json

# added 7/19 - data path for data input
# source: https://medium.com/datalab-log/how-to-build-a-dashboard-prototype-using-leaflet-d3-js-and-python-1cfda38efbb5
data_path = './static/'

# make sure to change the json file path later when you have the shapefile data
# double check that the encoding is correct
with open(data_path + '/data/untitled.json', encoding= "ISO-8859-1") as data_file:
	geo_json = json.load(data_file)


# 2. Create an app, being sure to pass __name__
app = Flask(__name__)

# https://blog.theodo.com/2017/03/developping-a-flask-web-app-with-a-postresql-database-making-all-the-possible-errors/
# do you need to specify the host and the port here?
if __name__ == '__main__':
	app.run(debug=True)
	# app.run(host='0.0.0.0',port=5001,debut=True)


# 3. Define what to do when a user hits the index route
@app.route("/")
def index():
    return render_template("index.html")


# 4. Define what to do when a user hits the /data route
# THIS IS STILL PULLED FROM TEMPLATE - EDIT ROUTE
@app.route("/data")
def get_data():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"






