import React from "react";

export default function ResultsGrid({ results = [] }) {
  console.log("[ResultsGrid] rendering", results.length, "items");

  if (!results.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-6xl">
      {results.map((item, i) => (
        <div
          key={i}
          className="bg-gray-800 text-white rounded-xl shadow p-4 flex flex-col"
        >
          <img
            src={item.thumbnail || item.image || "/placeholder.png"}
            alt={item.title || "Product image"}
            className="rounded-lg mb-2 w-full h-40 object-contain bg-white"
          />
          <h3 className="font-semibold text-lg mb-1 truncate">{item.title}</h3>
          <p className="text-gray-300 text-sm mb-2">{item.source || "Unknown retailer"}</p>
          {item.price && (
            <p className="text-green-400 font-bold text-md mb-2">
              £{item.price}
            </p>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm mt-auto"
            >
              View on retailer site →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
