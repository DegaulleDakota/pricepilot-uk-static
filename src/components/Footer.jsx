import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800/70 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span className="text-slate-100 font-semibold text-lg">
                Pricepilot UK
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 max-w-prose">
              Compare prices from major UK retailers in seconds. We aim to show
              accurate prices, but please check the retailer’s site for the most
              up-to-date information.
            </p>
          </div>

          <div>
            <h4 className="text-slate-200 font-medium mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="link-muted" to="/about">About</Link></li>
              <li><a className="link-muted" href="mailto:hello@pricepilot-uk.com">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="link-muted" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="link-muted" to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Pricepilot UK. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Prices include VAT where applicable.
          </p>
        </div>
      </div>
    </footer>
  );
}


