export default function SiteFooter() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 flex items-center justify-between">
        <span>© {new Date().getFullYear()} PricePilot UK. All rights reserved.</span>
        <nav className="space-x-4">
          <a href="/about" className="hover:underline">About</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
