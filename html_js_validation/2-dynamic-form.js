document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dynamicForm");
    const numFieldsSelect = document.getElementById("numFields");
    const inputContainer = document.getElementById("inputContainer");

    // Function to generate input fields based on the selected value
    function generateInputFields(selectedValue) {
        inputContainer.innerHTML = ""; // Clear previous input fields

        for (let i = 1; i <= selectedValue; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.name = `field${i}`;
            input.placeholder = `Field ${i}`;
            inputContainer.appendChild(input);
        }
    }

    // Event listener for the dropdown change
    numFieldsSelect.addEventListener("change", function () {
        const selectedValue = parseInt(numFieldsSelect.value);
        generateInputFields(selectedValue);
    });

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const inputs = document.querySelectorAll("#inputContainer input");
        let isValid = true;

        // Check if any input field is empty
        inputs.forEach(function (input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (!isValid) {
            alert("Please fill in all fields");
        } else {
            form.submit(); // Submit the form if all fields are filled
        }
    });
});
