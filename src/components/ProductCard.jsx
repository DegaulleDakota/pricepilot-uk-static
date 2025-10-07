import React from "react";

export default function ProductCard({ item }) {
  const img = item.thumbnail || item.image || item.product_image || "";
  const price = item.price || item.extracted_price || item.min_price || null;
  const currency = item.currency || "£";
  const retailer = item.source || item.seller || item.store || item.merchant || "";
  const url = item.link || item.product_link || item.offer_page_url || "#";

  return (
    <a className="card" href={url} target="_blank" rel="noreferrer">
      <div className="card-img">
        {img ? <img src={img} alt={item.title || "Product image"} /> : <span className="note">No image</span>}
      </div>
      <div className="card-body">
        <div className="title">{item.title || item.name || "Untitled"}</div>
        <div className="meta">{retailer}</div>
        {price != null && <div className="price">{currency}{price}</div>}
      </div>
    </a>
  );
}
