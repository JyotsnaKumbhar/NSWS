// Import Task type
import { Task } from "./ui.js";

// Get Tasks from LocalStorage
export const getTasks = (): Task[] => {
  const data = localStorage.getItem("tasks");

  if (!data) return [];

  try {
    return JSON.parse(data) as Task[];
  } catch (error) {
    console.error("Error parsing tasks from localStorage", error);
    return [];
  }
};

// Save Tasks to LocalStorage
export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};