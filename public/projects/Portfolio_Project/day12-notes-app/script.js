let addBtn = document.getElementById("addBtn");
let notesContainer = document.getElementById("notesContainer");

// Load saved notes when page opens
showNotes();

// Add new note
addBtn.addEventListener("click", () => {
    let note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <button class="delete-btn">Delete</button>
        <textarea placeholder="Write your note..."></textarea>
    `;

    notesContainer.appendChild(note);
    saveNotes();
});

// Delete note
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveNotes();
    }
});

// Auto save on typing
document.addEventListener("input", () => {
    saveNotes();
});

function saveNotes() {
    let notes = document.querySelectorAll("textarea");
    let data = [];

    notes.forEach(n => data.push(n.value));
    localStorage.setItem("notes", JSON.stringify(data));
}

function showNotes() {
    let data = JSON.parse(localStorage.getItem("notes"));

    if (!data) return;

    data.forEach(text => {
        let note = document.createElement("div");
        note.classList.add("note");

        note.innerHTML = `
            <button class="delete-btn">Delete</button>
            <textarea>${text}</textarea>
        `;

        notesContainer.appendChild(note);
    });
}
