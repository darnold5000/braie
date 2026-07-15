# Maren — Creator Pro Website

A polished creator/business website for **Maren Cole** — gymnastics judge, coach, content creator, and routine breakdown specialist.

Built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, and optional Supabase + Resend integrations.

## Features

- Personal brand homepage with services, shop, resources, and content previews
- Routine breakdown request funnel with detailed sales page
- Affiliate storefront with category filtering
- Digital resources and Amazon book links
- Contact and newsletter forms (Supabase + email fallback)
- Mobile-first responsive design
- SEO metadata on all pages
- Reusable data-driven structure for future creators

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional | Supabase anon key |
| `RESEND_API_KEY` | Optional | Resend API key for email notifications |
| `RESEND_FROM_EMAIL` | Optional | Verified sender address |
| `CONTACT_NOTIFICATION_EMAIL` | Optional | Where form submissions are sent |

Without Supabase, form submissions log to the server console and send via Resend when configured.

## Supabase Setup

1. Create a Supabase project
2. Run `supabase/schema.sql` in the SQL editor
3. Add your URL and anon key to `.env.local`

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

## Content Management

Edit local data files — no CMS required for launch:

- `src/data/site.ts` — brand info
- `src/data/services.ts` — service offerings
- `src/data/products.ts` — affiliate products
- `src/data/resources.ts` — downloads and books
- `src/data/socialLinks.ts` — social profiles
- `src/data/featuredContent.ts` — Instagram/TikTok/YouTube highlights

## Future Admin Phase

Structure is ready for a future `/admin` dashboard to manage requests, products, and subscribers via Supabase.

## License

Private — Maren Media Content LLC
