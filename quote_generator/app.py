#!/usr/bin/python3

from flask import Flask, jsonify, request

app = Flask(__name__)

# Define rates (in percentages) for different insurance product categories
PRODUCT_RATES = {
    'Motor': 5,     # Rate for Motor insurance (5%)
    'Fire': 0.25,     # Rate for Fire insurance (25%)
    'Burglary': 0.15,  # Rate for Travel insurance (15%)
    'All Risk': 0.2,   # Rate for Travel insurance (20%)
    'Householders': 0.2,  # Rate for Travel insurance (20%)
}

@app.route('/api/quote', methods=['POST'])
def generate_quote():
    # Retrieve user input from request
    user_data = request.json
    
    # Extract insurance product category from user input
    product_category = user_data.get('product_category')

    # Check if the product category is valid
    if product_category in PRODUCT_RATES:
        # Retrieve the rate for the product category
        rate = PRODUCT_RATES[product_category]
        
        # Calculate the premium based on the rate and quote amount
        value_amount = user_data.get('value_amount')
        premium = value_amount * rate
        
        # Return the premium as a JSON response
        return jsonify({
            'premium': premium,
            'currency': 'NGN'  # Replace with appropriate currency
        })
    else:
        # Return an error message if the product category is invalid
        return jsonify({
            'error': 'Invalid product category'
        }), 400

if __name__ == '__main__':
    app.run(debug=True)

