export default function ProductCard({ product }) {
  const { title, price, merchant, link, thumbnail } = product;
  return (
    <article className="border rounded-lg overflow-hidden bg-white">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-contain bg-gray-50"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100" />
      )}
      <div className="p-4">
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        <div className="mt-2 text-lg font-semibold">
          {price ? price : "—"}
        </div>
        <div className="mt-1 text-xs text-gray-500">{merchant}</div>
        <a
          href={link}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-4 inline-block text-sm px-3 py-2 border rounded-md hover:bg-gray-50"
        >
          View offer
        </a>
      </div>
    </article>
  );
}
