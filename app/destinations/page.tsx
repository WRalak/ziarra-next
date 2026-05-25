import { DESTINATIONS } from '@/lib/data'
import { PageHero, DestCard } from '@/components/UI'
import FilterChips from '@/components/FilterChips'

export const metadata = { title: 'Destinations — Ziarra' }

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        img="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400&q=80"
        breadcrumb="Destinations"
        title={<>The continent <em className="italic text-amber-light">awaits</em></>}
        sub="Explore 54 nations, thousands of hidden gems, and the world's most extraordinary landscapes."
      />

      <section className="px-12 py-11">
        <FilterChips options={['All Africa','East Africa','West Africa','North Africa','Southern Africa','Islands','Beyond Africa']} />
        <div className="grid grid-cols-3 gap-5">
          {DESTINATIONS.map((d) => <DestCard key={d.name} {...d} />)}
        </div>
      </section>
    </>
  )
}
