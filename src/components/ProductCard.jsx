import React from "react";
import { formatGBP } from "../lib/utils";

// Helper to pick the first available non-null value
function choose(value, ...alts) {
  return value ?? alts.find((x) => x != null);
}

// Try to normalise various possible price fields from SerpAPI
function normalisePrice(item) {
  const n =
    choose(item.extracted_price, item.price) ??
    choose(item.unit_price, item.sale_price);
  return typeof n === "number" ? n : undefined;
}

// Get a reliable outbound product link
function productLink(item) {
  return choose(item.product_link, item.link, item.source?.link) || "#";
}

// Pick the best image source available
function imageSrc(item) {
  return choose(item.thumbnail, item.serpapi_thumbnail, item.image);
}

// Determine the seller / retailer name
function sellerName(item) {
  return (
    choose(item.source, item.seller, item.store, item.merchant, item.domain) ||
    "Retailer"
  ).toString();
}

// Main ProductCard component
export default function ProductCard({ item }) {
  const price = normalisePrice(item);
  const href = productLink(item);
  const seller = sellerName(item);
  const img = imageSrc(item);

  return (
    <div
      className="
        group rounded-2xl border border-slate-800/80 bg-slate-900/60
        overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-500/40
        transition flex flex-col
      "
    >
      <a
        href={href}
        target="_blank"
        rel="noopener sponsored nofollow"
        className="flex flex-col h-full"
      >
        {/* Image Section */}
        <div className="aspect-[1/1] md:aspect-[4/3] bg-slate-800 overflow-hidden">
          {img ? (
            <img
              src={img}
              alt={item.title || "Product image"}
              className="h-full w-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full grid place-items-center text-slate-500 text-sm">
              No image
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="p-4 flex flex-col gap-2 grow">
          <h3 className="text-sm font-medium leading-snug text-slate-100 line-clamp-2">
            {item.title || "Untitled product"}
          </h3>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-xs text-slate-400 truncate max-w-[60%]">
              {seller}
            </span>
            {price !== undefined ? (
              <span className="text-lg font-semibold text-slate-50">
                {formatGBP(price)}
              </span>
            ) : (
              <span className="text-xs text-slate-400">View price</span>
            )}
          </div>

          {/* CTA Button */}
          <div
            className="
              mt-3 inline-flex items-center justify-center
              rounded-xl px-3 py-2 text-sm font-medium
              bg-indigo-500 text-white hover:bg-indigo-400
              transition-colors duration-200
            "
          >
            View deal
          </div>
        </div>
      </a>
    </div>
  );
}
