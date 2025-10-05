export const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

export function normalise(str) {
  return (str || '').toLowerCase().trim()
}

export function searchItems(items, term) {
  const q = normalise(term)
  if (!q) return items
  return items.filter((i) =>
    [i.title, i.description, ...(i.tags || [])].some((f) =>
      normalise(f).includes(q)
    )
  )
}
