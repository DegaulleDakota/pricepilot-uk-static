import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const nav = [
    { to: '/', label: 'Home' },
    { to: '/favourites', label: 'Favourites' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="container mx-auto max-w-6xl flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">£</span>
          <span className="font-semibold text-lg">PricePilot UK</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {nav.map(i => (
            <NavLink
              key={i.to}
              to={i.to}
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-xl hover:bg-slate-100 ${isActive ? 'bg-slate-900 text-white' : ''}`
              }
            >
              {i.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
