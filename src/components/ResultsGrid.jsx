import React from "react";
import ProductCard from "./ProductCard";

// Skeleton card for loading state
function SkeletonCard() {
  return (
    <div
      className="
        rounded-2xl border border-slate-800/80 bg-slate-900/60
        overflow-hidden shadow-sm animate-pulse
      "
    >
      <div className="aspect-[1/1] md:aspect-[4/3] bg-slate-800/80" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-800 rounded w-11/12" />
        <div className="h-3 bg-slate-800 rounded w-1/2" />
        <div className="h-9 bg-slate-800 rounded-xl w-28 mt-4" />
      </div>
    </div>
  );
}

export default function ResultsGrid({ items = [], loading }) {
  // Hide message until user searches
  if (!loading && items.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-20">
      <div
        className="
          grid gap-5 sm:gap-6 lg:gap-7 xl:gap-8
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
        "
      >
        {loading
          ? // show skeleton placeholders while fetching
            Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : // show real product cards once loaded
            items.map((item, i) => <ProductCard key={i} item={item} />)}
      </div>
    </section>
  );
}
