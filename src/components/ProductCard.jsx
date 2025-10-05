import cn from 'classnames'

export default function ProductCard({ item, onToggleFav, isFavourite }) {
  return (
    <div className="rounded-2xl border bg-white p-4 flex gap-4">
      <div className="h-24 w-24 rounded-xl bg-slate-100 flex items-center justify-center text-xs">
        {item.image ? (
          <img src={item.image} alt={item.title} className="h-24 w-24 object-cover rounded-xl" />
        ) : (
          <span className="opacity-60">No image</span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold leading-snug">{item.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2">{item.description}</p>
        <div className="mt-2 text-sm">
          <span className="font-mono">£{item.price.toFixed(2)}</span>
          <span className="mx-2 opacity-50">·</span>
          <span className="uppercase text-xs tracking-wide">{item.retailer}</span>
        </div>
        <div className="mt-3 flex gap-2">
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 rounded-xl border hover:bg-slate-50"
          >
            View on {item.retailer}
          </a>
          <button
            onClick={() => onToggleFav(item.id)}
            className={cn(
              'px-3 py-2 rounded-xl border',
              isFavourite ? 'bg-yellow-100 border-yellow-300' : 'hover:bg-slate-50'
            )}
          >
            {isFavourite ? '★ Saved' : '☆ Save'}
          </button>
        </div>
      </div>
    </div>
  )
}
