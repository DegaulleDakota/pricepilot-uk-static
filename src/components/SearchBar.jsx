import { useState } from 'react'

export default function SearchBar({ onSearch, initial = '' }) {
  const [term, setTerm] = useState(initial)

  return (
    <div className="flex gap-2">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') onSearch(term) }}
        placeholder="Search products (e.g., iPhone 14)"
        className="w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white"
      />
      <button
        onClick={() => onSearch(term)}
        className="px-4 py-3 rounded-2xl border bg-slate-900 text-white hover:opacity-90"
      >
        Search
      </button>
    </div>
  )
}
