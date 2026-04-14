import { getTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./ui.js";
import { filterTasks, searchTasks } from "./filter.js";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const filter = document.getElementById("filter");
const searchInput = document.getElementById("searchInput");

let tasks = getTasks();

// Initial render
renderTasks(tasks, list);

// ➕ Add Task
addBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  tasks.push({
    text: input.value,
    completed: false
  });

  saveTasks(tasks);
  renderTasks(tasks, list);
  input.value = "";
});

// 🔁 Event Delegation (Edit/Delete/Complete)
list.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (e.target.classList.contains("delete")) {
    tasks.splice(id, 1);
  }

  if (e.target.classList.contains("complete")) {
    tasks[id].completed = !tasks[id].completed;
  }

  if (e.target.classList.contains("edit")) {
    const newText = prompt("Edit task:", tasks[id].text);
    if (newText) tasks[id].text = newText;
  }

  saveTasks(tasks);
  renderTasks(tasks, list);
});

// 🔍 Search
searchInput.addEventListener("input", () => {
  const filtered = searchTasks(tasks, searchInput.value);
  renderTasks(filtered, list);
});

// 🎯 Filter
filter.addEventListener("change", () => {
  const filtered = filterTasks(tasks, filter.value);
  renderTasks(filtered, list);
});