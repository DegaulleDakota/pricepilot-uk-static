// src/lib/api.js
//
// Simple client-side call to SerpAPI Google Shopping.
// DigitalOcean Static Sites inject Vite env vars at **build time**,
// so we read them from import.meta.env.

const SERP_KEY = import.meta.env.VITE_SERPAPI_KEY;
const GOOGLE_DOMAIN = import.meta.env.VITE_GOOGLE_DOMAIN || "google.co.uk";
const GL = import.meta.env.VITE_GL || "uk";
const HL = import.meta.env.VITE_HL || "en";

// (Optional) quick visibility in the browser console during debugging
// You can remove these two lines later.
console.log("SerpAPI key available?", !!SERP_KEY);
console.log("Domain/GL/HL:", GOOGLE_DOMAIN, GL, HL);

/**
 * Query Google Shopping via SerpAPI and return the raw shopping_results array.
 * @param {string} query - e.g. "iphone 14"
 * @returns {Promise<Array>} shopping_results (possibly empty)
 */
export async function searchProducts(query) {
  if (!query || !query.trim()) return [];

  if (!SERP_KEY) {
    throw new Error("Missing SerpAPI key (VITE_SERPAPI_KEY).");
  }

  const params = new URLSearchParams({
    engine: "google_shopping",
    q: query.trim(),
    google_domain: GOOGLE_DOMAIN,
    gl: GL,
    hl: HL,
    api_key: SERP_KEY,
  });

  const url = `https://serpapi.com/search.json?${params.toString()}`;

  const r = await fetch(url, { headers: { Accept: "application/json" } });
  if (!r.ok) {
    throw new Error(`Search failed (HTTP ${r.status})`);
  }

  const data = await r.json();
  // SerpAPI returns results under data.shopping_results
  return Array.isArray(data?.shopping_results) ? data.shopping_results : [];
}
