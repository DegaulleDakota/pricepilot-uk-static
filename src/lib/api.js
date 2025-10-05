// src/lib/api.js
// Uses a build-time var for production, localhost for dev.
const PROD_BASE = import.meta.env.VITE_API_BASE;        // e.g. https://api.pricepilot-uk.com
const API_BASE = import.meta.env.DEV ? "http://127.0.0.1:8787" : (PROD_BASE || "/api");

export async function searchProducts(query) {
  const url = new URL(`${API_BASE}/search`);
  url.searchParams.set("q", query);
  const r = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!r.ok) throw new Error(`Search failed (${r.status})`);
  const { items } = await r.json();
  return items || [];
}
