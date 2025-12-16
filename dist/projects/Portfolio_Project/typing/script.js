const text = ["Shilpa Gupta", "a Web Developer", "a Fast Learner", "Creative & Smart"];
let index = 0;
let charIndex = 0;

function typeEffect() {
    let currentText = text[index];
    document.getElementById("typing").innerText = currentText.slice(0, charIndex);

    charIndex++;

    if (charIndex > currentText.length) {
        // Pause before deleting
        setTimeout(() => {
            deleteEffect();
        }, 800);
    } else {
        setTimeout(typeEffect, 120);
    }
}

function deleteEffect() {
    let currentText = text[index];
    document.getElementById("typing").innerText = currentText.slice(0, charIndex);

    charIndex--;

    if (charIndex < 0) {
        index = (index + 1) % text.length;
        setTimeout(typeEffect, 300);
    } else {
        setTimeout(deleteEffect, 80);
    }
}

typeEffect();
