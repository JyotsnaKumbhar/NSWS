class User {
  constructor(users) {
    this.users = users;
  }

  getActiveUsers() {
    return this.users.filter(user => user.active);
  }

  getUserNames() {
    return this.users.map(user => user.name);
  }
}

const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];

const userSystem = new User(users);

console.log("Activate Users : ", userSystem.getActiveUsers());
console.log("User Names : ", userSystem.getUserNames());