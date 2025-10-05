import { useId } from "react";

export default function SearchBar({ query, onChange, sort, onSortChange }) {
  const inputId = useId();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <label htmlFor={inputId} className="sr-only">Search products</label>
      <input
        id={inputId}
        type="text"
        placeholder="Search laptops, TVs, AirPods, Lego…"
        className="w-full md:max-w-xl rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-brand-200"
        value={query}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-600">Sort</span>
        <select
          className="rounded-xl border border-slate-200 px-3 py-2 bg-white focus:ring-4 focus:ring-brand-200"
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="best">Best match</option>
          <option value="price_asc">Price (low → high)</option>
          <option value="price_desc">Price (high → low)</option>
        </select>
      </div>
    </div>
  );
}
