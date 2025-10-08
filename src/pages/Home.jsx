import React, { useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import ResultsGrid from "../components/ResultsGrid.jsx";
import { searchProducts } from "../lib/api.js";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false); // gate for errors

  const doSearch = async () => {
    setHasSearched(true);
    setError("");
    setLoading(true);
    try {
      const items = await searchProducts(query);
      setResults(items || []);
      if (!items || items.length === 0) {
        setError("No results found. Try a different product.");
      }
    } catch (e) {
      setError("Search failed. Try again or refine your query.");
      console.error("[SearchError]", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4">
        {/* Hero / headline */}
        <section className="pt-12 pb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Find the best UK prices, fast.
          </h1>
          <p className="mt-3 text-gray-300">
            Search a product and compare offers from major UK retailers.
          </p>

          <div className="mt-8">
            <SearchBar
              value={query}
              onChange={setQuery}
              onSubmit={doSearch}
              loading={loading}
              error={error}
              hasSearched={hasSearched}
            />
          </div>
        </section>

        {/* Results */}
        {!loading && <ResultsGrid results={results} />}

        {/* Loading note */}
        {loading && (
          <p className="mt-10 text-center text-gray-300">Getting the best prices…</p>
        )}
      </main>

      <footer className="mt-16 border-t border-white/10 py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pricepilot UK. All rights reserved.
      </footer>
    </div>
  );
}
