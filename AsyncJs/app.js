import { fetchUser, fetchNotifications, fetchTasks } from "./api.js";
import { wait } from "./utils.js";

async function loadDashboard(id) {
  console.log("Loading Dashboard...");

  try {
    // parallel fetching
    const [user, notifications, tasks] = await Promise.all([
      fetchUser(id),
      fetchNotifications(id),
      fetchTasks(id)
    ]);

    console.log("User:", user);
    console.log("Notifications:", notifications);
    console.log("Tasks:", tasks);

    return { user, notifications, tasks };

  } catch (err) {
    console.error("Dashboard Error:", err);
  } finally {
    console.log("Load attempt finished.");
  }
}

loadDashboard(1);
loadDashboard(99); // will cause failure