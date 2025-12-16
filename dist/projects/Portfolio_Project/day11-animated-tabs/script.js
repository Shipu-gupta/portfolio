let tabs = document.querySelectorAll(".tab");
let contents = document.querySelectorAll(".content");
let indicator = document.querySelector(".indicator");

function updateIndicator(activeTab) {
    indicator.style.width = activeTab.offsetWidth + "px";
    indicator.style.left = activeTab.offsetLeft + "px";
}

// Initial indicator setup
updateIndicator(document.querySelector(".tab.active"));

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        // Remove active from previous
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");

        updateIndicator(tab);

        // Hide all content
        contents.forEach(c => c.classList.add("hidden"));

        // Show selected content
        let target = tab.getAttribute("data-target");
        document.getElementById(target).classList.remove("hidden");
    });
});
