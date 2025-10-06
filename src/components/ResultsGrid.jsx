import React from "react";
import ProductCard from "./ProductCard";

/**
 * Props:
 * - items?: array of product objects
 * - emptyMessage?: string
 */
export default function ResultsGrid({
  items = [],
  emptyMessage = 'No results. Try "iphone", "headphones", or "lego".',
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-xl border bg-white p-8 text-center text-gray-600">
          {emptyMessage}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((it, idx) => (
          <ProductCard key={it.product_id || it.link || idx} item={it} />
        ))}
      </div>
    </div>
  );
}
