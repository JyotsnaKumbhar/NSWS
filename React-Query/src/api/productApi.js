const API = "https://fakestoreapi.com";

// Get all products
export const getProducts = async () => {
  const res = await fetch(`${API}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

// Get single product
export const getProduct = async (id) => {
  const res = await fetch(`${API}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};