// Function to get input values
function getValues() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

// Function to show result + animation
function showResult(value) {
    let resultBox = document.getElementById("result");
    resultBox.innerText = "Result: " + value;

    // Pulse animation
    resultBox.classList.add("result-pulse");
    setTimeout(() => {
        resultBox.classList.remove("result-pulse");
    }, 400);
}

// ➕ Addition
function add() {
    let { num1, num2 } = getValues();
    showResult(num1 + num2);
}

// ➖ Subtraction
function subtract() {
    let { num1, num2 } = getValues();
    showResult(num1 - num2);
}

// ✖ Multiply
function multiply() {
    let { num1, num2 } = getValues();
    showResult(num1 * num2);
}

// ➗ Divide
function divide() {
    let { num1, num2 } = getValues();
    if (num2 === 0) {
        showResult("Cannot divide by 0 ❌");
    } else {
        showResult(num1 / num2);
    }
}

// 🟪 Square
function square() {
    let { num1 } = getValues();
    showResult(num1 * num1);
}

// ✔ Square Root
function squareRoot() {
    let { num1 } = getValues();

    if (num1 < 0) {
        showResult("Invalid Input ❌");
    } else {
        showResult(Math.sqrt(num1));
    }
}

// ％ Percentage
function percentage() {
    let { num1, num2 } = getValues();
    showResult((num1 / 100) * num2);
}
// 🌙 Dark Mode Toggle
let modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeBtn.innerText = "☀";
        localStorage.setItem("theme", "dark");
    } else {
        modeBtn.innerText = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// 🌙 Load saved theme on refresh
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    modeBtn.innerText = "☀";
}

function playSound() {
    document.getElementById("clickSound").play();
}
