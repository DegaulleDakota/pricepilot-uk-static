import React from "react";
import ProductCard from "./ProductCard";

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 overflow-hidden shadow-sm animate-pulse">
      <div className="aspect-[4/3] bg-slate-800" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-slate-800 rounded" />
        <div className="h-4 w-2/3 bg-slate-800 rounded" />
        <div className="h-6 w-24 bg-slate-800 rounded mt-2" />
      </div>
    </div>
  );
}

export default function ResultsGrid({ items = [], loading = false }) {
  if (!loading && (!items || items.length === 0)) {
    return (
      <div className="text-slate-300">
        <p>No results yet. Try searching for something like <em>“iPhone 15”</em> or <em>“LG OLED TV”</em>.</p>
      </div>
    );
  }

  return (
    <div
      className="
        grid gap-6
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
      "
    >
      {loading
        ? Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
        : items.map((it, i) => <ProductCard key={i} item={it} />)}
    </div>
  );
}
