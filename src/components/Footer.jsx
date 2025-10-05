export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} PricePilot UK. All rights reserved.</p>
        <p className="opacity-80">Built with React + Vite.</p>
      </div>
    </footer>
  )
}
