// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar (simple) */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold">
            PricePilot UK
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <Link to="/terms" className="hover:underline">Terms</Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* Fallback: if no route matches */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <SiteFooter />
    </div>
  );
}
