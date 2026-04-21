import { useState } from "react";

function ProductCard({ name, price, image }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <img src={image} alt={name} className="product-img" />

      <div className="title">{name}</div>

      {/* 🔥 FIXED BOTTOM SECTION */}
      <div className="bottom">
        <p className="price">₹{price}</p>

        <button onClick={() => setLiked(!liked)}>
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;