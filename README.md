# Maple & Key

Premium hospitality website for **Maple & Key**, a curated collection of luxury homestays and vacation homes by Three Jokers Hospitality.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS** + **Shadcn/UI**
- **Framer Motion**
- **Resend** (Email API)

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_PHONE` | Contact phone number |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number (no +) |
| `NEXT_PUBLIC_EMAIL` | Contact email |
| `RESEND_API_KEY` | Resend API key for contact form |
| `RESEND_FROM_EMAIL` | Sender email address |
| `RESEND_NOTIFICATION_EMAIL` | Internal notification email |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity ID |

## Adding a New Property

Add a new object to `src/data/properties.ts`. The property page, sitemap, and filters update automatically.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # UI, layout, and section components
├── data/             # Centralized content (properties, destinations, etc.)
├── lib/              # Utilities, SEO, email, WhatsApp helpers
└── types/            # TypeScript interfaces
```

## Deployment

Optimized for [Vercel](https://vercel.com):

```bash
npm run build
```

## Features

- Fully responsive, mobile-first design
- SEO optimized (metadata, JSON-LD, sitemap, robots.txt)
- WhatsApp integration (floating button + property-specific messages)
- Contact form with Resend email (internal + confirmation)
- Google Analytics + Microsoft Clarity ready
- Cookie consent banner
- Static generation for properties and destinations
- Centralized data architecture for easy content management

## License

Private, Three Jokers Hospitality
