document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For demo purposes, just log the values
    console.log(`Email: ${email}, Password: ${password}`);
    
    // Simulate login by redirecting to homepage
    window.location.href = 'index.html';
});
