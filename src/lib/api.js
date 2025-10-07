// src/lib/api.js
// Now safely calls your DigitalOcean serverless proxy

const FN_URL =
  "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-f90ec0fb-42a4-4b82-9417-be5790de6095/api/search";

export async function searchProducts(query) {
  if (!query || !query.trim()) return [];

  try {
    const response = await fetch(`${FN_URL}?q=${encodeURIComponent(query)}`, {
      method: "GET",
      headers: { "Accept": "application/json" },
    });

    if (!response.ok) {
      console.error("API response error:", response.status);
      throw new Error("Search request failed");
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
