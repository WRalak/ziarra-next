import Link from 'next/link'

const cols = [
  {
    title: 'Discover',
    links: [
      { label: 'Hotels',      href: '/stays' },
      { label: 'Homestays',   href: '/stays' },
      { label: 'Camping',     href: '/stays' },
      { label: 'Glamping',    href: '/stays' },
      { label: 'Experiences', href: '/experiences' },
      { label: 'Tours',       href: '/experiences' },
    ],
  },
  {
    title: 'Destinations',
    links: [
      { label: 'East Africa',     href: '/destinations' },
      { label: 'West Africa',     href: '/destinations' },
      { label: 'North Africa',    href: '/destinations' },
      { label: 'Southern Africa', href: '/destinations' },
      { label: 'Islands',         href: '/destinations' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Travel Stories', href: '/community' },
      { label: 'Trip Planner',   href: '/planner' },
      { label: 'Travel Buddy',   href: '/community' },
      { label: 'Influencer Hub', href: '/community' },
          { label: 'Events',         href: '/events' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Ziarra',   href: '/about' },
      { label: 'Partner With Us',href: '/partner' },
      { label: 'Careers',        href: '/about' },
      { label: 'Press',          href: '/about' },
      { label: 'Help Centre',    href: '/about' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink pt-[72px] pb-10 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-11 mb-[52px]">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 w-fit">
            <div className="w-[38px] h-[38px] bg-amber-light rounded-[10px] flex items-center justify-center font-serif text-xl font-bold text-forest">Z</div>
            <span className="font-serif text-[20px] font-medium text-white">Ziarra</span>
          </Link>
          <p className="text-sm text-white/35 mt-3 leading-[1.75] max-w-[240px]">
            Connecting curious souls to Africa's most extraordinary places, people, and moments.
          </p>
          <div className="flex gap-2.5 mt-5">
            {['📸','🎵','✖️','▶️'].map((icon, i) => (
              <button key={i} className="w-9 h-9 rounded-[9px] bg-white/[0.07] text-white/50 text-sm hover:bg-white/15 hover:text-white transition-all duration-200">
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Cols */}
        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-white/28 mb-4">
              {col.title}
            </h5>
            {col.links.map((l) => (
              <Link key={l.label} href={l.href} className="block text-sm text-white/45 mb-2.5 hover:text-white/85 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center pt-6 border-t border-white/[0.07] text-[13px] text-white/25">
        <div>
          © 2026 Ziarra Travel Ltd &nbsp;·&nbsp;
          <a href="#" className="text-white/25 hover:text-white/60 transition-colors">Privacy Policy</a>
          &nbsp;·&nbsp;
          <a href="#" className="text-white/25 hover:text-white/60 transition-colors">Terms of Service</a>
        </div>
        <div className="flex gap-3.5 text-white/28">
          {['English','Français','Kiswahili','Português'].map((lang) => (
            <a key={lang} href="#" className="hover:text-white/70 transition-colors">{lang}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
