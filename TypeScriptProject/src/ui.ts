// Define Task type
export interface Task {
  text: string;
  completed: boolean;
}

// Function with types
export const renderTasks = (
  tasks: Task[],
  list: HTMLUListElement
): void => {
  list.innerHTML = "";

  tasks.forEach((task: Task, index: number) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">
        ${task.text}
      </span>
      <div>
        <button class="complete" data-id="${index}">✔</button>
        <button class="edit" data-id="${index}">✏</button>
        <button class="delete" data-id="${index}">❌</button>
      </div>
    `;

    list.appendChild(li);
  });
};