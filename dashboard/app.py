# WORK IN PROGRESS

# template code below pulled from 10.3.04
# check other files before finalizing
# this website is also helpful: https://pusher.com/tutorials/live-dashboard-python

# WORK IN PROGRESS
# ----------------------------------------------------------------------------------

# TEMPLATE CODE 
# -------------------------------------------------------

# 1. import Flask
from flask import Flask

# 2. Create an app, being sure to pass __name__
app = Flask(__name__)


# 3. Define what to do when a user hits the index route
@app.route("/")
def home():
    print("Server received request for 'Home' page...")
    return "Welcome to my 'Home' page!"


# 4. Define what to do when a user hits the /about route
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"


if __name__ == "__main__":
    app.run(debug=True)



