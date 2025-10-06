import React, { useState, useEffect } from "react";

/**
 * Props:
 * - initialQuery?: string
 * - onSearch?: (q: string) => void
 */
export default function SearchBar({ initialQuery = "", onSearch }) {
  const [query, setQuery] = useState(initialQuery);

  // If parent later changes the initial query, reflect it
  useEffect(() => setQuery(initialQuery), [initialQuery]);

  function submit(e) {
    e?.preventDefault();
    const q = query.trim();
    if (!q) return;
    if (typeof onSearch === "function") onSearch(q);
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="mx-auto max-w-3xl px-4 py-5">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search laptops, TVs, AirPods, "Lego"...'
            className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="rounded-xl px-5 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Search
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          Tip: try <span className="font-medium">"iphone"</span>,{" "}
          <span className="font-medium">"headphones"</span>, or{" "}
          <span className="font-medium">"lego"</span>.
        </p>
      </div>
    </form>
  );
}
