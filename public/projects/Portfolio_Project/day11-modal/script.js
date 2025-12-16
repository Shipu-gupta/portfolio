let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
    overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.style.display = "none";
});

// Close when clicking outside
overlay.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.style.display = "none";
});

// Close when pressing ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("show");
        overlay.style.display = "none";
    }
});
