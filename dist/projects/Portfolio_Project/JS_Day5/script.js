let inputBox = document.getElementById("nameInput");
let output = document.getElementById("output");
let emailInput = document.getElementById("emailInput");
let emailMsg = document.getElementById("emailMsg");
let userInput = document.getElementById("userInput");
let userMsg = document.getElementById("userMsg");

inputBox.addEventListener("input", function () {
    output.innerText = "Hello " + inputBox.value;
});
inputBox.addEventListener("keydown", function(event) {
    console.log("Key DOWN:", event.key);
});

inputBox.addEventListener("keyup", function(event) {
    console.log("Key UP:", event.key);
});
inputBox.addEventListener("focus", function() {
    inputBox.style.border = "2px solid blue";
});

inputBox.addEventListener("blur", function() {
    inputBox.style.border = "2px solid gray";
});
emailInput.addEventListener("input", function() {
    if (emailInput.value.includes("@")) {
        emailMsg.innerText = "Valid Email ✔";
        emailMsg.style.color = "green";
    } else {
        emailMsg.innerText = "Invalid Email ❌";
        emailMsg.style.color = "red";
    }
});
// Fake taken usernames
let takenUsers = ["shilpa", "admin", "test123"];

userInput.addEventListener("input", function() {
    let username = userInput.value.toLowerCase();

    if (takenUsers.includes(username)) {
        userMsg.innerText = "❌ Username already taken";
        userMsg.style.color = "red";
    } 
    else if (username.length < 3) {
        userMsg.innerText = "Username too short";
        userMsg.style.color = "orange";
    } 
    else {
        userMsg.innerText = "✔ Username available";
        userMsg.style.color = "green";
    }
});