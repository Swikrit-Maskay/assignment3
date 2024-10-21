// Sign-up form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        clearErrors();

        let isValid = validateForm();

        if (isValid) {
            setTimeout(function() {
                window.location.href = "success.html"; 
            }, 500); 
        }
    });

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Full name is required");
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required");
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address");
            isValid = false;
        }

        if (passwordInput.value.trim() === "") {
            showError(passwordInput, "Password is required");
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            showError(passwordInput, "Password must be at least 6 characters long");
            isValid = false;
        }

        if (confirmPasswordInput.value.trim() === "") {
            showError(confirmPasswordInput, "Please confirm your password");
            isValid = false;
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            showError(confirmPasswordInput, "Passwords do not match");
            isValid = false;
        }

        return isValid;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        formGroup.appendChild(errorElement);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(message) {
            message.remove();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
