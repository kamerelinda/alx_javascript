// Implement JavaScript validation to check the password strength when the form is submitted.
    function validatePassword() {
        // Retrieve the value entered in input field using JavaScript.
        let password = document.querySelector("#password").value;

        // Define a regular expression to check each criterion

        const lengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*()\-+.]/;

        // initialize an error message
        let errorMessage = "";

        if (!lengthRegex.test(password)) {
            // Display error message
            errorMessage += "Password should be at least 8 characters long.\n";
        }
        if (!uppercaseRegex.test(password)) {
            // Display error message
            errorMessage += "Password should at least contain an uppercase letter.\n";
        }
        if (!lowercaseRegex.test(password)) {
            // Display error message
            errorMessage += "Password should at least contain a lowercase letter.\n";
        }
        if (!digitRegex.test(password)) {
            // Display error message
            errorMessage += "Password should contain at least one digit\n";
        }
        if (!specialCharRegex.test(password)) {
            // Display error message
            errorMessage += "Password should contain at least one special character\n";
        }
        // Display error message or allow form submission
        let errorElement = document.getElementById("error");
        if (errorMessage !== "") {
            errorElement.innerText = errorMessage;
            return false;
        } else {
            errorElement.innerText = ""; // clear any previous messages
            return true;
        }
    }
    // Prevent the default form submission behavior using JavaScript to
    // prevent the form from submitting if the email format is not valid.
const passwordForm = document.getElementById('passwordForm');
passwordForm.addEventListener('submit', function (event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if email is not valid
    }
});



