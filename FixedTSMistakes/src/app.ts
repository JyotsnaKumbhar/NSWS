/*import { getTasks } from "./services/api";
import { addTask, getCompletedTasks } from "./core/taskManager";
import { render } from "./ui/render";

async function main() {
  const data = await getTasks();

  data.forEach(task => {
    addTask(task);
  });

  const done = getCompletedTasks();
  render(done);
}

main();*/

import { getTasks } from "./services/api.js";
import { render } from "./ui/render.js";
import { Task } from "./models/task.js";

let allTasks: Task[] = [];

function filterTasks(value: string) {
  if (value === "all") {
    render(allTasks);
  } else {
    const filtered = allTasks.filter(t => t.status === value);
    render(filtered);
  }
}

async function main() {
  allTasks = await getTasks();

  render(allTasks.slice(0, 20));

  const filter = document.getElementById("filter") as HTMLSelectElement;

  if (!filter) return;

  filter.addEventListener("change", () => {
    filterTasks(filter.value);
  });
}

main();