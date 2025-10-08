import React from "react";
import { Search } from "lucide-react"; // uses lucide-react icon library

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  loading,
  error,
  hasSearched,
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
        className="relative mx-auto flex w-full max-w-3xl items-center"
      >
        <input
          type="search"
          inputMode="search"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Search products across UK retailers..."
          className="flex-1 rounded-2xl border border-white/10 bg-gray-800/70 px-5 py-3 pr-12 text-base text-white placeholder-gray-400 outline-none transition focus:border-blue-400/50 focus:bg-gray-800"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          aria-invalid={!!error && hasSearched}
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-3 flex items-center justify-center rounded-xl bg-blue-600 p-2 text-white shadow-sm transition hover:bg-blue-500 disabled:opacity-60"
          aria-label="Search"
        >
          {loading ? (
            <span className="animate-pulse text-xs">...</span>
          ) : (
            <Search size={20} />
          )}
        </button>
      </form>

      {/* show errors only after first search */}
      <div className="mx-auto mt-3 max-w-3xl min-h-[1.25rem] text-center">
        {hasSearched && error && (
          <p className="text-sm text-red-400">
            {error || "Search failed. Try again or refine your query."}
          </p>
        )}
      </div>
    </div>
  );
}
