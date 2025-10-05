import ProductCard from '../components/ProductCard'
import { MOCK_ITEMS } from '../lib/mockData'

export default function Favourites() {
  const favs = (() => {
    try { return JSON.parse(localStorage.getItem('pp_favs') || '[]') } catch { return [] }
  })()
  const favItems = MOCK_ITEMS.filter(i => favs.includes(i.id))

  function toggleFav(id) {
    const next = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id]
    localStorage.setItem('pp_favs', JSON.stringify(next))
    window.location.reload()
  }

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Your saved items</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {favItems.map((item) => (
          <ProductCard key={item.id} item={item} onToggleFav={toggleFav} isFavourite />
        ))}
        {favItems.length === 0 && (
          <div className="text-slate-500">You haven’t saved anything yet.</div>
        )}
      </div>
    </section>
  )
}
