import React, { useState } from "react";

export default function SearchBar({ onSearch, loading = false }) {
  const [value, setValue] = useState("");               // EMPTY by default

  const handleSubmit = (e) => {
    e.preventDefault();                                 // prevent page reload
    const q = value.trim();
    if (!q) return;                                     // do nothing on empty
    onSearch?.(q);                                      // call parent handler
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search" aria-label="Product search">
      <input
        className="input"
        type="search"
        placeholder="Search laptops, TVs, AirPods, Lego…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
