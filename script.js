function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "") {
        alert("Please enter your username.");
        return false;
    }

    if (password === "") {
        alert("Please enter your password.");
        return false;
    }

    return true; 
}

