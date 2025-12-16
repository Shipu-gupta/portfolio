let items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        
        let answer = item.querySelector(".answer");

        // Toggle show/hide
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
