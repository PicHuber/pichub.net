// script.js
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    
    // Perform fetch request to the backend (adjust URL as necessary)
    fetch(`/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            // Display results
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.textContent = result;
                resultsDiv.appendChild(resultItem);
            });
        })
        .catch(error => console.error('Error:', error));
});
