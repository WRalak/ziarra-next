import Image from 'next/image'
import Link from 'next/link'

export const metadata = { title: 'Profile — Ziarra' }

export default function ProfilePage() {
  return (
    <div>
      {/* Cover */}
      <div className="bg-forest h-60 relative overflow-hidden">
        <Image src="/pic.jpg" alt="" fill className="object-cover opacity-35" />
      </div>

      {/* Body */}
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-12 -mt-[60px] relative z-10 pb-16">
        <div className="flex flex-col gap-5 mb-6 lg:flex-row lg:items-end">
          <div className="w-[120px] h-[120px] rounded-full border-4 border-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.18)] flex-shrink-0">
            <Image src="/picc.jpg" alt="Amira" width={120} height={120} className="object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between flex-wrap gap-3">
              <div>
                <h1 className="font-serif text-[30px] font-medium text-ink mb-1">Amira Hassan</h1>
                <p className="text-[15px] text-muted">@amira.explores · Nairobi, Kenya 📍</p>
              </div>
              <div className="flex gap-2.5">
                <button className="px-4 py-2 rounded-full text-sm font-semibold text-ink border border-ink/20 hover:bg-ink/5 transition-colors">Edit Profile</button>
                <Link href="/planner" className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-forest hover:bg-forest-mid transition-colors">My Trips</Link>
              </div>
            </div>
            <p className="text-sm text-muted mt-2.5 max-w-[480px]">Passionate solo traveller & food storyteller. 26 countries. Swahili coast obsessed. Sharing the Africa that changed my life. ✨</p>
            <div className="flex flex-wrap gap-8 mt-5 pt-5 border-t border-ink/10">
              {[['26','Countries'],['134','Stories'],['48.2K','Followers'],['312','Following']].map(([num, lbl]) => (
                <div key={lbl}>
                  <div className="font-serif text-2xl font-medium text-ink">{num}</div>
                  <div className="text-[13px] text-muted">{lbl}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { title: 'Explorer Level', value: 'Level 8', note: 'Elite African Voyager' },
                { title: 'Streak', value: '12 days', note: 'Story posts & reviews active' },
                { title: 'Badges', value: '14 earned', note: 'Milestones unlocked' },
              ].map(({ title, value, note }) => (
                <div key={title} className="rounded-3xl border border-ink/10 bg-white p-4 shadow-card">
                  <div className="text-[11px] uppercase tracking-[0.15em] text-muted mb-3">{title}</div>
                  <div className="font-serif text-2xl font-medium text-ink mb-2">{value}</div>
                  <div className="text-sm text-muted leading-[1.6]">{note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-ink/10 mb-7">
          {['Stories','Trips','Saved','Badges'].map((tab, i) => (
            <button key={tab} className={`px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-all ${i === 0 ? 'text-forest border-forest' : 'text-muted border-transparent hover:text-ink'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
              { img: '/pic.jpg', title: 'Diani at Golden Hour',         meta: '❤️ 244 · 💬 38 · 3 hrs ago' },
              { img: '/picc.jpg', title: 'Safari Season Packing Guide',  meta: '❤️ 891 · 💬 112 · 2 days ago' },
              { img: '/pic.jpg', title: 'Best Swahili Food in Mombasa', meta: '❤️ 1.2K · 💬 204 · 1 week ago' },
          ].map(({ img, title, meta }) => (
            <div key={title} className="ziarra-card">
              <div className="relative h-[180px]">
                <Image src={img} alt={title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-medium text-ink mb-1">{title}</h3>
                <p className="text-[13px] text-muted">{meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
