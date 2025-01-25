//setup and initial code setup
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Function to validate username
    function validateUsername(username) {
        if (username.length < 3) {
            return "The username must be at least 3 characters long.";
        }
        return null;
    }

    // Function to validate email
    function validateEmail(email) {
        if (!email.includes("@") || !email.includes(".")) {
            return "The email provided is not valid.";
        }
        return null;
    }

    // Function to validate password
    function validatePassword(password) {
        if (password.length < 8) {
            return "The password must be at least 8 characters long.";
        }
        return null;
    }

    // Function to display feedback
    function displayFeedback(messages, isValid) {
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "#28a745"; // Green for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red for errors
        }
    }

    // Form submission handling
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Input retrieval and trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation logic
        const messages = [];
        let isValid = true;

        // Validate inputs using functions
        const usernameError = validateUsername(username);
        if (usernameError) {
            isValid = false;
            messages.push(usernameError);
        }

        const emailError = validateEmail(email);
        if (emailError) {
            isValid = false;
            messages.push(emailError);
        }

        const passwordError = validatePassword(password);
        if (passwordError) {
            isValid = false;
            messages.push(passwordError);
        }

        // Display feedback
        displayFeedback(messages, isValid);
    });
});