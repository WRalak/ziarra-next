import Link from 'next/link'
export const metadata = { title: 'Partner With Us — Ziarra' }

export default function PartnerPage() {
  return (
    <>
      <div className="bg-forest relative overflow-hidden px-4 sm:px-6 lg:px-12 py-[100px] sm:py-[120px]">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-[700px]">
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light text-white leading-[1.1] mb-4">Grow your <em className="italic text-amber-light">tourism business</em> with Ziarra</h1>
          <p className="text-[18px] text-white/62 leading-[1.7] mb-7 max-w-[520px]">List your property, promote your experiences, and reach 320,000+ engaged African travellers.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/signup" className="px-8 py-3.5 rounded-full font-semibold text-forest bg-amber-light hover:bg-amber transition-colors text-[15px]">List Your Property</Link>
            <button className="px-8 py-3.5 rounded-full font-semibold text-white border border-white/35 hover:border-white transition-colors text-[15px]">Talk to Sales</button>
          </div>
        </div>
      </div>

      {/* Steps */}
      <section className="bg-warm-white px-4 sm:px-6 lg:px-12 py-[88px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12"><p className="section-label">How It Works</p><h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-ink tracking-tight">Start earning in <em className="italic text-forest-light">3 simple steps</em></h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { n: '1', cls: 'bg-amber-pale text-amber border-2 border-amber-light', title: 'Create Your Listing',  text: 'Set up your property or experience page in under 30 minutes with our guided onboarding wizard.' },
              { n: '2', cls: 'bg-[#E8F3EE] text-forest-mid border-2 border-forest-light', title: 'Get Verified',         text: 'Our local team verifies your listing for quality, accuracy, and safety. Most partners go live within 48 hours.' },
              { n: '3', cls: 'bg-coral-pale text-coral border-2 border-coral', title: 'Start Earning',       text: 'Receive bookings, manage availability, track revenue, and access a full analytics dashboard.' },
            ].map(({ n, cls, title, text }) => (
              <div key={n} className="text-center bg-white rounded-[20px] p-8 border border-ink/10">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-serif text-2xl font-medium ${cls}`}>{n}</div>
                <h4 className="font-serif text-lg font-medium text-ink mb-2.5">{title}</h4>
                <p className="text-sm text-muted leading-[1.65]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream px-4 sm:px-6 lg:px-12 py-[88px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="mb-11"><p className="section-label">Why Ziarra</p><h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-ink tracking-tight">Built for African <em className="italic text-forest-light">hospitality</em></h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              { icon:'🌍', title:'Pan-African Reach',    text:'Access travellers from 54 countries across Africa plus an international audience actively seeking authentic experiences.' },
              { icon:'📊', title:'Smart Analytics',      text:'Track views, booking conversion, revenue trends, and seasonal demand — all in one real-time dashboard.' },
              { icon:'💳', title:'Instant Payouts',      text:'M-Pesa, bank transfer, or crypto. Choose how you get paid with same-week payouts after each completed stay.' },
              { icon:'📸', title:'Free Photography',     text:'All new partners in our growth markets receive a complimentary professional photography session.' },
              { icon:'🛡️', title:'Host Protection',      text:'$50,000 host guarantee per booking, plus 24/7 support to handle guest disputes.' },
              { icon:'🤝', title:'Community Power',      text:'Your listing gets organically shared by 320,000+ community members — free marketing through authentic traveller stories.' },
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-white rounded-[20px] p-7 border border-ink/10">
                <div className="text-[32px] mb-4">{icon}</div>
                <h3 className="font-serif text-xl font-medium text-ink mb-2.5">{title}</h3>
                <p className="text-sm text-muted leading-[1.75]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest px-4 sm:px-6 lg:px-12 py-[88px] text-center">
        <div className="max-w-[560px] mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-amber-light mb-4">Ready to get started?</p>
          <h2 className="font-serif text-[clamp(32px,3.8vw,46px)] font-light text-white tracking-tight mb-4">Join 4,800+ <em className="italic text-amber-light">active partners</em></h2>
          <p className="text-[17px] text-white/55 mb-9">From boutique guesthouses in Zanzibar to glamping operators in the Drakensberg — your guests are already searching for you.</p>
          <Link href="/signup" className="inline-block px-9 py-4 rounded-full font-semibold text-forest bg-amber-light hover:bg-amber transition-colors text-[15px]">Create Partner Account →</Link>
        </div>
      </section>
    </>
  )
}
