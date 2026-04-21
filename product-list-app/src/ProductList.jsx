import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);   // API data
  const [loading, setLoading] = useState(true);   // loading state
  const [error, setError] = useState(null);       // error state

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🟡 Loading UI
  if (loading) return <h2>Loading...</h2>;

  // 🔴 Error UI
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;