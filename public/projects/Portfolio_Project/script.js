// Print a message in the browser console
console.log("Hello Shilpa! JavaScript is now connected.");

// Show an alert box
//alert("Welcome to my portfolio!");

// Create variables
let modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modeBtn.textContent = "☀";
    } else {
        modeBtn.textContent = "🌙";
    }
});

let name = "Shilpa";
let age = 30;
let learning = "JavaScript";

console.log("My name is", name);
console.log("I am learning", learning);
document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        let ans = item.querySelector(".faq-answer");
        ans.style.display = ans.style.display === "block" ? "none" : "block";
    });
});

window.addEventListener("scroll", reveal);

function reveal() {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

