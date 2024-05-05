document.addEventListener('DOMContentLoaded', function() {
    const quoteForm = document.getElementById('quoteForm');
    const quoteResult = document.getElementById('quoteResult');

    quoteForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(quoteForm);
        const jsonFormData = {};
        formData.forEach((value, key) => { jsonFormData[key] = value });

        fetch('/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonFormData)
        })
        .then(response => response.json())
        .then(data => {
            // Update the quoteResult div with the generated quote details
            quoteResult.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Product Category: ${data.product_category}</p>
                <p>Sum Insured: ${data.sum_insured}</p>
                <p>Premium: ${data.premium} ${data.currency}</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
