import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="container-page section">
      <head>
        <title>Privacy Policy – PricePilot UK</title>
        <meta
          name="description"
          content="Your privacy matters to us. Read how PricePilot UK handles data, cookies, and analytics in line with UK GDPR."
        />
      </head>

      <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-slate-400 mb-2">Last updated: 09 October 2025</p>

      <p className="mb-4 text-slate-300">
        We respect your privacy. This policy explains what we collect, how we use
        it, and your choices.
      </p>

      <h2 className="text-xl font-semibold mb-2">Information we collect</h2>
      <ul className="list-disc ml-6 text-slate-300 space-y-1">
        <li>
          <strong>Usage data:</strong> pages viewed, search terms, clicks, and
          other analytics to improve performance. Data is aggregated and not
          used to identify you personally.
        </li>
        <li>
          <strong>Technical data:</strong> browser type, device, and anonymised IP.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="text-slate-300">
        We use strictly necessary cookies for security and performance. Optional
        analytics cookies may help us understand usage patterns.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-party links</h2>
      <p className="text-slate-300">
        PricePilot UK links to independent retailers who have their own privacy
        policies. Review them before purchasing.
      </p>

      <p className="mt-6 text-slate-400 text-sm">
        For privacy enquiries, email{" "}
        <a href="mailto:privacy@pricepilot-uk.com" className="text-indigo-400 hover:underline">
          privacy@pricepilot-uk.com
        </a>.
      </p>
    </main>
  );
}
