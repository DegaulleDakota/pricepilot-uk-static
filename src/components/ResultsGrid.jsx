import ProductCard from "./ProductCard";

export default function ResultsGrid({ items = [] }) {
  if (!items.length) return null;
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <ProductCard key={p.id || p.link} product={p} />
      ))}
    </section>
  );
}
