import React from "react";
import ProductCard from "./ProductCard.jsx";

export default function ResultsGrid({ results = [] }) {
  if (!results?.length) return null;

  return (
    <section className="mt-8">
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        "
      >
        {results.map((item, idx) => (
          <ProductCard key={item.product_id || idx} item={item} />
        ))}
      </div>
    </section>
  );
}
