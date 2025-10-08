import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
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
      <button className="btn" type="submit">Search</button>
    </form>
  );
}
