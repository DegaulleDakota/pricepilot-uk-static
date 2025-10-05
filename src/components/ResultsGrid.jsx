import PriceCard from "./cards/PriceCard.jsx";

export default function ResultsGrid({ results = [] }) {
  if (!results.length) {
    return (
      <div className="mt-6 text-center text-slate-600">
        No results. Try “iPhone”, “headphones”, or “Lego”.
      </div>
    );
  }

  return (
    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
      {results.map((item) => (
        <PriceCard key={item.id} item={item} />
      ))}
    </div>
  );
}
