import Image from 'next/image'
import Link from 'next/link'
import { EVENTS } from '@/lib/data'
import BookingWidget from '@/components/BookingWidget'

export function generateStaticParams() {
  return EVENTS.map((event) => ({ id: event.id }))
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = EVENTS.find((item) => item.id === params.id) ?? EVENTS[0]

  return (
    <div className="max-w-[1200px] mx-auto px-6 sm:px-12 py-11">
      <p className="text-[13px] text-muted mb-4">
        <Link href="/" className="text-forest hover:text-forest-light">Home</Link> /{' '}
        <Link href="/events" className="text-forest hover:text-forest-light">Events</Link> / {event.title}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.85fr_1fr] lg:grid-rows-[230px_230px] gap-2.5 rounded-[22px] overflow-hidden mb-9">
        <div className="row-span-2 relative h-[260px] lg:h-auto"><Image src={event.img} alt={event.title} fill className="object-cover" /></div>
        <div className="relative h-[200px] lg:h-auto"><Image src="/picc.jpg" alt="" fill className="object-cover" /></div>
        <div className="relative h-[200px] lg:h-auto"><Image src="/pic.jpg" alt="" fill className="object-cover" /></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase bg-amber-pale text-amber mb-3">{event.category}</span>
          <h1 className="font-serif text-[clamp(26px,3vw,38px)] font-light text-ink mb-2">{event.title}</h1>
          <div className="flex items-center gap-4 mb-6 text-sm text-muted flex-wrap">
            <span><span className="text-amber-light">★</span> <strong className="text-ink">{event.rating}</strong> ({event.reviews} reviews)</span>
            <span>📍 {event.location}</span>
            <span>⏱ {event.duration}</span>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">About this event</h3>
            <p className="text-[15px] text-muted leading-[1.8]">{event.description}</p>
          </div>

          <div className="mb-8">
            <h3 className="font-serif text-[22px] font-medium text-ink mb-3.5">What to expect</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Local Hosts', 'Small Groups', 'Refreshments', 'Photo-ready moments', 'Insider tips', 'Easy transport'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm px-3 py-2.5 rounded-xl bg-cream">
                  <span className="text-lg">✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <BookingWidget
            price={event.price}
            unit="ticket"
            quantity={event.price === 0 ? 1 : 1}
            rating={event.rating}
            reviews={event.reviews}
            cta={event.price === 0 ? 'Reserve Free Ticket' : 'Reserve Ticket'}
            toastMsg="🎟 Your event ticket is reserved!"
          />
          <p className="text-center text-[12px] text-muted mt-2.5">Free cancellation until 48 hours before the event.</p>
        </div>
      </div>
    </div>
  )
}
