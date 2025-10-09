import React from "react";

export default function SearchBar({ value, onChange, onSubmit, loading }) {
  return (
    <form
      className="w-full"
      role="search"
      aria-label="Product search"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            flex items-center gap-2 rounded-2xl bg-slate-900/70
            ring-1 ring-slate-800 focus-within:ring-indigo-500
            px-3 py-2 shadow-sm
          "
        >
          <input
            className="
              flex-1 bg-transparent outline-none placeholder:text-slate-500
              text-slate-100 text-base px-1 py-1
            "
            type="search"
            inputMode="search"
            autoComplete="off"
            spellCheck="false"
            placeholder="Search laptops, TVs, AirPods, Lego…"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            aria-label="Search products"
          />

          {value ? (
            <button
              type="button"
              onClick={() => onChange?.("")}
              className="text-slate-400 hover:text-slate-200 px-2"
              aria-label="Clear search"
              title="Clear"
            >
              ×
            </button>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex items-center justify-center
              rounded-xl px-4 py-2 text-sm font-medium
              bg-indigo-500 text-white hover:bg-indigo-400
              disabled:opacity-60 disabled:cursor-not-allowed
            "
            aria-label="Search"
          >
            {loading ? "Searching…" : "Search"}
          </button>
        </div>
      </div>
    </form>
  );
}
