import React from "react";

export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl text-slate-200 leading-relaxed">
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <p className="text-sm text-slate-400 mb-8">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <section className="space-y-6 text-slate-300">
        <div>
          <h2 className="font-semibold text-lg mb-2">1. Overview</h2>
          <p>
            PricePilot UK provides price comparison information to help users
            find products and offers from trusted UK retailers. By using this
            site, you agree to these terms and our related policies.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">2. Accuracy and Availability</h2>
          <p>
            We aim to provide accurate, up-to-date pricing and retailer
            information. However, we do not guarantee the availability,
            completeness, or accuracy of any listing or price. Always verify
            details directly with the retailer before purchasing.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">3. Commercial Relationships</h2>
          <p>
            Some of the retailers we feature may compensate us for referrals.
            This helps us keep PricePilot UK running and free to use. Such
            relationships do not influence our listings, ranking, or the prices
            you see.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">4. Acceptable Use</h2>
          <p>
            You agree not to misuse, copy, or attempt to scrape data from this
            site. Automated use, interference, or reverse-engineering is
            prohibited.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">5. Liability</h2>
          <p>
            PricePilot UK is not liable for any loss, damage, or claim arising
            from your use of this website or from transactions made with third
            parties. All purchases are made directly from external retailers and
            are subject to their terms and conditions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">6. Updates to Terms</h2>
          <p>
            We may update these Terms of Service occasionally to reflect changes
            to our business or legal requirements. Continued use of the website
            indicates your acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">7. Contact</h2>
          <p>
            For legal or compliance enquiries, please email{" "}
            <a
              href="mailto:legal@pricepilot-uk.com"
              className="text-indigo-400 hover:underline"
            >
              legal@pricepilot-uk.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}