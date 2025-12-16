let toastBox = document.getElementById("toastBox");

document.getElementById("successBtn").addEventListener("click", () => {
    showToast("Success! Operation completed.", "success");
});

document.getElementById("errorBtn").addEventListener("click", () => {
    showToast("Error! Something went wrong.", "error");
});

document.getElementById("infoBtn").addEventListener("click", () => {
    showToast("Info! Just letting you know.", "info");
});

function showToast(message, type) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add(type);
    toast.innerText = message;

    toastBox.appendChild(toast);

    // Remove automatically after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
