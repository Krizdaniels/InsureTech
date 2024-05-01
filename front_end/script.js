document.addEventListener('DOMContentLoaded', function () {
    const quoteForm = document.getElementById('quoteForm');
    const quoteResult = document.getElementById('quoteResult');

    quoteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(quoteForm);
        const requestData = {};
        formData.forEach(function (value, key) {
            requestData[key] = value;
        });

        fetch('/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            // Display the generated quote or error message
            if (data.error) {
                quoteResult.innerHTML = `<p>Error: ${data.error}</p>`;
            } else {
                quoteResult.innerHTML = `<p>Generated Quote: ${data.premium} NGN</p>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            quoteResult.innerHTML = `<p>Error: Failed to fetch data</p>`;
        });
    });
});
