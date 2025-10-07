// src/lib/api.js
https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api/search
// For now, just paste your DO Function URL below:

const FN_URL = import.meta.env.VITE_FN_URL || "PASTE_YOUR_FUNCTION_URL_HERE";

export async function searchProducts(query) {
  if (!query || !query.trim()) return [];

  const url = `${FN_URL}?q=${encodeURIComponent(query.trim())}`;

  const r = await fetch(url, {
    headers: { accept: "application/json" },
  });

  if (!r.ok) {
    throw new Error(`Search failed (${r.status})`);
  }

  const data = await r.json();
  return data.items ?? [];
}
