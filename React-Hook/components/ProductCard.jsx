
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}