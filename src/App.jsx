import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import "./index.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setProducts([]);

    try {
      const response = await fetch(
        `https://serpapi.com/search.json?engine=google_shopping&q=${encodeURIComponent(
          query
        )}&gl=uk&hl=en&api_key=${import.meta.env.VITE_SERPAPI_KEY}`
      );

      const data = await response.json();
      if (data.shopping_results) {
        setProducts(data.shopping_results);
      } else {
        setError("No results found. Try another search term.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">PricePilot UK</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <ProductList products={products} />
    </div>
  );
}
