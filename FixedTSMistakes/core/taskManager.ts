/*let tasks = [];

export function addTask(task) {
  tasks.push(task);
}

export function getCompletedTasks() {
  return tasks.filter(t => t.status === "done");
}*/

// Fixed
import { Task, TaskStatus } from "../models/task.js";

let tasks: Task[] = [];

export function addTask(task: Task): void {
  tasks.push(task);
}

export function getTasksByStatus(status: TaskStatus): Task[] {
  return tasks.filter(t => t.status === status);
}