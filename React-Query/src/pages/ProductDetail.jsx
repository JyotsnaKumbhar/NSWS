import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/productApi";

export default function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    enabled: !!id,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading product</h2>;

  return (
    <div>
      <img src={data.image} alt={data.title} className="detail-img" />

      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <h3>₹ {data.price}</h3>
    </div>
  );
}
