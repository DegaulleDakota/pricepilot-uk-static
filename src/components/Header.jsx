import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-gradient-to-b from-gray-950 to-gray-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="/" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-blue-500/20 ring-1 ring-blue-400/30 grid place-items-center">
            <span className="text-blue-300 font-black">£</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Pricepilot <span className="text-blue-300">UK</span>
          </span>
        </a>

        {/* Simple top nav (optional) */}
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-300">
          <a className="hover:text-white" href="/about">About</a>
          <a className="hover:text-white" href="/privacy">Privacy</a>
          <a className="hover:text-white" href="/terms">Terms</a>
        </nav>
      </div>
    </header>
  );
}
