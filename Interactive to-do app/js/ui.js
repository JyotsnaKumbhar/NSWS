export const renderTasks = (tasks, list) => {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? 'completed' : ''}">
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