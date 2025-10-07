// src/lib/api.js
// Calls your DigitalOcean serverless function (no CORS issues)

const FN_URL =
  "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api/search";

export async function searchProducts(query) {
  if (!query || !query.trim()) return [];

  const res = await fetch(`${FN_URL}?q=${encodeURIComponent(query)}`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Search request failed: ${res.status}`);
  }

  const data = await res.json();
  return data.items || [];
}
