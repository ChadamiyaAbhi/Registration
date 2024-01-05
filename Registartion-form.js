function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var rememberMe = document.getElementById("rememberme").checked;

    // Reset error messages
    clearErrorMessages();

    // Validate email
    if (!isValidEmail(email)) {
        displayErrorMessage("Invalid email address");
        return;
    }

    // Validate password
    if (!isValidPassword(password)) {
        displayErrorMessage("Password must be at least 6 characters with at least one digit");
        return;
    }

    // Your registration logic goes here
    // For demonstration purposes, we'll just log the values
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Remember Me:", rememberMe);
}

function isValidEmail(email) {
    // Implement your email validation logic
    // For simplicity, we'll use a basic regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // Implement your password validation logic
    // For simplicity, we'll require at least 6 characters with at least one digit
    var passwordRegex = /^(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
}

function displayErrorMessage(message) {
    var errorMessage = document.createElement("div");
    errorMessage.className = "error-message";
    errorMessage.textContent = message;
    document.getElementById("registrationForm").appendChild(errorMessage);
}

function clearErrorMessages() {
    var errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function (errorMessage) {
        errorMessage.remove();
    });
}
