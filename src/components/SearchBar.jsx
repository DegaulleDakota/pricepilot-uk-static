import React, { useState } from "react";

export default function SearchBar({ onSearch, loading = false }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    console.log("[SearchBar] submit, value:", q);
    if (!q) return;
    onSearch?.(q);
  };

  return (
    <form
      className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl"
      onSubmit={handleSubmit}
      role="search"
      aria-label="Product search"
    >
      <input
        className="flex-grow px-4 py-2 rounded text-black"
        type="search"
        placeholder="Search laptops, TVs, AirPods, Lego…"
        value={value}
        onChange={(e) => {
          console.log("[SearchBar] change:", e.target.value);
          setValue(e.target.value);
        }}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white font-medium"
        type="submit"
        disabled={loading}
      >
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
