// App.jsx
import React, {
  useReducer,
  useEffect,
  useCallback,
  useLayoutEffect,
  useContext
} from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useFetch } from "./hooks/useFetch";
import { productReducer, initialState } from "./reducer/productReducer";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

import { ThemeProvider } from "./context/ThemeProvider";

function AppContent() {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { theme } = useContext(ThemeContext);

  // Set products
  useEffect(() => {
    dispatch({ type: "SET_PRODUCTS", payload: data });
  }, [data]);

  // Optimize search handler
  const handleSearch = useCallback((value) => {
    dispatch({ type: "SET_SEARCH", payload: value });
  }, []);

  // Layout effect (UI sync)
  useLayoutEffect(() => {
    document.body.style.background =
      theme === "light" ? "#fff" : "#222";
  }, [theme]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="top-section">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ProductList
        products={state.products}
        search={state.search}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}