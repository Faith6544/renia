This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Playfair Display for headings and Montserrat for body copy. The Tailwind v4 font tokens live in the `@theme` block in `src/app/globals.css`.

The app lives under `src/`: pages and global styles in `src/app`, components in `src/components`, site copy in `src/lib/translations.ts` and `src/data/dictionary.ts`, shared types in `src/types`, and site/Supabase helpers in `src/lib`.

## Pages & Language

| Route | Page |
| --- | --- |
| `/` | Homepage (hero, “You are” cards, service areas, SAP tax-credit card, why RENIA, how it works, quote CTA) |
| `/renia-home` | RENIA HOME: room-by-room cleaning, deep clean, ironing, tax credit and FAQ |
| `/renia-pro` | RENIA PRO: sectors, tailor-made solutions, method and Airbnb turnovers |
| `/about` | About RENIA SERVICES, mission, values and story placeholder |
| `/commitments` | Our commitments: environment, people, quality, reliability and local commitment |
| `/contact` | Contact details, WhatsApp handoff form and direct WhatsApp button |

The EN | FR toggle lives in the navbar. The selected language is stored in `localStorage` under `renia-language` and is shared across pages by `src/context/LanguageContext.tsx`. Page copy lives in `src/lib/translations.ts`; shared navigation and footer copy lives in `src/data/dictionary.ts`. Both EN and FR objects must be kept in sync.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment & Supabase Setup

The contact page currently hands messages off to WhatsApp using the placeholder number in `src/lib/site.ts` (replace `WHATSAPP_NUMBER` before launch). A separate reusable `QuoteForm` component is also available for Supabase-backed submissions. Complete the two steps below before using it.

### 1. Create `.env.local`

Create a file named `.env.local` in the project root (next to `package.json`) and add your project's credentials from **Supabase → Project Settings → API**. You can copy the included template:

```bash
copy .env.example .env.local   # Windows
cp .env.example .env.local     # macOS / Linux
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
```

Replace both values with the real ones. The quote form detects placeholder values and shows a setup message instead of crashing. Restart `npm run dev` after adding or changing these values.

> If you build for production, note that `NEXT_PUBLIC_*` values are inlined at build time. Run `npm run build` again after changing them.

### 2. Create the `quote_requests` table

Open your Supabase dashboard, go to **SQL Editor → New query**, paste the following, and run it:

```sql
-- Needed for gen_random_uuid() on older Supabase projects.
create extension if not exists "pgcrypto";

create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null default '',
  service_type text not null check (service_type in ('home', 'pro')),
  message text not null default '',
  created_at timestamptz not null default now()
);

-- Enable row level security so the table is not publicly readable.
alter table public.quote_requests enable row level security;

-- Allow anonymous visitors to submit a quote request, nothing else.
-- Drop first so this script can be re-run safely.
drop policy if exists "Allow public quote submissions" on public.quote_requests;

create policy "Allow public quote submissions"
  on public.quote_requests
  for insert
  to anon, authenticated
  with check (true);

create index if not exists quote_requests_created_at_idx
  on public.quote_requests (created_at desc);
```

Because there are no `select`, `update`, or `delete` policies, anonymous visitors can only insert submissions. You can read them from the Supabase Table Editor or with the service role key.

### 3. Replace the brand images

The site expects these files in `public/images/`. Tasteful placeholders are included so every route renders without broken images; replace them with your own photography and logo, keeping the same filenames:

- `hero.jpg` — homepage hero background (landscape, ideally 2000px+ wide)
- `home-cleaning.jpg` — RENIA HOME card (portrait or square crops well)
- `pro-cleaning.jpg` — RENIA PRO card (portrait or square crops well)
- `logo.png` — transparent wordmark used in the footer (gold/light artwork works best on the dark green background)

Brand colors are defined in `src/app/globals.css`: forest green `#0F3A20`, gold `#C5A059`, and background `#FAFAFA`.

### Troubleshooting

- **The form shows a Supabase setup message** — `.env.local` still contains placeholder values (`your_supabase_url_here` / `your_supabase_anon_key_here`) or is missing a value. Paste the real project URL and public key, then restart the dev server.
- **`Invalid supabaseUrl` in the browser console** — the URL is not a real `https://…supabase.co` address. The current client guards against this, but a rebuild is required if you changed `.env.local` during a production build.
- **`relation "public.quote_requests" does not exist`** — run the SQL in step 2.
- **`new row violates row-level security policy`** — run the full SQL in step 2, including the `drop policy` / `create policy` statements.
- **Changes to `.env.local` are not picked up** — stop and restart `npm run dev` (or re-run `npm run build` for production).
