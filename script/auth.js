function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple mock authentication
    if (username === 'admin' && password === 'Dimakatso123') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
}
