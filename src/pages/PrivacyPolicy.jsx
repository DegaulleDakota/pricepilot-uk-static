import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl text-slate-200 leading-relaxed">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-8">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <section className="space-y-6 text-slate-300">
        <div>
          <h2 className="font-semibold text-lg mb-2">1. Introduction</h2>
          <p>
            We value your privacy. This policy explains what information we
            collect, how we use it, and your rights under UK data protection
            law. By using PricePilot UK, you agree to this Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">2. Information We Collect</h2>
          <p>
            We collect minimal information required to provide and improve our
            service, including:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Usage data</strong> – pages viewed, search terms, and basic
              analytics to understand site performance.
            </li>
            <li>
              <strong>Technical data</strong> – browser type, device, and anonymised IP
              address for security and performance monitoring.
            </li>
            <li>
              <strong>Contact data</strong> – only if you email us directly (your
              message and reply address are used solely to respond).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">3. Cookies</h2>
          <p>
            We use essential cookies for functionality and security. Optional
            analytics cookies may be used to understand user trends. You can
            manage cookies via your browser settings at any time.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">4. Third-Party Retailers</h2>
          <p>
            PricePilot UK links to independent UK retailers. When you click a
            deal, you are redirected to the retailer’s own website, which is
            subject to their privacy and cookie policies. Please review them
            before making a purchase.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">5. Commercial Relationships</h2>
          <p>
            Some retailers may compensate us for referrals. This allows us to
            keep PricePilot UK running and free to use. Such partnerships do not
            influence the information or prices shown to you.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">6. Your Rights</h2>
          <p>
            Under the UK GDPR, you have rights to access, correct, or delete your
            personal data. If you wish to exercise these rights, please contact
            us using the details below.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">7. Contact</h2>
          <p>
            For privacy-related queries, email{" "}
            <a
              href="mailto:privacy@pricepilot-uk.com"
              className="text-indigo-400 hover:underline"
            >
              privacy@pricepilot-uk.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}