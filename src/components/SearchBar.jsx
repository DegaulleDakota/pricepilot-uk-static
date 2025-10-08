import React from "react";

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  loading,
  error,
  hasSearched, // NEW: controls when to show errors
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Product search"
        className="relative mx-auto flex w-full max-w-3xl items-center gap-2"
      >
        <input
          type="search"
          inputMode="search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Search laptops, TVs, AirPods, Lego…"
          className="flex-1 rounded-2xl border border-white/10 bg-gray-800/60 px-4 py-3 text-base text-white placeholder-gray-400 outline-none ring-0 transition focus:border-blue-400/50 focus:bg-gray-800"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={!!error && hasSearched}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500 disabled:opacity-60"
        >
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      {/* Helper / error message area */}
      <div className="mx-auto mt-3 max-w-3xl min-h-[1.25rem]">
        {hasSearched && error ? (
          <p className="text-sm text-red-400">
            {error || "Search failed. Try again or refine your query."}
          </p>
        ) : (
          <p className="text-sm text-gray-400">
            Tip: try “iPhone 15”, “LG OLED TV”, or “Lego Millennium Falcon”.
          </p>
        )}
      </div>
    </div>
  );
}
