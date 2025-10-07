import React from "react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="navbar container" role="navigation" aria-label="Main">
        <div className="brand">
          <span className="brand-mark" aria-hidden />
          <span>Pricepilot UK</span>
        </div>
        <div className="badge">Compare prices across UK retailers</div>
      </div>
    </header>
  );
}
