import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ResultsGrid from "../components/ResultsGrid";
import { searchProducts } from "../lib/api";

export default function Home() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const runSearch = async () => {
    const query = q.trim();
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const res = await searchProducts(query);
      setItems(Array.isArray(res) ? res : []);
    } catch (e) {
      setError("Sorry—something went wrong. Please try again.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="container-page">
        <section className="section-lg">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-3">
              Find the best UK prices, fast.
            </h1>
            <p className="text-slate-300 mb-6">
              Search a product and compare offers from major UK retailers.
            </p>
          </div>

          <SearchBar
            value={q}
            onChange={setQ}
            onSubmit={runSearch}
            loading={loading}
          />

          {error && (
            <div className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 text-red-200 px-4 py-3">
              {error}
            </div>
          )}
        </section>

        <section className="section">
          <ResultsGrid items={items} loading={loading} />
        </section>
      </main>
    </>
  );
}
