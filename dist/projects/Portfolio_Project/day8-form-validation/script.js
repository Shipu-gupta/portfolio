document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop form from submitting

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
        showError(name, "Name is required");
        valid = false;
    } else {
        showSuccess(name);
    }

    // Email validation
    if (!email.value.includes("@") || !email.value.includes(".")) {
        showError(email, "Enter a valid email");
        valid = false;
    } else {
        showSuccess(email);
    }

    // Password validation
    if (password.value.length < 6) {
        showError(password, "Password must be 6+ characters");
        valid = false;
    } else {
        showSuccess(password);
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
});

function showError(input, message) {
    let group = input.parentElement;
    group.querySelector("small").innerText = message;
    input.classList.add("error-input");
}

function showSuccess(input) {
    let group = input.parentElement;
    group.querySelector("small").innerText = "";
    input.classList.remove("error-input");
}
