//your JS code here. If required.
// Function to check and show the "Login as existing user" button if credentials are stored
function checkStoredCredentials() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    const existingUserButton = document.getElementById("existing");

    if (savedUsername && savedPassword) {
        existingUserButton.style.display = "block"; // Show button
    } else {
        existingUserButton.style.display = "none"; // Hide button
    }
}

// Function to handle form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("checkbox").checked;

    // Show alert on successful login
    alert("Logged in as " + username);

    if (rememberMe) {
        // Store credentials in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove stored credentials if "Remember Me" is unchecked
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    checkStoredCredentials(); // Update visibility of "Login as existing user" button
}

// Function to log in as an existing user
function loginAsExistingUser() {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        alert("Logged in as " + savedUsername);
    }
}

// Attach event listeners after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    checkStoredCredentials(); // Check stored credentials on page load

    document.getElementById("loginForm").addEventListener("submit", handleLogin);
    document.getElementById("existing").addEventListener("click", loginAsExistingUser);
});
