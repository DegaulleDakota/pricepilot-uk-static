import React from "react";
import ProductCard from "./ProductCard";

export default function ResultsGrid({ items }) {
  if (!items?.length) return null;
  return (
    <div className="grid" role="list" aria-label="Search results">
      {items.map((it, i) => (
        <ProductCard key={it.product_id || it.position || it.link || i} item={it} />
      ))}
    </div>
  );
}
