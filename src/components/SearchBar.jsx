import React, { useState } from "react";

export default function SearchBar({ onSearch, loading = false }) {
  const [value, setValue] = useState(""); // EMPTY by default

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = value.trim();
    console.log("[SearchBar] submit, value:", q);
    if (!q) return;
    onSearch?.(q);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search" aria-label="Product search">
      <input
        className="input"
        type="search"
        placeholder="Search laptops, TVs, AirPods, Lego…"
        value={value}
        onChange={(e) => {
          console.log("[SearchBar] change:", e.target.value);
          setValue(e.target.value);
        }}
      />
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
