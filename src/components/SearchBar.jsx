import React from "react";

export default function SearchBar({ value, onChange, onSubmit, loading }) {
  return (
    <form
      className="search-bar"
      onSubmit={(e) => { e.preventDefault(); onSubmit?.(); }}
      role="search"
      aria-label="Product search"
    >
      <input
        className="input"
        type="search"
        placeholder='Search laptops, TVs, AirPods, Lego…'
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Searching…" : "Search"}
      </button>
    </form>
  );
}
