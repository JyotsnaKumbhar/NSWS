// Import Task type (adjust path if needed)
import { Task } from "./ui.js";

// Define filter type (strict union type)
export type FilterType = "all" | "completed" | "pending";

// Filter Tasks
export const filterTasks = (
  tasks: Task[],
  filterType: string
): Task[] => {
  if (filterType === "completed") {
    return tasks.filter((t: Task) => t.completed);
  }

  if (filterType === "pending") {
    return tasks.filter((t: Task) => !t.completed);
  }

  return tasks;
};

// 🔍 Search Tasks
export const searchTasks = (
  tasks: Task[],
  query: string
): Task[] => {
  return tasks.filter((t: Task) =>
    t.text.toLowerCase().includes(query.toLowerCase())
  );
};