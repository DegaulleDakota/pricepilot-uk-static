export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold text-lg tracking-tight">PricePilot UK</a>
        <nav className="text-sm text-gray-600 space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
          <a href="/terms" className="hover:underline">Terms</a>
        </nav>
      </div>
    </header>
  );
}
