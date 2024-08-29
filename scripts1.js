function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === 'vishwash' && password === '123') {
        window.location.href = 'aboutme.html';
        return false;
    } else {
        errorMessage.textContent = 'Invalid username or password';
        return false;
    }
}g
