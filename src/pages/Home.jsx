import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultsGrid from "../components/ResultsGrid";

const FN_URL =
  "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api/search";

export default function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    console.log("[Home] handleSearch called with:", query);
    setHasSearched(true);
    setLoading(true);
    setError("");

    try {
      const url = new URL(FN_URL);
      url.searchParams.set("q", query);
      url.searchParams.set("_t", Date.now().toString());

      console.log("[Home] fetching:", url.toString());
      const r = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
      });
      console.log("[Home] response status:", r.status);

      if (!r.ok) throw new Error(`Search failed (${r.status})`);

      const data = await r.json();
      console.log("[Home] data received:", data);
      console.log("[Home] results count:", data.items?.length);
      setResults(data.items || []);
    } catch (e) {
      console.error("[Home] ERROR:", e);
      setError("Search failed. Try again or refine your query.");
    } finally {
      setLoading(false);
    }
  };

  const pingFunction = async () => {
    try {
      const url = new URL(FN_URL);
      url.searchParams.set("q", "iphone 13");
      url.searchParams.set("_t", Date.now().toString());
      console.log("[Ping] fetching:", url.toString());
      const r = await fetch(url.toString(), {
        headers: { Accept: "application/json" },
      });
      console.log("[Ping] status:", r.status);
      const data = await r.json();
      alert(`Ping OK: got ${Array.isArray(data.items) ? data.items.length : 0} items`);
    } catch (e) {
      console.error("[Ping] ERROR:", e);
      alert("Ping failed – see console");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-2">Find the best UK prices, fast.</h1>
      <p className="text-center text-gray-400 mb-6">
        Search a product and compare offers from major UK retailers.
      </p>

      {/* Debug button */}
      <button className="btn mb-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded" onClick={pingFunction}>
        Ping function
      </button>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {!loading && hasSearched && error && (
        <p className="text-red-500 mt-4">{error}</p>
      )}

      <ResultsGrid results={results} />
    </div>
  );
}
