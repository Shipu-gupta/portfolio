let btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.textContent = "☀ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
});
