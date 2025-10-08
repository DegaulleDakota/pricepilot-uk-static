import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-950/55 bg-slate-950/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-400 to-sky-400" />
          <span className="sr-only">Pricepilot UK</span>
          <span className="hidden sm:block font-semibold tracking-tight">
            Pricepilot UK
          </span>
        </Link>

        {/* nav */}
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-slate-100 transition ${
                isActive ? "text-slate-100" : "text-slate-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-slate-100 transition ${
                isActive ? "text-slate-100" : "text-slate-300"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              `hover:text-slate-100 transition ${
                isActive ? "text-slate-100" : "text-slate-300"
              }`
            }
          >
            Privacy
          </NavLink>
          <NavLink
            to="/terms"
            className={({ isActive }) =>
              `hover:text-slate-100 transition ${
                isActive ? "text-slate-100" : "text-slate-300"
              }`
            }
          >
            Terms
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
