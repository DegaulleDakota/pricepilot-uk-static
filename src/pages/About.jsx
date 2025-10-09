import React from "react";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl text-slate-200 leading-relaxed">
      <h1 className="text-3xl font-semibold mb-6">About</h1>

      <section className="space-y-8 text-slate-300">
        <div>
          <p className="mb-4">
            <strong>PricePilot UK</strong> helps shoppers quickly compare real-time
            prices from trusted UK retailers. Type what you’re looking for and
            we’ll fetch current offers so you can make a confident choice, fast.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">How it works</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You search for a product (e.g., “iPhone 15”).</li>
            <li>We gather live offers from multiple UK retailers.</li>
            <li>
              You compare prices, sellers and deal details in a clean, consistent
              layout.
            </li>
            <li>
              Clicking a deal takes you to the retailer’s website to verify
              availability and purchase securely.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Why trust us</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Independent comparisons</strong> — results are presented for your
              convenience; we don’t let partnerships dictate what you see.
            </li>
            <li>
              <strong>Transparent</strong> — some retailers may compensate us for
              referrals. This helps us maintain the service and is{" "}
              <em>never</em> added to your price or used to increase what you pay.
            </li>
            <li>
              <strong>Fast & simple</strong> — no clutter, just the key details to
              decide quickly.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p>
            Questions or feedback? Email{" "}
            <a
              href="mailto:hello@pricepilot-uk.com"
              className="text-indigo-400 hover:underline"
            >
              hello@pricepilot-uk.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}