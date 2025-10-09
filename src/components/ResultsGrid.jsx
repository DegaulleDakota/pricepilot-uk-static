import React from "react";
import ProductCard from "./ProductCard";

// Simple skeleton loader while fetching
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
        <div className="h-4 bg-slate-800 rounded w-4/5" />
        <div className="h-3 bg-slate-800 rounded w-2/5" />
        <div className="h-9 bg-slate-800 rounded-xl w-28 mt-4" />
      </div>
    </div>
  );
}

export default function ResultsGrid({ items = [], loading }) {
  if (!loading && items.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-20">
      <div
        className="
          grid gap-6 sm:gap-7 lg:gap-8
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          justify-items-center
        "
      >
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : items.map((item, i) => <ProductCard key={i} item={item} />)}
      </div>

      {/* Spacer when no results */}
      {!loading && items.length === 0 && (
        <div className="text-center text-slate-400 mt-10">
          No results found. Try searching for something else.
        </div>
      )}
    </section>
  );
}
