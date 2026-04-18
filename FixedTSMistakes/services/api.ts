/*export async function getTasks() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
}*/

//Fixed 
import { Task } from "../models/task.js";

export async function getTasks(): Promise<Task[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) {
    throw new Error("API Error");
  }

  const data: unknown = await res.json();

  if (!Array.isArray(data)) {
    throw new Error("Invalid data");
  }

  return data.map((item: any): Task => ({
    id: item.id,
    title: item.title,
    status: item.completed ? "done" : "todo"
  }));
}