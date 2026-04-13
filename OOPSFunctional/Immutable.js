const products = [
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];

const updatedProducts = products.map(product => {
  return {
    ...product,
    price: product.price * 1.1
  };
});

console.log("Updated : ", updatedProducts);
console.log("Original : ", products); // original unchanged