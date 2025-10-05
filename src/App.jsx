import React, { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ResultsGrid from "./components/ResultsGrid.jsx";
import Footer from "./components/Footer.jsx";
import productsData from "./data/products.json";

export default function App() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("best"); // best | price_asc | price_desc

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = !q
      ? productsData
      : productsData.filter((p) =>
          [p.title, p.category, p.brand].join(" ").toLowerCase().includes(q)
        );

    const sorted = [...filtered].sort((a, b) => {
      if (sort === "price_asc") return a.best_price - b.best_price;
      if (sort === "price_desc") return b.best_price - a.best_price;
      const retailersDiff = (b.retailers?.length || 0) - (a.retailers?.length || 0);
      if (retailersDiff !== 0) return retailersDiff;
      return a.best_price - b.best_price;
    });

    return sorted;
  }, [query, sort]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 pb-8">
          <div className="bg-white rounded-2xl shadow-soft p-6 -mt-10 relative z-10">
            <SearchBar
              query={query}
              onChange={setQuery}
              sort={sort}
              onSortChange={setSort}
            />
            <ResultsGrid results={results} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
