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
