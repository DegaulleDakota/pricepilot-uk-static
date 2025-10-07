import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";
import SearchBar from "./components/SearchBar";
import ResultsGrid from "./components/ResultsGrid";
import "./index.css";

const DOMAIN = import.meta.env.VITE_GOOGLE_DOMAIN || "google.co.uk";
const GL = import.meta.env.VITE_GL || "uk";
const HL = import.meta.env.VITE_HL || "en";
const KEY = import.meta.env.VITE_SERPAPI_KEY || "";

export default function App() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const ready = useMemo(() => Boolean(KEY), [KEY]);

  // Show a small notice if key is missing at build time
  useEffect(() => {
    if (!ready) {
      setErr("Missing API key. Add VITE_SERPAPI_KEY and force rebuild.");
    }
  }, [ready]);

  async function runSearch(query) {
    const term = (query ?? q).trim();
    if (!term) return;
    setLoading(true);
    setErr("");
    setItems([]);

    try {
      const params = new URLSearchParams({
        engine: "google_shopping",
        q: term,
        google_domain: DOMAIN,
        gl: GL,
        hl: HL,
        api_key: KEY,
      });

      const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      // Accept several possible arrays SerpAPI can return
      const arr = data.shopping_results || data.organic_results || data.results || [];
      if (!arr.length) throw new Error("No results returned for this query.");
      setItems(arr);
    } catch (e) {
      console.error(e);
      setErr("Search failed. Try again or refine your query.");
    } finally {
      setLoading(false);
    }
  }

  // Demo: load a first query so the page never looks empty
  useEffect(() => { runSearch("AirPods Pro 2"); /* ignore eslint */ }, []);

  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <h1>Find the best UK prices, fast.</h1>
          <p>Search a product and compare offers from major UK retailers.</p>
          <SearchBar value={q} onChange={setQ} onSubmit={() => runSearch(q)} loading={loading} />
          {!ready && <div className="alert">Developer note: API key missing at build time.</div>}
          {err && <div className="alert">{err}</div>}
        </section>

        <ResultsGrid items={items} />
      </main>
      <SiteFooter />
    </>
  );
}
