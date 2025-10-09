import React from "react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} PricePilot UK. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link className="text-slate-300 hover:text-slate-100" to="/about">About</Link>
            <Link className="text-slate-300 hover:text-slate-100" to="/privacy">Privacy</Link>
            <Link className="text-slate-300 hover:text-slate-100" to="/terms">Terms</Link>
          </nav>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Disclosure: Some outbound links are affiliate links. If you click and buy, we may earn a commission at no extra cost to you.
        </p>
      </div>
    </footer>
  );
}
