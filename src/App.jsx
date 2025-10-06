import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultsGrid from "./components/ResultsGrid";
import SiteFooter from "./components/SiteFooter";

const GL = import.meta.env.VITE_GL || "uk";
const GOOGLE_DOMAIN = import.meta.env.VITE_GOOGLE_DOMAIN || "google.co.uk";
const SERP_KEY = import.meta.env.VITE_SERPAPI_KEY || "";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(q) {
    const trimmed = q.trim();
    setQuery(trimmed);
    setError("");
    setResults([]);
    if (!trimmed) return;

    if (!SERP_KEY) {
      setError("Missing SERPAPI key. Add VITE_SERPAPI_KEY and redeploy.");
      return;
    }

    setLoading(true);
    try {
      const url = new URL("https://serpapi.com/search.json");
      url.searchParams.set("engine", "google_shopping");
      url.searchParams.set("q", trimmed);
      url.searchParams.set("gl", GL);
      url.searchParams.set("hl", "en");
      url.searchParams.set("google_domain", GOOGLE_DOMAIN);
      url.searchParams.set("api_key", SERP_KEY);

      const r = await fetch(url.toString());
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data = await r.json();

      const items = (data.shopping_results || []).map((it) => ({
        id: it.product_id || it.position || it.serpapi_product_api || it.link,
        title: it.title,
        price: it.price || it.extracted_price || it.secondary_offer_price,
        merchant: it.source,
        link: it.link,
        thumbnail: it.thumbnail || it.product_photos?.[0],
      }));
      setResults(items);
    } catch (e) {
      setError("Search failed. Try again or refine your query.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <SearchBar onSearch={handleSearch} defaultValue={query} />
        {loading && (
          <p className="mt-6 text-sm text-gray-500">Searching… please wait.</p>
        )}
        {error && (
          <p className="mt-6 text-sm text-red-600">{error}</p>
        )}
        {!loading && !error && results.length === 0 && (
          <p className="mt-10 text-gray-500">
            Try a search like <em>“iPhone 15”</em>, <em>“headphones”</em>, or <em>“Lego”</em>.
          </p>
        )}
        <ResultsGrid items={results} />
      </main>
      <SiteFooter />
    </div>
  );
}
