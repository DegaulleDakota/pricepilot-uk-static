import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 bg-slate-950/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-400 to-sky-400" />
          <span className="sr-only">PricePilot UK</span>
          <span className="hidden sm:block font-semibold tracking-tight">
            PricePilot UK
          </span>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-6 text-sm">
          {[
            { to: "/", label: "Home", end: true },
            { to: "/about", label: "About" },
            { to: "/privacy", label: "Privacy" },
            { to: "/terms", label: "Terms" },
          ].map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `transition hover:text-slate-100 ${
                  isActive ? "text-slate-100" : "text-slate-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
