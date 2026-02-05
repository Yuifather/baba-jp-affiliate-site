# baba-jp-affiliate-site

## Production Base URL

- Production base is fixed to `https://binary-guide.vercel.app`.
- Preview/Development base URL resolution:
  1. `SITE_URL` (if set)
  2. `https://${VERCEL_URL}` (if set)
  3. `http://localhost:3000`

## Vercel Environment Variables

- **Production**: no need to set `SITE_URL` unless you plan to change the domain later.
- **Preview/Development**: set `SITE_URL` to override the base URL for SEO testing.

## SEO Endpoints

- https://binary-guide.vercel.app/sitemap.xml
- https://binary-guide.vercel.app/robots.txt
Japan affiliate site for babaoption
