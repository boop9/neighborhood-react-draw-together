from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import Mapped, mapped_column
from app import app


db = SQLAlchemy(app)

class UsersDB(db.Model):
  id = db.