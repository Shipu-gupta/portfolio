let questions = document.querySelectorAll(".faq");

questions.forEach(faq => {
    faq.addEventListener("click", () => {
        let answer = faq.querySelector(".answer");
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});
