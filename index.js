document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        clearErrors(); 

        let isValid = true;

        // Get form field values
        const fullName = document.querySelector("input[placeholder='Full Name']");
        const email = document.querySelector("input[placeholder='Email Address']");
        const phone = document.querySelector("input[placeholder='Phone Number']");
        const date = document.querySelector("input[type='date']");
        const gender = document.querySelector("select");
        const city = document.querySelector("input[placeholder='City']");
        const state = document.querySelector("input[placeholder='State']");
        const country = document.querySelector("input[placeholder='Country']");
        const address = document.querySelector("input[placeholder='Address']");
        const message = document.querySelector("textarea");
        const fileInput = document.querySelector("input[type='file']");
        const termsCheckbox = document.querySelector("#terms");

        
        function showError(input, message) {
            const error = document.createElement("small");
            error.classList.add("text-danger");
            error.textContent = message;
            input.parentElement.appendChild(error);
        }

        function clearErrors() {
            document.querySelectorAll(".text-danger").forEach(error => error.remove());
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function isValidPhone(phone) {
            return /^[0-9]{10}$/.test(phone);
        }

        
        if (!fullName.value.trim()) {
            showError(fullName, "Full Name is required.");
            isValid = false;
        }

        if (!email.value.trim() || !isValidEmail(email.value.trim())) {
            showError(email, "Enter a valid email address.");
            isValid = false;
        }

        if (!phone.value.trim() || !isValidPhone(phone.value.trim())) {
            showError(phone, "Enter a valid 10-digit phone number.");
            isValid = false;
        }

        if (!date.value.trim()) {
            showError(date, "Please select a date.");
            isValid = false;
        }

        if (gender.value === "") {
            showError(gender, "Please select your gender.");
            isValid = false;
        }

        if (!city.value.trim()) {
            showError(city, "City is required.");
            isValid = false;
        }

        if (!state.value.trim()) {
            showError(state, "State is required.");
            isValid = false;
        }

        if (!country.value.trim()) {
            showError(country, "Country is required.");
            isValid = false;
        }

        if (!address.value.trim()) {
            showError(address, "Address is required.");
            isValid = false;
        }

        if (!message.value.trim()) {
            showError(message, "Message cannot be empty.");
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            showError(termsCheckbox, "You must agree to the terms and conditions.");
            isValid = false;
        }

        if (fileInput.files.length === 0) {
            showError(fileInput, "Please upload a file.");
            isValid = false;
        }

        
        if (isValid) {
            simulateFormSubmission();
        }
    });

    function simulateFormSubmission() {
        const submitButton = document.querySelector(".contact-form button");
        submitButton.textContent = "Submitting...";
        submitButton.disabled = true;

        new Promise((resolve) => {
            setTimeout(() => {
                resolve("Form submitted successfully!");
            }, 2000);
        })
        .then((message) => {
            alert(message);
            document.querySelector(".contact-form").reset(); 
        })
        .finally(() => {
            submitButton.textContent = "Submit Information";
            submitButton.disabled = false;
        });
    }
});
