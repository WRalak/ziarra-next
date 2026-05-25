# Ziarra — Next.js 14 + Tailwind CSS

Africa's premier travel platform. Curated stays, immersive experiences & community-driven discovery.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS 3** with custom Ziarra design tokens
- **Lucide React** for icons

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Project Structure

```
ziarra-next/
├── app/
│   ├── layout.tsx              # Root layout (Nav + Footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Tailwind + custom utilities
│   ├── stays/
│   │   ├── page.tsx            # Stays listing
│   │   └── [id]/page.tsx       # Stay detail
│   ├── experiences/
│   │   ├── page.tsx            # Experiences listing
│   │   └── [id]/page.tsx       # Experience detail
│   ├── destinations/page.tsx   # Destinations grid
│   ├── community/page.tsx      # Community feed
│   ├── planner/page.tsx        # Trip planner
│   ├── profile/page.tsx        # User profile
│   ├── partner/page.tsx        # Partner portal
│   ├── about/page.tsx          # About page
│   ├── login/page.tsx          # Login
│   └── signup/page.tsx         # Sign up
├── components/
│   ├── Nav.tsx                 # Fixed navigation bar
│   ├── Footer.tsx              # Site footer
│   ├── SearchWidget.tsx        # Hero search widget (client)
│   ├── StayCard.tsx            # Reusable stay card
│   ├── UI.tsx                  # ExpCard, DestCard, PageHero, SectionHeader, etc.
│   ├── SidebarFilters.tsx      # Sidebar filter panel (client)
│   ├── CommunityFeed.tsx       # Interactive feed (client)
│   └── PlannerClient.tsx       # Trip planner UI (client)
├── lib/
│   └── data.ts                 # Shared mock data & badge styles
├── tailwind.config.ts          # Custom design tokens
├── next.config.js              # Image domains config
└── tsconfig.json
```

## Design Tokens (tailwind.config.ts)

| Token | Value |
|-------|-------|
| `forest` | `#183326` |
| `forest-mid` | `#2A5240` |
| `forest-light` | `#3D7A5E` |
| `amber` | `#C47B28` |
| `amber-light` | `#E8A840` |
| `amber-pale` | `#F5E9D0` |
| `coral` | `#D95F3C` |
| `cream` | `#F7F2EA` |
| `warm-white` | `#FDF9F3` |
| `ink` | `#1A1714` |
| `muted` | `#6B5F52` |

## Pages

| Route | Page |
|-------|------|
| `/` | Home (hero, stays, experiences, how-it-works, community, destinations, CTA) |
| `/stays` | Stays listing with sidebar filters |
| `/stays/[id]` | Stay detail with gallery, amenities, reviews & booking widget |
| `/experiences` | Experiences listing with sidebar filters |
| `/experiences/[id]` | Experience detail with booking widget |
| `/destinations` | Destination grid with region filters |
| `/community` | Social feed with composer, posts, sidebar |
| `/planner` | Drag-and-drop trip planner with budget & weather |
| `/profile` | User profile with stories grid |
| `/partner` | Partner portal & listing onboarding |
| `/about` | Brand story, values & team |
| `/login` | Sign in page |
| `/signup` | Create account page |
