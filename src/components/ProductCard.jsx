import React from "react";
import { formatGBP } from "../lib/utils";

function choose(value, ...alts) {
  return value ?? alts.find((x) => x != null);
}

function normalisePrice(item) {
  const n =
    choose(item.extracted_price, item.price) ??
    choose(item.unit_price, item.sale_price);
  return typeof n === "number" ? n : undefined;
}

function productLink(item) {
  return choose(item.product_link, item.link, item.source?.link) || "#";
}

function imageSrc(item) {
  return choose(item.thumbnail, item.serpapi_thumbnail, item.image);
}

function sellerName(item) {
  return (
    choose(item.source, item.seller, item.store, item.merchant, item.domain) ||
    "Retailer"
  ).toString();
}

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
        <div className="aspect-[4/3] bg-slate-800 overflow-hidden">
          {img ? (
            <img
              src={img}
              alt={item.title || 'Product image'}
              className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full grid place-items-center text-slate-500">
              No image
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col gap-2 grow">
          <h3 className="text-sm font-medium leading-snug line-clamp-2">
            {item.title || "Untitled product"}
          </h3>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-xs text-slate-400">{seller}</span>
            {price !== undefined ? (
              <span className="text-lg font-semibold text-slate-100">
                {formatGBP(price)}
              </span>
            ) : (
              <span className="text-xs text-slate-400">View price</span>
            )}
          </div>

          <div
            className="
              mt-2 inline-flex items-center justify-center
              rounded-xl px-3 py-2 text-sm font-medium
              bg-indigo-500 text-white hover:bg-indigo-400
              transition
            "
          >
            View deal
          </div>
        </div>
      </a>
    </div>
  );
}