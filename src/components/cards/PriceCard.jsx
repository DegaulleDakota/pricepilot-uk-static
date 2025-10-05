export default function PriceCard({ item }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden flex flex-col">
      <div className="aspect-video bg-slate-100 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-slate-800 font-semibold leading-snug">{item.title}</h3>
        <p className="text-sm text-slate-500">{item.brand} • {item.category}</p>

        <div className="mt-auto">
          <div className="text-2xl font-bold text-slate-900">£{item.best_price.toFixed(2)}</div>
          <p className="text-xs text-slate-500">
            from {item.retailers.length} retailer{item.retailers.length > 1 ? "s" : ""}
          </p>

          <div className="mt-3 grid grid-cols-1 gap-2">
            {item.retailers.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 hover:border-brand-400 hover:bg-brand-50 transition"
              >
                {r.name} • £{r.price.toFixed(2)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
