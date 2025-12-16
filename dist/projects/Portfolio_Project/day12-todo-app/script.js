let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

showTasks();

// Add new task
addTaskBtn.addEventListener("click", addTask);

// Add with Enter key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <span class="task-text">${taskInput.value}</span>
        <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
}

// Mark task as complete
taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-text")) {
        e.target.classList.toggle("completed");
        saveTasks();
    }

    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveTasks();
    }
});

// Save tasks
function saveTasks() {
    let tasks = [];

    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector(".task-text").innerText,
            completed: li.querySelector(".task-text").classList.contains("completed")
        });
    });

    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

// Load tasks
function showTasks() {
    let data = JSON.parse(localStorage.getItem("todoTasks"));

    if (!data) return;

    data.forEach(task => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text ${task.completed ? 'completed' : ''}">
                ${task.text}
            </span>
            <button class="delete-btn">X</button>
        `;

        taskList.appendChild(li);
    });
}
