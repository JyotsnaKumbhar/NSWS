// SCRIPT 2 — LOOPS & ARRAYS (02:30:37 – 03:43:30)

// Arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("All Fruits:", fruits);
console.log("First Fruit:", fruits[0]);

// Add & Remove
fruits.push("Grapes");   // add
fruits.pop();            // remove last

console.log("Updated Fruits:", fruits);

// Loops

// 1. For loop
console.log("FOR LOOP:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. While loop
console.log("WHILE LOOP:");
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

// 3. For-of loop
console.log("FOR-OF LOOP:");
for (let item of fruits) {
  console.log(item);
}