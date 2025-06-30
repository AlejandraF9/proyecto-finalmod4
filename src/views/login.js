function handleLogin() {
    const app = document.getElementById(app);
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Reset messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';

    // Basic client-side validation
    if (!username || !password) {
        errorMessage.textContent = 'Please complete all fields';
        errorMessage.style.display = 'block';
        eturn;
    }

    // Simulated login logic (replace with actual API call in production)
    if (username === 'admin' && password === 'password123') {
        successMessage.style.display = 'block';
        // Redirect or perform further actions here
        console.log('Login successful');
    } else {
            errorMessage.style.display = 'block';
        }
}

// Allow login with Enter key
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleLogin();
        }
});