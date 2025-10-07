import React from "react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
        <div>© {new Date().getFullYear()} Pricepilot UK. All rights reserved.</div>
        <nav style={{display:'flex',gap:16}}>
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
