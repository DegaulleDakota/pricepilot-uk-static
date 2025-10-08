import React from "react";

export default function About() {
  return (
    <main className="container-page section-lg">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">About</h1>
      <p className="text-slate-300 mb-6 max-w-3xl">
        Pricepilot UK helps shoppers quickly compare prices across trusted UK
        retailers. Type what you’re looking for and we’ll fetch current offers
        so you can make a confident choice fast.
      </p>

      <div className="prose prose-invert max-w-3xl">
        <h2>How it works</h2>
        <p>
          When you search, we query multiple sources and present results in a
          clean, consistent layout. Clicking a deal takes you to the
          retailer’s website where you can verify details and purchase.
        </p>

        <h2>Our values</h2>
        <ul>
          <li><strong>Speed:</strong> results in seconds.</li>
          <li><strong>Clarity:</strong> no clutter, just the info you need.</li>
          <li><strong>Transparency:</strong> we show you where each price comes from.</li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions or feedback? Email{" "}
          <a href="mailto:hello@pricepilot-uk.com">hello@pricepilot-uk.com</a>.
        </p>
      </div>
    </main>
  );
}
