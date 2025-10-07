// src/lib/api.js
// Uses your working DigitalOcean Function endpoint
const FN_URL = "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api/search";

export async function searchProducts(query) {
  if (!query || !query.trim()) return [];

  try {
    const res = await fetch(`${FN_URL}?q=${encodeURIComponent(query.trim())}`, {
      method: "GET",
      headers: { "Accept": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Search failed (${res.status})`);
    }

    const data = await res.json();
    return data.items || [];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}
