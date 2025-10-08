import React from "react";

// Try to keep a single clean price string (no double £)
function formatPrice(raw) {
  if (!raw) return "";
  const s = String(raw).trim();
  // If already starts with £, just return first token
  if (s.startsWith("£")) return s.split(/\s+/)[0];
  // Otherwise extract the first number-like token and prefix £
  const match = s.match(/(\d{1,3}(?:,\d{3})*(?:\.\d{2})?)/);
  return match ? `£${match[1]}` : s;
}

function firstImg(item) {
  // prefer serpapi_thumbnail or thumbnail
  return (
    item.serpapi_thumbnail ||
    item.thumbnail ||
    (item.images && item.images[0]) ||
    ""
  );
}

function sellerList(item) {
  // normalize a short list of sellers for visual consistency
  const sellers = [];
  if (item.store) sellers.push(item.store);
  if (Array.isArray(item.sellers)) sellers.push(...item.sellers);
  if (Array.isArray(item.offers)) {
    for (const o of item.offers) {
      if (o?.seller) sellers.push(o.seller);
    }
  }
  const uniq = [...new Set(sellers.map(String))].slice(0, 2); // max 2 lines
  return uniq;
}

export default function ProductCard({ item }) {
  const img = firstImg(item);
  const title =
    item.title?.trim() ||
    item.product_title?.trim() ||
    "Product";

  const price =
    formatPrice(item.price) ||
    formatPrice(item.extracted_price) ||
    formatPrice(item.price_str) ||
    "";

  const sellers = sellerList(item);

  return (
    <article className="rounded-2xl border border-white/10 bg-gray-900/70 shadow-sm hover:shadow-md transition overflow-hidden">
      {/* fixed aspect ratio image area to align rows */}
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-800">
        {img ? (
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500">
            No image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3
          className="
            line-clamp-2 text-base font-semibold leading-snug
            text-white min-h-[2.75rem]
          "
          title={title}
        >
          {title}
        </h3>

        <div className="mt-2 flex items-baseline justify-between">
          <span className="text-lg font-bold text-white">
            {price || "—"}
          </span>
        </div>

        {sellers.length > 0 && (
          <ul className="mt-2 space-y-0.5 text-xs text-gray-300">
            {sellers.map((s) => (
              <li key={s} className="truncate">{s}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
