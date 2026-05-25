import Link from 'next/link'
import Image from 'next/image'
import { STAYS, EXPERIENCES, DESTINATIONS } from '@/lib/data'
import StayCard from '@/components/StayCard'
import { ExpCard, DestCard, SectionHeader } from '@/components/UI'
import SearchWidget from '@/components/SearchWidget'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[720px] md:min-h-[760px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-bg" />
        <div className="relative z-10 text-center max-w-[860px] px-6">
          <div className="inline-flex items-center gap-2 bg-amber-light/15 border border-amber-light/30 rounded-full px-[18px] py-1.5 mb-7 text-[12px] font-semibold tracking-[0.07em] uppercase text-amber-light animate-fade-up">
            ✦ Africa&apos;s Premier Travel Platform
          </div>
          <h1 className="font-serif text-[clamp(52px,8vw,96px)] font-light leading-none text-white tracking-tight mb-5 animate-fade-up-1">
            Travel that<br /><em className="italic text-amber-light">moves</em> the soul
          </h1>
          <p className="text-[18px] font-light text-white/72 max-w-[540px] mx-auto mb-11 animate-fade-up-2">
            Curated stays, immersive experiences & a thriving community of explorers — all in one vibrant hub.
          </p>
          <SearchWidget />
          {/* Stats */}
          <div className="flex items-center justify-center gap-9 mt-10 animate-fade-up-4">
            {[['12K+','Curated Stays'],['54','African Nations'],['320K','Travellers'],['4.9★','Platform Rating']].map(([num, lbl], i) => (
              <div key={lbl} className="flex items-center gap-9">
                {i > 0 && <div className="w-px h-9 bg-white/18" />}
                <div className="text-center">
                  <div className="font-serif text-[28px] font-medium text-white">{num}</div>
                  <div className="text-[12px] text-white/50 mt-0.5">{lbl}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/35 text-[10px] tracking-[0.1em] uppercase">
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-scroll-pulse" />
          scroll
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-white border-t border-b border-ink/10 py-5 px-6 sm:px-12">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {['🏅 Verified Listings Only','🔒 Secure Payments','💬 24/7 Local Support','🌍 54 African Nations','♻️ Responsible Travel'].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-muted font-medium">{item}</div>
          ))}
        </div>
      </div>

      {/* ── STAYS ── */}
      <section className="bg-cream py-[88px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeader
            label="Where You'll Rest"
            title={<>Find your perfect <em className="italic text-forest-light">sanctuary</em></>}
            sub="Hotels, homestays, camping & glamping — every listing handpicked."
            linkLabel="Explore all stays →"
            linkHref="/stays"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {STAYS.slice(0, 4).map((s) => <StayCard key={s.id} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section className="bg-forest py-[88px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeader
            label="Immersive Experiences"
            title={<>Go beyond the <em className="italic text-amber-light">ordinary</em></>}
            sub="Wildlife, culture, adventure & culinary journeys across the continent."
            linkLabel="See all experiences →"
            linkHref="/experiences"
            dark
          />
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-[18px]">
            <ExpCard {...EXPERIENCES[0]} big />
            {EXPERIENCES.slice(1, 5).map((e) => <ExpCard key={e.id} {...e} />)}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-warm-white py-[88px] px-4 sm:px-6 lg:px-12">
        <div className="max-w-[920px] mx-auto text-center mb-14">
          <p className="section-label">Simple. Smart. Seamless.</p>
          <h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-ink tracking-tight">
            Plan your trip in <em className="italic text-forest-light">four steps</em>
          </h2>
        </div>
        <div className="max-w-[920px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 relative">
          <div className="absolute top-[34px] left-[10%] right-[10%] h-px bg-[repeating-linear-gradient(90deg,rgba(26,23,20,0.10)_0,rgba(26,23,20,0.10)_8px,transparent_8px,transparent_16px)]" />
          {[
            { n: '1', title: 'Discover',       text: 'Search curated stays & experiences filtered to your travel style.', cls: 'bg-amber-pale text-amber border-2 border-amber-light' },
            { n: '2', title: 'Personalise',    text: 'Build itineraries with smart tools, insider tips & community reviews.', cls: 'bg-[#E8F3EE] text-forest-mid border-2 border-forest-light' },
            { n: '3', title: 'Book Securely',  text: 'Confirm accommodation, tours & transfers in one place.', cls: 'bg-coral-pale text-coral border-2 border-coral' },
            { n: '4', title: 'Share & Earn',   text: 'Post your journey, inspire the community, earn rewards.', cls: 'bg-amber-pale text-amber border-2 border-amber-light' },
          ].map(({ n, title, text, cls }) => (
            <div key={n} className="text-center relative z-10">
              <div className={`w-[68px] h-[68px] rounded-full mx-auto mb-4 flex items-center justify-center font-serif text-2xl font-medium ${cls}`}>{n}</div>
              <h4 className="font-serif text-[17px] font-medium mb-2">{title}</h4>
              <p className="text-sm text-muted leading-[1.65]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section className="bg-cream py-[88px] px-6 sm:px-12">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
          <div>
            <p className="section-label">Community-Driven Travel</p>
            <h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-ink tracking-tight leading-[1.1]">
              Travel better,<br /><em className="italic text-forest-light">together</em>
            </h2>
            <p className="text-base text-muted mt-3 leading-[1.75] max-w-[500px]">
              Where solo adventurers meet their tribes, groups discover hidden gems, and influencers spark new journeys.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {[
                { icon: '🗺️', bg: 'bg-[#E8F3EE]', title: 'Trip Planning Rooms',       text: 'Build itineraries collaboratively in shared real-time planning spaces.' },
                { icon: '📸', bg: 'bg-[#F5E9D0]', title: 'Travel Stories & Journals',  text: 'Publish rich travel journals and grow your explorer audience.' },
                { icon: '🤝', bg: 'bg-[#FAEAE4]', title: 'Community Meetups',          text: 'Find travel buddies and attend Ziarra explorer events near you.' },
                { icon: '💰', bg: 'bg-[#EEE8F3]', title: 'Creator Monetisation',       text: 'Earn commissions, brand deals, and platform rewards for content.' },
              ].map(({ icon, bg, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center text-xl ${bg}`}>{icon}</div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-ink mb-1">{title}</h4>
                    <p className="text-sm text-muted leading-[1.6]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/community" className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-full font-semibold text-white bg-forest hover:bg-forest-mid transition-colors duration-200">
              Join the Community →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[18px] overflow-hidden row-span-2"><Image src="/picc.jpg" alt="" width={400} height={370} className="w-full h-[370px] object-cover" /></div>
            <div className="rounded-[18px] overflow-hidden"><Image src="/pic.jpg" alt="" width={400} height={175} className="w-full h-[175px] object-cover" /></div>
            <div className="rounded-[18px] overflow-hidden"><Image src="/picc.jpg" alt="" width={400} height={175} className="w-full h-[175px] object-cover" /></div>
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="bg-warm-white py-[88px] px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <SectionHeader
            label="Top Destinations"
            title={<>The continent <em className="italic text-forest-light">awaits</em></>}
            linkLabel="See all →"
            linkHref="/destinations"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESTINATIONS.slice(0, 6).map((d) => <DestCard key={d.name} {...d} />)}
          </div>
        </div>
      </section>

      {/* ── TRAVELLER TYPES ── */}
      <section className="bg-forest py-[88px] px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto text-center mb-10">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-amber-light mb-4">Built for Every Explorer</p>
          <h2 className="font-serif text-[clamp(32px,3.8vw,46px)] font-light text-white tracking-tight">
            Whoever you are,<br /><em className="italic text-amber-light">Ziarra has you covered</em>
          </h2>
        </div>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {[
            { icon:'🧭', href:'/community', title:'Solo Travellers',     text:'Safety tools, community matching & solo-friendly stays.' },
            { icon:'👨‍👩‍👧‍👦', href:'/community', title:'Group Travellers',    text:'Shared itineraries, group booking & collaborative planning.' },
            { icon:'📱', href:'/community', title:'Influencers',         text:'Creator dashboards, brand partnerships & media kits.' },
            { icon:'🏆', href:'/community', title:'Seasoned Explorers',  text:'Off-the-beaten-path listings & expert bucket lists.' },
            { icon:'🤝', href:'/partner',   title:'Destination Partners',text:'List properties, promote experiences & grow your business.' },
          ].map(({ icon, href, title, text }) => (
            <Link key={title} href={href}
              className="rounded-2xl p-6 text-center border border-white/10 bg-white/[0.04] hover:bg-white/[0.09] hover:border-amber-light/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
            >
              <div className="w-14 h-14 rounded-[14px] mx-auto mb-3.5 flex items-center justify-center text-[26px] bg-white/10">{icon}</div>
              <h4 className="text-sm font-semibold text-white mb-1.5">{title}</h4>
              <p className="text-xs text-white/50 leading-[1.55]">{text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="bg-amber-pale py-[72px] px-6 sm:px-12">
        <div className="max-w-[880px] mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-label">Start Your Journey Today</p>
            <h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-forest tracking-tight">
              Africa is calling.<br /><em className="italic text-amber">Will you answer?</em>
            </h2>
            <p className="text-base text-muted mt-3">Join 320,000+ travellers already exploring with Ziarra.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link href="/destinations" className="btn-lg px-8 py-3.5 rounded-full font-semibold text-white bg-forest hover:bg-forest-mid transition-colors duration-200 text-[15px]">
              Explore Destinations
            </Link>
            <Link href="/partner" className="px-8 py-3.5 rounded-full font-semibold text-ink border-[1.5px] border-ink/20 hover:bg-ink/5 transition-colors duration-200 text-[15px]">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
