import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="container-page section-lg">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Privacy Policy</h1>
      <p className="text-slate-400 text-sm mb-8">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <div className="prose prose-invert max-w-3xl">
        <p>
          We respect your privacy. This policy explains what we collect, how we
          use it, and your choices.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            <strong>Usage data:</strong> basic analytics (pages viewed, search
            terms, clicks) to improve the service. Data is aggregated and not
            used to identify you personally.
          </li>
          <li>
            <strong>Technical data:</strong> your browser type, device, and
            anonymised IP for security and performance.
          </li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use strictly necessary cookies for security and performance.
          Optional analytics cookies may be used to understand usage patterns.
          You can control cookies in your browser settings.
        </p>

        <h2>Third-party links</h2>
        <p>
          We link to retailers. Their sites have their own privacy policies. Please
          review them before purchasing.
        </p>

        <h2>Your rights</h2>
        <p>
          Under UK GDPR you may request access, correction, or deletion of your
          personal data. Contact{" "}
          <a href="mailto:privacy@pricepilot-uk.com">privacy@pricepilot-uk.com</a>.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy queries, email{" "}
          <a href="mailto:privacy@pricepilot-uk.com">privacy@pricepilot-uk.com</a>.
        </p>
      </div>
    </main>
  );
}
