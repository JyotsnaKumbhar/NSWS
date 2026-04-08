export default class UserManager {
  users = [];

  constructor(initialUsers = []) {
    this.users = [...initialUsers];
  }

  addUser = (name, age) => {
    this.users.push({ name, age });
  };

  getUsers = () => this.users;

  findUser = (searchName) =>
    this.users.find(({ name }) => name === searchName);
}