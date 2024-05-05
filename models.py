from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    dob = db.Column(db.Date)  # Date of birth

class Policy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    product_category = db.Column(db.String(50), nullable=False)
    sum_insured = db.Column(db.Float, nullable=False)
    start_date = db.Column(db.Date, nullable=False)
    end_date = db.Column(db.Date, nullable=False)

class PaymentTransaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    policy_id = db.Column(db.Integer, db.ForeignKey('policy.id'), nullable=False)
    payment_type = db.Column(db.String(50), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    transaction_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    success = db.Column(db.Boolean, default=False)

class Quote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    product_category = db.Column(db.String(50), nullable=False)
    sum_insured = db.Column(db.Float, nullable=False)
    premium = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    # Add additional fields for user input (name, address, dob, vehicle details, property description)
