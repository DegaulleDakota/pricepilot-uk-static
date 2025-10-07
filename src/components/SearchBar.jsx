import React, { useState } from "react";
import { searchProducts } from "../lib/api"; // this is the correct path for your setup

export default function SearchBar({ onResults }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const items = await searchProducts(query);
      if (items.length === 0) {
        setError("No results found. Try a different product.");
      } else {
        onResults?.(items);
      }
    } catch (err) {
      console.error("Search error:", err);
      setError("Search failed. Try again or refine your query.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="flex flex-col items-center w-full max-w-xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (error) setError("");
          }}
          placeholder="Search laptops, TVs, AirPods, Lego..."
          className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      {error && <p className="mt-3 text-red-400 text-sm">{error}</p>}
    </form>
  );
}
