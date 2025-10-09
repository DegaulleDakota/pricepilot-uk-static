import React from "react";

export default function SiteFooter() {
  return (
    <footer className="site-footer mt-12 border-t border-slate-800/60 bg-slate-950/50 backdrop-blur-sm">
      <div
        className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400"
      >
        <div className="text-center sm:text-left">
          © {new Date().getFullYear()} PricePilot UK. All rights reserved.
          <br />
          <span className="block text-slate-500 text-xs mt-1">
            Some of the retailers we feature may compensate us for referrals.
            This helps us keep PricePilot UK running and free to use, and does
            not influence the information or prices shown.
          </span>
        </div>

        <nav className="flex gap-4 text-sm">
          <a
            href="/about"
            className="hover:text-indigo-400 transition-colors"
          >
            About
          </a>
          <a
            href="/privacy"
            className="hover:text-indigo-400 transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hover:text-indigo-400 transition-colors"
          >
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}