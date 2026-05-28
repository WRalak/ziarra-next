'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Compass,
  Heart,
  Home,
  Map,
  MessageCircle,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Ticket,
  UserRound,
  UsersRound,
  WalletCards,
} from 'lucide-react'
import { DESTINATIONS, EXPERIENCES, STAYS } from '@/lib/data'

const tabs = ['For you', 'Safari', 'Coast', 'Culture']

const featureCards: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Map, title: 'Smart discovery', text: 'Browse curated stays, events, and destination guides by travel style.' },
  { icon: UsersRound, title: 'Group planning', text: 'Build itineraries, split plans, and chat with your travel circle.' },
  { icon: WalletCards, title: 'Secure booking', text: 'Confirm stays, experiences, and transport with protected payments.' },
  { icon: ShieldCheck, title: 'Local confidence', text: 'Verified hosts, trip alerts, and support while you are on the move.' },
]

const bottomNav: Array<{ icon: LucideIcon; label: string; active: boolean }> = [
  { icon: Home, label: 'Home', active: true },
  { icon: Compass, label: 'Explore', active: false },
  { icon: Ticket, label: 'Trips', active: false },
  { icon: MessageCircle, label: 'Chat', active: false },
  { icon: UserRound, label: 'Profile', active: false },
]

export default function ZiarraMobileApp() {
  const nextTrip = EXPERIENCES[0]

  return (
    <section className="min-h-screen bg-[#eef4f0] px-3 py-5 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[430px_1fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-[430px] rounded-[36px] border-[10px] border-[#101815] bg-[#f8f5ee] shadow-[0_34px_90px_rgba(20,33,25,0.25)] overflow-hidden">
          <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-[#101815]" />

          <div className="relative h-[230px] overflow-hidden bg-forest">
            <Image src="/pic.jpg" alt="Safari landscape" fill priority className="object-cover" sizes="430px" />
            <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/25 to-[#f8f5ee]" />
            <div className="relative z-10 flex items-center justify-between px-5 pt-10 text-white">
              <div>
                <p className="text-[12px] font-medium text-white/70">Good morning, Amara</p>
                <h1 className="font-serif text-[28px] font-medium leading-tight">Where to next?</h1>
              </div>
              <button
                type="button"
                aria-label="Notifications"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/16 text-white backdrop-blur-md"
              >
                <Bell className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute bottom-5 left-5 right-5 z-10">
              <label className="flex h-[52px] items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-widget">
                <Search className="h-5 w-5 text-forest-light" />
                <input
                  aria-label="Search destinations"
                  className="min-w-0 flex-1 bg-transparent text-[14px] font-medium text-ink outline-none placeholder:text-muted/55"
                  placeholder="Search Kenya, Zanzibar, events"
                />
              </label>
            </div>
          </div>

          <div className="px-5 pb-24 pt-2">
            <div className="flex gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  type="button"
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[12px] font-semibold ${
                    index === 0 ? 'bg-forest text-white' : 'bg-white text-muted'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="rounded-[26px] bg-forest p-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-light">Next trip</p>
                  <h2 className="mt-1 font-serif text-[22px] font-medium leading-tight">{nextTrip.title}</h2>
                  <p className="mt-1 text-[12px] text-white/65">{nextTrip.location} · {nextTrip.duration}</p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <Plane className="h-7 w-7 text-amber-light" />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  ['18 Jul', 'Date'],
                  ['4 guests', 'Group'],
                  ['$120', 'Due'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-white/[0.08] px-3 py-2">
                    <p className="text-[13px] font-semibold">{value}</p>
                    <p className="text-[10px] text-white/52">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <h3 className="font-serif text-[22px] font-medium text-ink">Top picks</h3>
              <Link href="/stays" className="inline-flex items-center gap-1 text-[13px] font-semibold text-forest">
                See all <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {STAYS.slice(0, 3).map((stay) => (
                <Link key={stay.id} href={`/stays/${stay.id}`} className="w-[190px] shrink-0 overflow-hidden rounded-[24px] bg-white shadow-card">
                  <div className="relative h-[136px]">
                    <Image src={stay.img} alt={stay.title} fill className="object-cover" sizes="190px" />
                    <button
                      type="button"
                      aria-label={`Save ${stay.title}`}
                      className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-coral"
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-[14px] font-semibold text-ink">{stay.title}</p>
                      <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-forest">
                        <Star className="h-3.5 w-3.5 fill-amber-light text-amber-light" />
                        {stay.rating}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-[12px] text-muted">{stay.location}</p>
                    <p className="mt-2 text-[13px] font-bold text-forest">${stay.price}<span className="font-medium text-muted">/night</span></p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] bg-white p-4 shadow-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-amber">Explorer rewards</p>
                  <h3 className="mt-1 font-serif text-[22px] font-medium text-ink">Level 4 unlocked</h3>
                  <p className="mt-1 text-[12px] leading-5 text-muted">Book one more local experience to claim a host-led city walk.</p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-pale text-amber">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-cream">
                <div className="h-2 w-[74%] rounded-full bg-amber" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-ink/10 bg-white/95 px-5 py-3 backdrop-blur">
            <div className="grid grid-cols-5 gap-1">
              {bottomNav.map(({ icon: TabIcon, label, active }) => {
                return (
                  <button
                    key={label}
                    type="button"
                    className={`flex flex-col items-center gap-1 rounded-2xl py-2 text-[10px] font-semibold ${
                      active ? 'bg-forest text-white' : 'text-muted'
                    }`}
                  >
                    <TabIcon className="h-4 w-4" />
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="px-1 pb-8 lg:px-0">
          <p className="section-label">Ziarra mobile app</p>
          <h2 className="font-serif text-[clamp(38px,6vw,76px)] font-light leading-none tracking-tight text-forest">
            Book, plan, and travel Africa from your pocket.
          </h2>
          <p className="mt-5 max-w-[640px] text-[17px] leading-8 text-muted">
            A phone-first companion for solo travellers, groups, creators, and local partners. It brings stays,
            experiences, shared planning, host messages, rewards, and secure payments into one fast travel flow.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {featureCards.map(({ icon: FeatureIcon, title, text }) => {
              return (
                <div key={title} className="rounded-[22px] border border-forest/10 bg-white p-5 shadow-card">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f3ee] text-forest">
                    <FeatureIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-muted">{text}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 grid gap-4 rounded-[28px] bg-forest p-5 text-white sm:grid-cols-3">
            {[
              ['320K', 'travellers'],
              ['12K+', 'stays'],
              ['54', 'nations'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/[0.08] p-4">
                <p className="font-serif text-[34px] font-medium">{value}</p>
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-white/52">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest-mid">
              Start planning <CalendarDays className="h-4 w-4" />
            </Link>
            <Link href="/planner" className="inline-flex items-center justify-center gap-2 rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:bg-white">
              Open trip planner <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {DESTINATIONS.slice(0, 3).map((destination) => (
              <Link key={destination.name} href="/destinations" className="group relative h-[150px] overflow-hidden rounded-[22px]">
                <Image src={destination.img} alt={destination.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="220px" />
                <div className="absolute inset-0 bg-card-overlay" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-light">{destination.region}</p>
                  <p className="font-serif text-xl font-medium text-white">{destination.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
