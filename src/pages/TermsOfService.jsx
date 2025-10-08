import React from "react";

export default function TermsOfService() {
  return (
    <main className="container-page section-lg">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Terms of Service</h1>
      <p className="text-slate-400 text-sm mb-8">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <div className="prose prose-invert max-w-3xl">
        <h2>1. Overview</h2>
        <p>
          Pricepilot UK provides price comparison information. By using the
          site you agree to these terms.
        </p>

        <h2>2. No warranties</h2>
        <p>
          We aim for accuracy but do not guarantee availability, pricing, or
          specifications. Always verify on the retailer’s website before
          purchasing.
        </p>

        <h2>3. Affiliate links</h2>
        <p>
          Some links may earn us a commission. This never affects how results
          are displayed.
        </p>

        <h2>4. Acceptable use</h2>
        <p>
          Don’t abuse the service, attempt to scrape it, or interfere with
          its operation.
        </p>

        <h2>5. Liability</h2>
        <p>
          We are not liable for any losses arising from your use of the site.
        </p>

        <h2>6. Changes</h2>
        <p>
          We may update these terms. Continued use means you accept the
          revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          For legal enquiries, email{" "}
          <a href="mailto:legal@pricepilot-uk.com">legal@pricepilot-uk.com</a>.
        </p>
      </div>
    </main>
  );
}
