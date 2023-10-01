// JavaScript's validation to check the email format when the form is submitted
function validateEmail() {
    // get value of email input
    const emailAddress = document.querySelector("#email").value;

    // Regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    // get the error message element
    const errorElement  = document.querySelector("#error");
    if (!emailRegex.test(emailAddress)){
        errorElement.innerText = "Please enter a valid email address.";
        return false;
    } else {
        errorElement.innerText = "";
        return true
    }
}
// Add an event listener to the form for form submission
// Prevent the default form submission behavior using JavaScript to
// prevent the form from submitting if the email format is not valid.
const emailForm = document.getElementById('emailForm');
emailForm.addEventListener('submit', function (event) {
    if (!validateEmail()) {
        event.preventDefault(); // Prevent form submission if email is not valid
    }
});