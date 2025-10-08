import React from "react";

function formatPrice(value) {
  if (value == null) return null;

  if (typeof value === "string") {
    const s = value.trim();
    if (/£/.test(s)) return s;
    const num = parseFloat(s.replace(/[^\d.]/g, ""));
    if (!isNaN(num)) {
      return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        maximumFractionDigits: 2,
      }).format(num);
    }
    return s;
  }

  if (typeof value === "number") {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 2,
    }).format(value);
  }

  return String(value);
}

export default function ResultsGrid({ results = [] }) {
  if (!results.length) return null;

  return (
    <div className="grid gap-6 mt-10 w-full max-w-6xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {results.map((item, i) => {
        const displayPrice = formatPrice(
          item.price ?? item.price_text ?? item.priceValue
        );

        return (
          <div
            key={i}
            className="bg-gray-900 text-white rounded-2xl shadow-lg p-4 flex flex-col transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="w-full h-48 flex items-center justify-center bg-white rounded-lg mb-3 overflow-hidden">
              <img
                src={item.thumbnail || item.image || "/placeholder.png"}
                alt={item.title || "Product image"}
                className="object-contain h-full w-full"
              />
            </div>

            <h3 className="font-semibold text-md leading-tight line-clamp-2 min-h-[2.5rem]">
              {item.title || "Untitled"}
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {item.source || item.merchant || "Unknown retailer"}
            </p>

            {displayPrice && (
              <p className="text-green-400 font-bold text-lg mt-2">
                {displayPrice}
              </p>
            )}

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium mt-auto pt-3"
              >
                View on retailer site →
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

