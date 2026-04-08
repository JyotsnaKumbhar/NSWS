import UserManager from "./userManager-es6.js";
import { sampleUsers } from "./data.js";

// async simulation
const simulateApi = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(sampleUsers), 1000);
  });

const main = async () => {
  console.log("⏳ Fetching users...");

  const usersFromApi = await simulateApi();
  const manager = new UserManager(usersFromApi);

  manager.addUser("Prakash", 32);

  console.log(`👤 Total Users: ${manager.getUsers().length}`);

  console.log("🔍 Searching user: Riya");
  console.log(manager.findUser("Riya"));
};

main();