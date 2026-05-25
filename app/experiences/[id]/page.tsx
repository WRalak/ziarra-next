import Image from 'next/image'
import Link from 'next/link'
import { EXPERIENCES } from '@/lib/data'
import { ReviewCard } from '@/components/UI'
import BookingWidget from '@/components/BookingWidget'

export function generateStaticParams() {
  return EXPERIENCES.map((e) => ({ id: e.id }))
}

export default function ExpDetailPage({ params }: { params: { id: string } }) {
  const exp = EXPERIENCES.find((e) => e.id === params.id) ?? EXPERIENCES[0]

  return (
    <div className="max-w-[1200px] mx-auto px-12 py-11">
      <p className="text-[13px] text-muted mb-4">
        <Link href="/" className="text-forest hover:text-forest-light">Home</Link> /{' '}
        <Link href="/experiences" className="text-forest hover:text-forest-light">Experiences</Link> / {exp.title}
      </p>

      <div className="grid grid-cols-[1.85fr_1fr] grid-rows-[230px_230px] gap-2.5 rounded-[22px] overflow-hidden mb-9">
        <div className="row-span-2 relative"><Image src={exp.img} alt={exp.title} fill className="object-cover" /></div>
        <div className="relative"><Image src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80" alt="" fill className="object-cover" /></div>
        <div className="relative"><Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80" alt="" fill className="object-cover" /></div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-12 items-start">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase bg-amber-pale text-amber mb-3">{exp.category}</span>
          <h1 className="font-serif text-[clamp(26px,3vw,38px)] font-light text-ink mb-2">{exp.title}</h1>
          <div className="flex items-center gap-4 mb-6 text-sm text-muted flex-wrap">
            <span><span className="text-amber-light">★</span> <strong className="text-ink">{exp.rating}</strong> ({exp.reviews} reviews)</span>
            <span>📍 {exp.location}</span>
            <span>⏱ {exp.duration}</span>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">About this experience</h3>
            <p className="text-[15px] text-muted leading-[1.8]">Rise before sunrise and enter the wild as the plains come alive. Led by expert local guides with 20+ years of experience, this intimate experience takes you deep into nature as elephants emerge from the acacia groves and lions return from the night's hunt. The golden hour light is breathtaking — and all but impossible to capture anywhere else on earth.</p>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">What&apos;s included</h3>
            <div className="grid grid-cols-3 gap-3">
              {[['🚙','4×4 Game Vehicle'],['🎓','Expert Guide'],['☕','Bush Breakfast'],['💧','Water & Snacks'],['🔭','Binoculars'],['🌅','Sunrise Permit']].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2.5 text-sm px-3 py-2.5 rounded-xl bg-cream">
                  <span className="text-lg">{icon}</span>{label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">Reviews</h3>
            <ReviewCard initials="NA" name="Nadia A." date="March 2025" text="I've done safaris across southern and east Africa. This was the most intimate, most breathtaking experience I've ever had. Our guide spotted a cheetah with two cubs within the first 20 minutes. Absolutely extraordinary." />
            <ReviewCard initials="MB" name="Marco B." date="February 2025" text="Worth every single penny. The sunrise over the savannah with no other vehicles in sight — pure magic. Book this immediately." />
          </div>
        </div>

        <div>
          <BookingWidget price={exp.price} unit="person" rating={exp.rating} reviews={exp.reviews} cta="Book Experience" toastMsg="🦁 Experience booked!" />
          <button className="w-full mt-3 py-3 rounded-full font-semibold text-ink border border-ink/20 hover:bg-ink/5 transition-colors duration-200 text-sm">
            Message the Guide
          </button>
          <p className="text-center text-[12px] text-muted mt-2.5">Free cancellation up to 48 hours before</p>
        </div>
      </div>
    </div>
  )
}
