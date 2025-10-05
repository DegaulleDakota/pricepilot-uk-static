import { useEffect, useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import { MOCK_ITEMS } from '../lib/mockData'
import { searchItems } from '../lib/utils'
import { searchProducts } from '../lib/api'

export default function Home() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [remote, setRemote] = useState([])
  const [favs, setFavs] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pp_favs') || '[]') } catch { return [] }
  })

  useEffect(() => {
    localStorage.setItem('pp_favs', JSON.stringify(favs))
  }, [favs])

  const localResults = useMemo(() => searchItems(MOCK_ITEMS, query), [query])
  const results = query ? remote : localResults

  async function doSearch(term) {
    setQuery(term)
    if (!term.trim()) { setRemote([]); setError(''); return }
    setLoading(true); setError('')
    try {
      const items = await searchProducts(term)
      setRemote(items)
    } catch (e) {
      setError(String(e.message || e))
      setRemote([])
    } finally {
      setLoading(false)
    }
  }

  function toggleFav(id) {
    setFavs((prev) => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight mb-3">Find the best price in the UK</h1>
        <p className="text-slate-600 mb-6">
          Type a product name and press <b>Search</b>. With a query, results come live from Google Shopping via our API.
        </p>
        <SearchBar onSearch={doSearch} initial={query} />
        {loading && <div className="mt-3 text-slate-500">Searching…</div>}
        {error && <div className="mt-3 text-red-600">Error: {error}</div>}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {results.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onToggleFav={toggleFav}
            isFavourite={favs.includes(item.id)}
          />
        ))}
        {results.length === 0 && !loading && !error && (
          <div className="text-center text-slate-500">
            {query ? 'No results from live search.' : 'Try a search (e.g., "iPhone 14").'}
          </div>
        )}
      </div>
    </section>
  )
}
