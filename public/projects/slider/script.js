let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

let slide = document.getElementById("slide");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

// Next Image
next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    slide.src = images[index];
});

// Previous Image
prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    slide.src = images[index];
});

// Auto Slide (optional)
setInterval(() => {
    index = (index + 1) % images.length;
    slide.src = images[index];
}, 3000);
