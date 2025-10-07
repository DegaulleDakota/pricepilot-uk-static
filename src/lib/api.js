// src/lib/api.js
export async function searchProducts(query) {
  const url = new URL(
    "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api/search"
  );
  url.searchParams.set("q", (query || "").trim());

  const r = await fetch(url.toString(), {
    headers: { Accept: "application/json" },
  });

  if (!r.ok) {
    throw new Error(`Search failed: ${r.status}`);
  }

  const data = await r.json();
  return data.items || [];
}
