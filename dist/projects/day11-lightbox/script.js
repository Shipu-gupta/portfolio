let galleryImages = document.querySelectorAll(".img-item");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");

// Open Lightbox
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

// Close on click outside image
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Close with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});
