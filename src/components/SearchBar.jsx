import { useState } from "react";

export default function SearchBar({ onSearch, defaultValue = "" }) {
  const [value, setValue] = useState(defaultValue);

  function submit(e) {
    e.preventDefault();
    onSearch?.(value);
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        className="flex-1 border rounded-md px-3 py-2"
        placeholder="Search laptops, TVs, AirPods, Lego…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md border bg-black text-white"
      >
        Search
      </button>
    </form>
  );
}
