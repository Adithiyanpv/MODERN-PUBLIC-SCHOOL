document.addEventListener('DOMContentLoaded', () => {
    fetch('/get-username') // Fetch the username from the backend
        .then(response => response.json())
        .then(data => {
            if (data.username) {
                document.getElementById('welcome-message').textContent = `Welcome, ${data.username}`;
            } else {
                document.getElementById('welcome-message').textContent = 'Welcome!';
            }
        })
        .catch(error => console.error('Error fetching the username:', error));
});
