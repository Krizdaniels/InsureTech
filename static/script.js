const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function calculateQuote() {
    const productCategory = document.getElementById('productCategory').value;
    const sumInsured = document.getElementById('sumInsured').value;

    if (productCategory && sumInsured) {
        const premium = sumInsured * productCategory;
        document.getElementById('premium').innerText = `$${premium.toFixed(2)}`;
        document.getElementById('quoteResult').classList.remove('hidden');

        // Store premium in localStorage for access on payment page
        localStorage.setItem('premium', premium.toFixed(2));
    } else {
        alert('Please select a product category and enter a valid sum insured.');
    }
}

function proceedToPay() {
    window.location.href = '/payment.html';
}

function redirectToFinal() {
    window.location.href = '/final.html';
}

function confirmPayment() {
    alert('Payment Confirmed!');
    // Additional payment confirmation logic can be added here
}

function downloadQuote() {
    const quote = localStorage.getItem('quote');
    const element = document.createElement('a');
    const file = new Blob([`Your final quote is: $${quote}`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "quote.txt";
    document.body.appendChild(element);
    element.click();
}

function processPayment() {
    // Here you can add any logic needed before redirecting, e.g., saving payment info
    confirmPayment(); // Optional: Call if you want to confirm payment before redirect
    window.location.href = '/final.html';
}

window.onload = function() {
    const paymentDetails = document.getElementById('paymentDetails');
    const finalQuoteDetails = document.getElementById('finalQuoteDetails');
    const quote = localStorage.getItem('quote');
    
    if (paymentDetails && quote) {
        paymentDetails.innerText = `Your premium to be paid is: $${quote}`;
    }

    if (finalQuoteDetails && quote) {
        finalQuoteDetails.innerText = `Your final quote is: $${premium}`;
    }
};



















// Function to generate a quote
function generateQuote() {
    // Retrieve input values from the form
    var category = document.getElementById("category").value;
    var sumInsured = document.getElementById("sumInsured").value;
    
    // Perform calculation based on category and sum insured
    var rate;
    switch (category) {
        case "Motor":
            rate = 0.05;
            break;
        case "Travel":
            rate = 0.05;
            break;
        case "Home":
            rate = 0.005;
            break;
        case "Fire":
            rate = 0.0025;
            break;
        default:
            alert("Invalid category");
            return;
    }
    var premium = sumInsured * rate;

    // Display the premium
    document.getElementById("premium").innerText = "Premium: $" + premium.toFixed(2);
}

// Function to send email
function sendEmail() {
    // Implement email sending logic here
    alert("Email sent!");
}

// Function to navigate to the home page
function goToHomePage() {
    window.location.href = "index.html";
}

// Function to navigate to the contact page
function goToContactPage() {
    window.location.href = "contact.html";
}

// Function to navigate to the support page
function goToSupportPage() {
    window.location.href = "support.html";
}
