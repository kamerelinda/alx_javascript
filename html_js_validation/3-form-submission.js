function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Get the error message element
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Validate form fields
    if (!name || !email) {
        errorMessage.textContent = "Please fill in all required fields";
        return; // Do not submit the form if any validation fails
    }

    // At this point, all validations have passed
    // Clear the error message
    errorMessage.textContent = "";

    // You can submit the form here if needed
    // form.submit();

    // Display a success message (you can replace this with your desired success handling)
    alert("Form submitted successfully!");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("submitForm");

    form.addEventListener("submit", handleFormSubmit);
});
