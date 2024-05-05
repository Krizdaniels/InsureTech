import datetime
from flask import Flask, request, jsonify
from models import db, User, Policy, PaymentTransaction, Quote

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://insuretech:betty@localhost/insuretech'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

# Define routes for quote generation, user registration, etc.

@app.route('/generate_quote', methods=['POST'])
def generate_quote():
    data = request.json

    # Perform premium calculations based on user input and product category
    premium = calculate_premium(data)

    # Save the quote to the database
    quote = Quote(
        user_id=data['user_id'],
        product_category=data['product_category'],
        sum_insured=data['sum_insured'],
        premium=premium
    )
    db.session.add(quote)
    db.session.commit()

    return jsonify({'quote_id': quote.id, 'premium': premium})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000)
