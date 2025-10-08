import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultsGrid from "../components/ResultsGrid";

export default function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // NEW

  const handleSearch = async (query) => {
    setHasSearched(true);         // NEW: we’ve now tried at least once
    setError("");
    setLoading(true);

    try {
      const r = await fetch(
        `https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api/search?q=${encodeURIComponent(
          query
        )}`,
        { headers: { Accept: "application/json" } }
      );

      if (!r.ok) throw new Error(`Search failed (${r.status})`);
      const data = await r.json();
      setResults(data.items || []);
    } catch (e) {
      console.error(e);
      setError("Search failed. Try again or refine your query.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-2">
        Find the best UK prices, fast.
      </h1>
      <p className="text-center text-gray-400 mb-6">
        Search a product and compare offers from major UK retailers.
      </p>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-gray-400 mt-4">Loading...</p>}
      {/* Only show error after a search was attempted */}
      {!loading && hasSearched && error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      <ResultsGrid results={results} />
    </div>
  );
}
