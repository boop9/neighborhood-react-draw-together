# backend (Flask Backend)
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS


app = Flask(__name__, instance_relative_config=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config

CORS(app)




users = {}
# Signup-Endpoint
@app.route('/signup', methods=['POST'])
def signup():
  # Read JSON data from the request
  data = request.get_json
  # Extract user name and password from the data
  username = data['username']
  password = data['password']
# Check wether user name already exists
  if username in users:
    # Return of an error with HTTP status code 400 (Bad Request)
    return jsonify({
      "error": "User already exists"
    }), 400
    # generate_password_hash creates a secure hash of the password
    users[username] = generate_password_hash(password)
    # Success message with HTTP status code 201 (Created)
    return jsonify({
  "message": "Signup successful",
  "user": username
    }), 201

# Login-Endpoint
@app.route('/login', methods=['POST'])
def login():
  data = request.get_json()
  username = data['username']
  password = data['password']
    # Check whether:
    # 1. user name exists AND
    # 2. the password entered matches the saved hash
  if username not in users or not check_password_hash(users[username], password):
     # Return of an error with HTTP status code 401 (Unauthorized)
    return jsonify({
      "error": "Invalid login data"
    }), 401
    # Success message with user name
    return jsonify({
      "message": "Login successful",
      "user": username
    }), 200
# starting Server
if __name__ == '__main__':
# Starts the server on port 5000 with debug mode
  app.run(port=5000, debug=True)