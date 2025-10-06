import React from "react";

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pricepilot UK. All rights reserved.</p>
          <nav className="flex gap-5">
            <a href="/about" className="hover:text-gray-900">About</a>
            <a href="/privacy" className="hover:text-gray-900">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-900">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

