let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");

// Open modal
openBtn.addEventListener("click", () => {
    modal.classList.add("show");
    overlay.style.display = "block";
});

// Close modal
closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.style.display = "none";
});

// Close by clicking overlay
overlay.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.style.display = "none";
});
