import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error...</h2>;

  return (
    <div className="grid">
      {data.map((p) => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.title} className="product-img" />

          <h3>{p.title}</h3>
          <p>₹ {p.price}</p>

          <Link to={`/product/${p.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
