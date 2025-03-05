from flask import Flask

app = Flask(__name__)

from . import app  # Import the app module to ensure it is registered with the Flask application.