import { getTasks, saveTasks } from "./storage.js";
import { renderTasks, Task } from "./ui.js";
import { filterTasks, searchTasks } from "./filter.js";

// Type assertions for DOM elements
const input = document.getElementById("taskInput") as HTMLInputElement;
const addBtn = document.getElementById("addBtn") as HTMLButtonElement;
const list = document.getElementById("list") as HTMLUListElement;
const filter = document.getElementById("filter") as HTMLSelectElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;

// State
let tasks: Task[] = getTasks();

// Initial render
renderTasks(tasks, list);

// Add Task
addBtn.addEventListener("click", (): void => {
  if (!input.value.trim()) return;

  tasks.push({
    text: input.value,
    completed: false
  });

  saveTasks(tasks);
  renderTasks(tasks, list);
  input.value = "";
});

// Event Delegation (Edit/Delete/Complete)
list.addEventListener("click", (e: MouseEvent): void => {
  const target = e.target as HTMLElement;

  if (!target.dataset.id) return;

  const id = Number(target.dataset.id);

  if (target.classList.contains("delete")) {
    tasks.splice(id, 1);
  }

  if (target.classList.contains("complete")) {
    if(tasks[id]) tasks[id].completed = !tasks[id].completed;
  }

  if (target.classList.contains("edit")) {
    if(tasks[id])
    {
    const newText = prompt("Edit task:", tasks[id].text);
    if (newText) tasks[id].text = newText;
    }
  }

  saveTasks(tasks);
  renderTasks(tasks, list);
});

// Search
searchInput.addEventListener("input", (): void => {
  const filtered: Task[] = searchTasks(tasks, searchInput.value);
  renderTasks(filtered, list);
});

// Filter
filter.addEventListener("change", (): void => {
  const filtered: Task[] = filterTasks(tasks, filter.value);
  renderTasks(filtered, list);
});