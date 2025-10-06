import React from "react";

/**
 * Expects a SerpAPI Shopping result-like object:
 * {
 *   title, price, extracted_price, source, rating, reviews, link, product_link, thumbnail
 * }
 */
export default function ProductCard({ item = {} }) {
  const {
    title = "Untitled product",
    price,
    extracted_price,
    source,
    rating,
    reviews,
    link,
    product_link,
    thumbnail,
  } = item;

  const href = product_link || link || "#";
  const img = thumbnail || "";
  const priceLabel =
    price ??
    (typeof extracted_price === "number"
      ? `£${extracted_price.toFixed(2)}`
      : "—");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border bg-white hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-gray-100">
        {img ? (
          <img
            src={img}
            alt={title}
            className="h-full w-full object-contain group-hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
        )}
      </div>

      <div className="p-4">
        <div className="mb-1 line-clamp-2 font-medium text-gray-900">
          {title}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-700 font-semibold">{priceLabel}</span>
          <span className="text-gray-500">{source || "Merchant"}</span>
        </div>

        {(rating || reviews) && (
          <div className="mt-1 text-xs text-gray-500">
            {rating ? `${rating}★` : ""}{" "}
            {reviews ? `(${reviews.toLocaleString()} reviews)` : ""}
          </div>
        )}
      </div>
    </a>
  );
}
