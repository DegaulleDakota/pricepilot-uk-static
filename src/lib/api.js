// src/lib/api.js

// --- USE YOUR DO FUNCTION URL HERE ---
const FUNCTION_URL =
  import.meta.env.VITE_API_BASE ||
  "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api";

// Call the serverless function instead of SerpAPI directly (avoids CORS)
export async function searchProducts(query) {
  const url = new URL(`${FUNCTION_URL}/search`);
  url.searchParams.set("q", query);

  const r = await fetch(url.toString(), { headers: { accept: "application/json" } });

  if (!r.ok) {
    const text = await r.text().catch(() => "");
    throw new Error(`Search failed (${r.status}) ${text}`);
  }

  const data = await r.json();
  return data.items || [];
}
