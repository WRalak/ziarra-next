import Link from 'next/link'
import Image from 'next/image'
import { BADGE_STYLES } from '@/lib/data'

/* ─── Experience Card ─── */
interface ExpCardProps {
  id: string
  title: string
  location: string
  category: string
  duration: string
  price: number
  rating: number
  img: string
  big?: boolean
}

export function ExpCard({ id, title, category, duration, rating, img, big }: ExpCardProps) {
  return (
    <Link
      href={`/experiences/${id}`}
      className={`relative rounded-3xl overflow-hidden cursor-pointer block ${big ? 'lg:row-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden ${big ? 'h-full min-h-[478px]' : 'h-[230px]'}`}>
        <Image src={img} alt={title} fill className="object-cover transition-transform duration-500 hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 40vw" />
      </div>
      <div className="absolute inset-0 bg-exp-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-[0.06em] uppercase bg-amber-light/20 text-amber-light border border-amber-light/28 mb-2">
          {category}
        </span>
        <h3 className={`font-serif font-medium text-white leading-snug mb-1.5 ${big ? 'text-[26px]' : 'text-[18px]'}`}>{title}</h3>
        <div className="flex items-center gap-3 text-[13px] text-white/62">
          <span>⏱ {duration}</span>
          <span>⭐ {rating}</span>
        </div>
      </div>
    </Link>
  )
}

/* ─── Destination Card ─── */
interface DestCardProps {
  name: string
  region: string
  stays: number
  img: string
  tags: string[]
}

export function DestCard({ name, region, stays, img, tags }: DestCardProps) {
  return (
    <Link href="/stays" className="dest-card block relative h-[310px]" >
      <Image src={img} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />
      <div className="absolute inset-0 bg-card-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-amber-light mb-1">{region}</p>
        <h3 className="font-serif text-[22px] font-medium text-white mb-2.5">{name}</h3>
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((t) => (
            <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/14 text-white/82 border border-white/18">{t}</span>
          ))}
          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/14 text-white/82 border border-white/18">{stays.toLocaleString()} stays</span>
        </div>
      </div>
    </Link>
  )
}

/* ─── Page Hero ─── */
interface PageHeroProps {
  img: string
  breadcrumb: string
  title: React.ReactNode
  sub: string
}

export function PageHero({ img, breadcrumb, title, sub }: PageHeroProps) {
  return (
    <div className="relative h-[260px] md:h-[300px] lg:h-[340px] flex items-end overflow-hidden">
      <Image src={img} alt="" fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/88 to-black/10" />
      <div className="relative z-10 px-6 sm:px-12 pb-10">
        <p className="text-[13px] text-white/45 mb-3.5">
          <Link href="/" className="text-white/65 hover:text-amber-light transition-colors">Home</Link>
          {' / '}{breadcrumb}
        </p>
        <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-light text-white tracking-tight leading-[1.1] mb-2.5">{title}</h1>
        <p className="text-[16px] text-white/68 max-w-[520px]">{sub}</p>
      </div>
    </div>
  )
}

/* ─── Section Header ─── */
interface SectionHeaderProps {
  label?: string
  title: React.ReactNode
  sub?: string
  linkLabel?: string
  linkHref?: string
  dark?: boolean
}

export function SectionHeader({ label, title, sub, linkLabel, linkHref, dark }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 justify-between items-start mb-11 md:flex-row md:items-end">
      <div>
        {label && (
          <p className={`text-[11px] font-semibold tracking-[0.1em] uppercase mb-2.5 ${dark ? 'text-amber-light' : 'text-amber'}`}>{label}</p>
        )}
        <h2 className={`font-serif text-[clamp(32px,3.8vw,50px)] font-light leading-[1.1] tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
        {sub && <p className={`text-base mt-3 leading-[1.75] max-w-[500px] ${dark ? 'text-white/52' : 'text-muted'}`}>{sub}</p>}
      </div>
      {linkLabel && linkHref && (
        <Link
          href={linkHref}
          className={`text-sm font-medium border-b pb-0.5 transition-colors flex-shrink-0 ${dark ? 'text-amber-light border-amber-light' : 'text-forest border-forest-light hover:text-forest-light'}`}
        >
          {linkLabel}
        </Link>
      )}
    </div>
  )
}

/* ─── Review Card ─── */
interface ReviewCardProps {
  initials: string
  name: string
  date: string
  text: string
}

export function ReviewCard({ initials, name, date, text }: ReviewCardProps) {
  return (
    <div className="bg-cream rounded-2xl p-5 mb-3.5">
      <div className="flex items-center gap-3 mb-2.5">
        <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-muted">{date}</p>
        </div>
      </div>
      <p className="text-sm text-muted leading-relaxed">{text}</p>
    </div>
  )
}
