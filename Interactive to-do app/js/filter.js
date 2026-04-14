export const filterTasks = (tasks, filterType) => {
  if (filterType === "completed") {
    return tasks.filter(t => t.completed);
  }
  if (filterType === "pending") {
    return tasks.filter(t => !t.completed);
  }
  return tasks;
};

export const searchTasks = (tasks, query) => {
  return tasks.filter(t =>
    t.text.toLowerCase().includes(query.toLowerCase())
  );
};