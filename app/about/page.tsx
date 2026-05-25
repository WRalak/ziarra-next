import Image from 'next/image'
export const metadata = { title: 'About — Ziarra' }

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-forest relative overflow-hidden px-12 py-[120px]">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-[700px]">
          <h1 className="font-serif text-[clamp(44px,6vw,80px)] font-light text-white leading-[1.1] mb-4">Rooted in a love<br/>for <em className="italic text-amber-light">discovery</em></h1>
          <p className="text-[18px] text-white/62 leading-[1.7] max-w-[520px]">Ziarra was born from a simple belief: Africa deserves a world-class travel platform built by and for Africans.</p>
        </div>
      </div>

      {/* Story */}
      <section className="bg-warm-white px-12 py-[88px]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-[72px] items-center">
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-ink tracking-tight mb-5">Started with a <em className="italic text-forest-light">single journey</em></h2>
            <p className="text-base text-muted leading-[1.8] mb-4">In 2021, our founders returned from a three-month journey across twelve African countries — struck by the extraordinary richness of the continent, and the fragmented, frustrating tools travellers had to navigate it.</p>
            <p className="text-[15px] text-muted leading-[1.8]">Ziarra launched in 2022 with 40 listings in Kenya. Today we operate across 54 nations with over 12,000 verified stays, 3,000+ experiences, and a community of 320,000 explorers who collectively make Africa's stories impossible to ignore.</p>
          </div>
          <div className="rounded-[22px] overflow-hidden h-[400px]">
            <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80" alt="Africa" width={700} height={400} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream px-12 py-[88px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12"><p className="section-label">Our Values</p><h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-ink tracking-tight">What we <em className="italic text-forest-light">stand for</em></h2></div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: '🌍', title: 'Africa First',             text: 'Every product decision starts with our communities. We amplify African voices, African businesses, and African stories above all else.' },
              { icon: '♻️', title: 'Responsible Tourism',      text: 'We partner only with eco-conscious operators. Every booking plants a tree through our reforestation initiative across the continent.' },
              { icon: '🤝', title: 'Community Over Capital',   text: 'Tourism revenue should stay in the communities that make it possible. We ensure 95% of every booking goes directly to local partners.' },
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

      {/* Team */}
      <section className="bg-warm-white px-12 py-[88px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-12"><p className="section-label">The Team</p><h2 className="font-serif text-[clamp(32px,3.8vw,50px)] font-light text-ink tracking-tight">Built by <em className="italic text-forest-light">explorers</em></h2></div>
          <div className="grid grid-cols-4 gap-5">
            {[['AW','Aisha Wanjiku','Co-founder & CEO'],['TN','Tobi Nwosu','Co-founder & CTO'],['FS','Fatou Sow','Head of Partnerships'],['DM','David Mwangi','Head of Community']].map(([init, name, role]) => (
              <div key={name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-amber-pale mx-auto mb-3 flex items-center justify-center font-serif text-[26px] font-medium text-amber">{init}</div>
                <p className="text-[15px] font-semibold text-ink">{name}</p>
                <p className="text-[13px] text-muted">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
