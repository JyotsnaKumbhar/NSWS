/*export interface Task {
  id;
  title;
  status;
  assignedTo;
}*/

//Fixed
export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  assignedTo?: string;
}
