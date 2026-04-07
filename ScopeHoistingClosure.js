console.log(appName); // undefined (var is hoisted)
var appName = "Smart Expense Tracker";

// Main module using CLOSURES + LEXICAL SCOPE
function createExpenseTracker() {
  let balance = 0;          // private variable
  let transactions = [];    // private variable

  // Private helper (closure-level access)
  function log(type, amount) {
    transactions.push({ type, amount, time: new Date() });
  }

  return {
    addIncome(amount) {
      balance += amount;
      log("income", amount);
      console.log(`Income Added: +${amount}, New Balance: ${balance}`);
    },

    addExpense(amount) {
      if (amount > balance) {
        console.log("Not enough balance!");
        return;
      }
      balance -= amount;
      log("expense", amount);
      console.log(`Expense: -${amount}, New Balance: ${balance}`);
    },

    getBalance() {
      return balance; // closure protects the variable
    },

    // Demonstrates BLOCK SCOPE + FUNCTION SCOPE
    filter(type) {
      console.log(`\nShowing: ${type.toUpperCase()}`);

      for (let i = 0; i < transactions.length; i++) { // let = block scope
        if (transactions[i].type === type) {
          console.log(`${transactions[i].type} : ${transactions[i].amount}`);
        }
      }
    }
  };
}

// Create tracker instance
const tracker = createExpenseTracker();

// Run some operations
tracker.addIncome(500);
tracker.addExpense(120);
tracker.addIncome(300);
tracker.addExpense(100);

// Filter using SCOPE
tracker.filter("income");
tracker.filter("expense");

// Final balance via closure
console.log("\nFinal Balance:", tracker.getBalance());