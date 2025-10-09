import React from "react";

export default function About() {
  return (
    <main className="container-page section">
      <head>
        <title>About PricePilot UK – Compare UK Prices Fast</title>
        <meta
          name="description"
          content="Learn how PricePilot UK helps shoppers find the best deals across top UK retailers using trusted price comparison tools."
        />
      </head>

      <h1 className="text-3xl font-semibold mb-4">About</h1>
      <p className="mb-6 text-slate-300">
        PricePilot UK helps shoppers quickly compare prices across trusted UK
        retailers. Type what you’re looking for and we’ll fetch current offers
        so you can make a confident choice fast.
      </p>

      <h2 className="text-xl font-semibold mb-2">How it works</h2>
      <p className="mb-6 text-slate-300">
        When you search, we query multiple sources and present results in a
        clean, consistent layout. Clicking a deal takes you to the retailer’s
        website, where you can verify details and complete your purchase.
      </p>

      <h2 className="text-xl font-semibold mb-2">Our values</h2>
      <ul className="list-disc ml-6 text-slate-300 space-y-1">
        <li><strong>Speed:</strong> results in seconds.</li>
        <li><strong>Clarity:</strong> no clutter—just the info you need.</li>
        <li><strong>Transparency:</strong> we show you where each price comes from.</li>
      </ul>

      <p className="mt-8 text-slate-400 text-sm">
        Questions or feedback? Email{" "}
        <a href="mailto:hello@pricepilot-uk.com" className="text-indigo-400 hover:underline">
          hello@pricepilot-uk.com
        </a>.
      </p>
    </main>
  );
}
