import React from "react";

export default function TermsOfService() {
  return (
    <main className="container-page section">
      <head>
        <title>Terms of Service – PricePilot UK</title>
        <meta
          name="description"
          content="Review the terms of use for PricePilot UK – your trusted UK price comparison platform."
        />
      </head>

      <h1 className="text-3xl font-semibold mb-4">Terms of Service</h1>
      <p className="text-slate-400 mb-2">Last updated: 09 October 2025</p>

      <ol className="list-decimal ml-6 text-slate-300 space-y-3">
        <li>
          <strong>Overview:</strong> PricePilot UK provides price-comparison
          information. Using this site means you accept these terms.
        </li>
        <li>
          <strong>No warranties:</strong> We aim for accuracy but cannot guarantee
          product availability or pricing.
        </li>
        <li>
          <strong>Affiliate links:</strong> Some links may earn us a commission.
          This never affects how results are displayed.
        </li>
        <li>
          <strong>Acceptable use:</strong> Don’t abuse or attempt to scrape or
          interfere with the site’s operation.
        </li>
        <li>
          <strong>Liability:</strong> We are not liable for any losses arising from
          use of the site.
        </li>
        <li>
          <strong>Updates:</strong> We may revise these terms; continued use
          means you accept the latest version.
        </li>
      </ol>

      <p className="mt-6 text-slate-400 text-sm">
        Legal enquiries:{" "}
        <a href="mailto:legal@pricepilot-uk.com" className="text-indigo-400 hover:underline">
          legal@pricepilot-uk.com
        </a>
      </p>
    </main>
  );
}
