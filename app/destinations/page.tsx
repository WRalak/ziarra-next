import { DESTINATIONS } from '@/lib/data'
import { PageHero, DestCard } from '@/components/UI'
import FilterChips from '@/components/FilterChips'

export const metadata = { title: 'Destinations — Ziarra' }

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        img="/pic.jpg"
        breadcrumb="Destinations"
        title={<>The continent <em className="italic text-amber-light">awaits</em></>}
        sub="Explore 54 nations, thousands of hidden gems, and the world's most extraordinary landscapes."
      />

      <section className="px-4 sm:px-6 lg:px-12 py-11">
        <FilterChips options={['All Africa','East Africa','West Africa','North Africa','Southern Africa','Islands','Beyond Africa']} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
          {DESTINATIONS.map((d) => <DestCard key={d.name} {...d} />)}
        </div>
      </section>
    </>
  )
}
