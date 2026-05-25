import Image from 'next/image'
import Link from 'next/link'
import { STAYS } from '@/lib/data'
import { ReviewCard } from '@/components/UI'
import BookingWidget from '@/components/BookingWidget'

export function generateStaticParams() {
  return STAYS.map((s) => ({ id: s.id }))
}

export default function StayDetailPage({ params }: { params: { id: string } }) {
  const stay = STAYS.find((s) => s.id === params.id) ?? STAYS[0]

  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-11">
      {/* Breadcrumb */}
      <p className="text-[13px] text-muted mb-4">
        <Link href="/" className="text-forest hover:text-forest-light">Home</Link> /{' '}
        <Link href="/stays" className="text-forest hover:text-forest-light">Stays</Link> / {stay.title}
      </p>

      {/* Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] lg:grid-rows-[230px_230px] gap-2.5 rounded-[22px] overflow-hidden mb-9">
        <div className="row-span-2 relative h-[260px] lg:h-auto"><Image src={stay.img} alt={stay.title} fill className="object-cover" /></div>
        <div className="relative h-[200px] lg:h-auto"><Image src="/picc.jpg" alt="" fill className="object-cover" /></div>
        <div className="relative h-[200px] lg:h-auto"><Image src="/pic.jpg" alt="" fill className="object-cover" /></div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase bg-forest text-white mb-3">{stay.category}</span>
          <h1 className="font-serif text-[clamp(26px,3vw,38px)] font-light text-ink mb-2">{stay.title}</h1>
          <div className="flex items-center gap-4 mb-6 text-sm text-muted flex-wrap">
            <span><span className="text-amber-light">★</span> <strong className="text-ink">{stay.rating}</strong> ({stay.reviews} reviews)</span>
            <span>📍 {stay.location}</span>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">About this property</h3>
            <p className="text-[15px] text-muted leading-[1.8]">Nestled at the foot of Mount Meru, this celebrated luxury retreat features sweeping views of the national park, colonial-inspired interiors blended with bold African art, and a world-class spa. Each suite opens onto private terraces draped in bougainvillea, with butlers on call day and night.</p>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">Amenities</h3>
            <div className="grid grid-cols-3 gap-3">
              {[['🏊','Infinity Pool'],['🍽️','3 Restaurants'],['💆','Full Spa'],['🌐','Free WiFi'],['🚗','Airport Transfer'],['🦁','Safari Desk'],['🌿','Gardens'],['🏋️','Fitness Centre'],['🅿️','Free Parking']].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2.5 text-sm px-3 py-2.5 rounded-xl bg-cream">
                  <span className="text-lg">{icon}</span>{label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">Guest Reviews</h3>
            <ReviewCard initials="SM" name="Sarah M." date="February 2025 · Verified guest" text="Absolutely breathtaking. Woke up to Mount Meru from our terrace — coffee in hand, zebras in the distance. The staff remembered our names from day one. Would return every year." />
            <ReviewCard initials="JO" name="James O." date="January 2025 · Verified guest" text="The Swahili dinner under the stars was the highlight of our entire East Africa trip. Food, atmosphere, service — all perfect. Five stars aren't enough." />
          </div>
        </div>

        <div>
          <BookingWidget price={stay.price} unit="night" quantity={5} rating={stay.rating} reviews={stay.reviews} cta="Reserve Now" toastMsg="🎉 Booking confirmed!" />
          <div className="mt-4 bg-[#E8F3EE] rounded-2xl p-4">
            <p className="text-sm font-semibold text-forest mb-1.5">🛡️ Ziarra Guarantee</p>
            <p className="text-[13px] text-forest-mid leading-[1.6]">Every stay is verified, insured and backed by our 24/7 local support team.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
