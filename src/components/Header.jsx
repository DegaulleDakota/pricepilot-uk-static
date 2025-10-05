export default function Header() {
  return (
    <header className="bg-brand-600 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center gap-3">
          <img src="/pricepilot.svg" alt="PricePilot UK" className="h-10 w-10" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">PricePilot UK</h1>
            <p className="text-white/85 text-sm">
              Compare prices across UK retailers — fast.
            </p>
          </div>
        </div>
      </div>
      <div className="h-20 bg-gradient-to-b from-brand-600 to-brand-700"></div>
    </header>
  );
}
