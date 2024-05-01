#!/usr/bin/python3

from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

# Define rates (in percentages) for different insurance product categories
PRODUCT_RATES = {
    'Motor': 5,     
    'Fire': 0.25,    
    'Burglary': 0.15,  
    'All Risk': 0.2,   
    'Householders': 0.2, 
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Handle user registration form submission
        # Store user details in database
        return render_template('registration_success.html')
    return render_template('register.html')

@app.route('/generate_quote', methods=['POST'])
def generate_quote():
    if request.method == 'POST':
        # Retrieve form data
        product_category = request.form.get('product_category')
        value_amount = float(request.form.get('value_amount'))

        if product_category in PRODUCT_RATES:
            rate = PRODUCT_RATES[product_category]
            premium = value_amount * rate
            return render_template('quote.html', premium=premium)
        else:
            return render_template('quote_error.html')

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
