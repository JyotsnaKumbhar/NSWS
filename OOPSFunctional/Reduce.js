class Cart {
  constructor(items) {
    this.items = items;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
  }
}

const items = [
  { name: "Laptop", price: 50000, qty: 1 },
  { name: "Mouse", price: 500, qty: 2 }
];

const cart = new Cart(items);

console.log("Total Price : ", cart.getTotalPrice());