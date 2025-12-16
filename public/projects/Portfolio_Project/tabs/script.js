let buttons = document.querySelectorAll(".tab-button");
let contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        // Remove active classes
        buttons.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        // Add active to clicked button & matching content
        button.classList.add("active");
        document.getElementById(button.dataset.target).classList.add("active");
    });
});
