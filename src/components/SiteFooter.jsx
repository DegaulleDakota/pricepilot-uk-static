// src/components/SiteFooter.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-4 md:flex md:items-center md:justify-between">
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()} PricePilot UK. All rights reserved.
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
