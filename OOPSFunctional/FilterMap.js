class OrderService {
  constructor(orders) {
    this.orders = orders;
  }

  getCompletedOrders() {
    return this.orders
      .filter(order => order.status === "completed")
      .map(order => ({
        id: order.id,
        amount: order.amount
      }));
  }
}

const orders = [
  { id: 1, status: "completed", amount: 500 },
  { id: 2, status: "pending", amount: 300 },
  { id: 3, status: "completed", amount: 700 }
];

const service = new OrderService(orders);

console.log("Completed Orders : ", service.getCompletedOrders());