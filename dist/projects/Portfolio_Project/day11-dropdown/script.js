let dropBtn = document.getElementById("dropBtn");
let menu = document.getElementById("menu");

// Toggle dropdown open/close
dropBtn.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!dropBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.style.display = "none";
    }
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        menu.style.display = "none";
    }
});
