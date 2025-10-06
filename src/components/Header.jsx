import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-500/90" />
          <span className="text-xl font-semibold">
            Pricepilot <span className="text-blue-600">UK</span>
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="/about" className="hover:text-gray-900">About</a>
          <a href="/privacy" className="hover:text-gray-900">Privacy</a>
          <a href="/terms" className="hover:text-gray-900">Terms</a>
        </nav>
      </div>
    </header>
  );
}
