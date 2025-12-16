let searchBox = document.getElementById("searchBox");
let listItems = document.querySelectorAll("#list li");

searchBox.addEventListener("keyup", function() {
    let text = searchBox.value.toLowerCase();

    listItems.forEach(item => {
        let name = item.textContent.toLowerCase();

        if (name.includes(text)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
