// Step 1: select elements
let heading = document.getElementById("heading");
let btn = document.getElementById("changeBtn");

// Step 2: add event to button
btn.addEventListener("click", function() {
    heading.innerText = "You clicked the button! ⭐";
    heading.style.color = "blue";
});
let bgBtn = document.getElementById("bgBtn");

bgBtn.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});

let counter = 0;

let counterDisplay = document.getElementById("counterValue");
let incBtn = document.getElementById("increaseBtn");
let decBtn = document.getElementById("decreaseBtn");

incBtn.addEventListener("click", function() {
    counter++;
    counterDisplay.innerText = counter;
});

decBtn.addEventListener("click", function() {
    counter--;
    counterDisplay.innerText = counter;
});
