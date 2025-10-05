export default function About() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-3">About PricePilot UK</h1>
      <p className="text-slate-700 leading-relaxed">
        PricePilot UK is a price comparison app focused on UK retailers. This starter is a static React app
        (Vite + Tailwind). Next steps include integrating live retailer feeds, a backend for rate limiting,
        and user accounts (e.g., Supabase) for alerts and history.
      </p>
    </section>
  )
}
