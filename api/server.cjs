const http = require('http');
const { URL } = require('url');
const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));

const PORT = process.env.PORT || 8787;

const send = (res, status, obj) => {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  res.end(body);
};

const server = http.createServer(async (req, res) => {
  try {
    const fullUrl = new URL(`http://${req.headers.host}${req.url}`);

    if (req.method === 'GET' && fullUrl.pathname === '/search') {
      const q = (fullUrl.searchParams.get('q') || '').trim();
      if (!q) return send(res, 400, { error: 'Missing ?q=searchTerm' });

      const apiKey = process.env.SERPAPI_KEY;
      if (!apiKey) return send(res, 500, { error: 'Server missing SERPAPI_KEY' });

      const serp = new URL('https://serpapi.com/search.json');
      serp.searchParams.set('engine', 'google_shopping');
      serp.searchParams.set('q', q);
      serp.searchParams.set('location', 'United Kingdom');
      serp.searchParams.set('gl', 'uk');
      serp.searchParams.set('hl', 'en');
      serp.searchParams.set('api_key', apiKey);

      const r = await fetch(serp.toString());
      if (!r.ok) {
        const t = await r.text();
        return send(res, 502, { error: 'Upstream error', details: t });
      }
      const data = await r.json();

      const items = (data.shopping_results || []).slice(0, 24).map((p, i) => ({
        id: String(p.product_id || p.position || i + 1),
        title: p.title || 'Untitled',
        description: p.snippet || '',
        price: parseFloat((p.price || '0').replace(/[£$,]/g, '')) || 0,
        retailer: (p.source || p.source_name || 'Retailer').toString(),
        url: p.link || p.product_link || '#',
        image: p.thumbnail || (p.product_photos && p.product_photos[0]) || '',
        tags: []
      }));

      return send(res, 200, { items });
    }

    send(res, 404, { error: 'Not found' });
  } catch (err) {
    console.error(err);
    send(res, 500, { error: 'Server error', details: String(err) });
  }
});

server.listen(PORT, () => {
  console.log(`API server listening on http://127.0.0.1:${PORT}`);
});
