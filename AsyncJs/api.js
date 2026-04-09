// SIMULATED BACKEND USING PROMISES

export function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const db = {
        1: { id: 1, name: "Jyotsna", role: "Software Engineer" },
        2: { id: 2, name: "Neha", role: "Developer" }
      };

      if (db[id]) resolve(db[id]);
      else reject("User not found!");
    }, 1200);
  });
}

export function fetchNotifications(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        "New message received",
        "Task assigned",
        "Build successful"
      ]);
    }, 1000);
  });
}

export function fetchTasks(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { task: "Fix login bug", status: "pending" },
        { task: "Update UI", status: "completed" }
      ]);
    }, 1500);
  });
}