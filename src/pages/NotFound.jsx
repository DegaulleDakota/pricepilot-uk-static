import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold mb-2">Page not found</h1>
      <p className="text-slate-600 mb-6">Let’s take you back home.</p>
      <Link to="/" className="px-4 py-2 rounded-xl border hover:bg-slate-50">Go Home</Link>
    </section>
  )
}
