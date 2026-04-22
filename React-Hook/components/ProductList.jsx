
import React, { useMemo } from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, search }) {
  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="grid">
      {filteredProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}