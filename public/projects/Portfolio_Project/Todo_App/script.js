const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const filters = document.querySelectorAll(".filter");

let todos = JSON.parse(localStorage.getItem("todos-ios")) || [];
let currentFilter = "all";

function save() {
  localStorage.setItem("todos-ios", JSON.stringify(todos));
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  const todo = {
    id: Date.now(),
    text,
    completed: false
  };

  todos.push(todo);
  save();
  input.value = "";
  render();
}

function toggleTodo(id) {
  todos = todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  save();
  render();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  save();
  render();
}

function render() {
  list.innerHTML = "";

  let filtered = todos;
  if (currentFilter === "active") filtered = todos.filter(t => !t.completed);
  if (currentFilter === "completed") filtered = todos.filter(t => t.completed);

  filtered.forEach(todo => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";

    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button onclick="toggleTodo(${todo.id})">✔</button>
        <button onclick="deleteTodo(${todo.id})">🗑</button>
      </div>
    `;

    list.appendChild(li);
  });
}

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTodo();
});

render();
