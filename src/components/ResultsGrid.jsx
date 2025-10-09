import React from "react";
import ProductCard from "./ProductCard";

export default function ResultsGrid({ items = [], loading }) {
  if (loading) {
    return (
      <div className="text-center text-slate-400 mt-10">
        Searching for the best prices…
      </div>
    );
  }

  if (!items.length) {
    // Keep the page clean when there are no results yet
    return null;
  }

  return (
    <section className="mt-10 px-2 sm:px-0">
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, i) => (
          <ProductCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
