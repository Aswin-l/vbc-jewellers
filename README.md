# VBC Jewellers — Premium multi-page commerce starter

A responsive Next.js App Router storefront for VBC / Sri Balu Chettiyar Jewellers, based on the reference photos and business details shared in the project.

## Included routes

- `/` — Brand-led homepage
- `/collections` — Searchable and filterable catalogue
- `/product/[slug]` — Individual product pages
- `/wishlist` — Saved designs
- `/cart` — Multi-item enquiry bag with combined WhatsApp enquiry
- `/about` — Brand story
- `/contact` — Store details and WhatsApp enquiry form

## Stack

- Next.js 16.4.6 (App Router)
- React 19.3.1
- TypeScript
- Redux Toolkit + React Redux
- RTK Query API foundation
- Custom responsive CSS

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build:

```bash
npm run build
npm start
```

## API integration later

The RTK Query service is in `store/api.ts`. Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local` when the backend is ready. The starter currently defines:

- `GET /products`
- `GET /products/:id`
- `POST /enquiries`

The UI currently renders a local demo catalogue from `lib/products.ts`. Replace that local source with the RTK Query hooks when the API endpoints are available. No backend, authentication, inventory sync, online payment gateway, GST/tax calculation, order fulfilment, or admin panel is included yet.

## Commerce behaviour in this demo

- Add/remove products from the enquiry bag
- Wishlist toggle
- Cart and wishlist stored in browser localStorage
- Product-specific WhatsApp enquiry
- Combined WhatsApp enquiry for all items in the bag
- Contact form opens WhatsApp with the submitted details

This is an enquiry-first storefront, not a payment-enabled checkout. The cart label is intentionally “Enquiry bag” so customers are not led to believe online payment is enabled.

## Business details used

- Display name: VBC Jewellers / Sri Balu Chettiyar Jewellers
- Phone: +91 98425 55521
- Location: Tiruvannamalai, Tamil Nadu, India
- Legacy statement: over 50 years (from the WhatsApp outreach text supplied)

Opening hours, exact street address, verified social profile, live stock, weights, purity, hallmark details, and prices were not legible/provided, so they are not invented. Confirm them with the shop before production launch.

## Product imagery

The included product thumbnails are crops from the reference collage supplied in the conversation. Replace them with original, high-resolution, individually photographed product images before public launch. The storefront image and small logo reference are also supplied-photo assets.

## Production checklist

1. Confirm business name spelling, full postal address, opening hours and map pin.
2. Get approved logo artwork and original product photos.
3. Verify product titles, category, metal, purity, weights, stock and prices.
4. Connect RTK Query to the production API and add server-side validation.
5. Add customer authentication only if required; secure admin separately.
6. Integrate a compliant payment provider only after pricing, tax and fulfilment workflows are confirmed.
7. Add privacy policy, terms, return/exchange policy and SEO/social metadata.
# vbc-jewellers
