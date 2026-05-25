import Link from 'next/link'
import { EVENTS } from '@/lib/data'
import { PageHero } from '@/components/UI'
import FilterChips from '@/components/FilterChips'

export const metadata = { title: 'Events — Ziarra' }

export default function EventsPage() {
  return (
    <>
      <PageHero
        img="/picc.jpg"
        breadcrumb="Events"
        title={<>Live African <em className="italic text-amber-light">moments</em></>}
        sub="Discover festivals, meetups and workshops designed for adventurous travellers." 
      />

      <section className="px-4 sm:px-6 lg:px-12 py-11">
        <FilterChips options={['All Events', 'Meetups', 'Festivals', 'Workshops', 'Cultural']} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
          {EVENTS.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`} className="group block overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-[240px] overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <span className="inline-flex px-3 py-1 rounded-full text-[11px] font-semibold uppercase bg-amber-pale text-amber mb-3">{event.category}</span>
                <h2 className="font-serif text-[22px] font-medium text-ink mb-2">{event.title}</h2>
                <p className="text-sm text-muted mb-4">{event.location} · {event.duration}</p>
                <div className="flex items-center justify-between text-sm text-muted">
                  <span>${event.price} ticket</span>
                  <span className="flex items-center gap-1 text-amber-light">★ {event.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
