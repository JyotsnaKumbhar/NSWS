function UserManager() {
  this.users = [];
}

UserManager.prototype.addUser = function (name, age) {
  this.users.push({
    name: name,
    age: age
  });
};

UserManager.prototype.getUsers = function () {
  return this.users;
};

UserManager.prototype.findUser = function (name) {
  var found = null;
  this.users.forEach(function (user) {
    if (user.name === name) {
      found = user;
    }
  });
  return found;
};

module.exports = UserManager;