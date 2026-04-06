// SCRIPT 3 — FUNCTIONS + COMBINED LOGIC (04:37:28)

// 1. Simple function
function greet() {
  console.log("Hello! Welcome to JavaScript.");
}
greet();

// 2. Function with parameters
function add(x, y) {
  return x + y;
}
console.log("Add:", add(20, 30));

// 3. Arrow function
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 6));

// 4. Function that uses loops + arrays
function printNames(names) {
  console.log("Printing Names:");
  for (let n of names) {
    console.log(n);
  }
}

let students = ["Jiya", "Amit", "Riya"];
printNames(students);

// 5. Function returning object
function createUser(username, age) {
  return {
    username,
    age,
    active: true,
  };
}

let user1 = createUser("Jiya", 25);
console.log("User Object:", user1);