/*export function render(tasks) {
  tasks.map(t => {
    console.log(t.title.toUpperCase());
  });
}*/

//Fixed
import { Task } from "../models/task.js";

export function render(tasks: Task[]): void {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = tasks
    .map(t => `
      <div class="card">
        <div class="title">${t.title}</div>
        <div class="status ${t.status}">
          ${t.status.toUpperCase()}
        </div>
      </div>
    `)
    .join("");
}

