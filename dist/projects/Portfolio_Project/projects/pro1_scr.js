
document.getElementById("btn").addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerText = "New List Item Added!";
    document.getElementById("myList").appendChild(li);
});