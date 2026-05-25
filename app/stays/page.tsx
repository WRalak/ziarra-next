import { STAYS } from '@/lib/data'
import StayCard from '@/components/StayCard'
import { PageHero } from '@/components/UI'
import FilterChips from '@/components/FilterChips'
import SidebarFilters from '@/components/SidebarFilters'

export const metadata = { title: 'Stays — Ziarra' }

export default function StaysPage() {
  return (
    <>
      <PageHero
        img="/picc.jpg"
        breadcrumb="Stays"
        title={<>Find your perfect <em className="italic text-amber-light">sanctuary</em></>}
        sub="12,000+ handpicked hotels, homestays, camping & glamping across 54 nations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[272px_1fr] gap-8 px-6 sm:px-12 py-11 max-w-[1400px] mx-auto">
        <SidebarFilters type="stays" />

        <div>
          <FilterChips options={['All','Hotels','Homestays','Camping','Glamping']} />
          <div className="flex items-center justify-between mb-5">
            <p className="text-[15px] text-muted"><strong className="text-ink font-semibold">248</strong> stays found</p>
            <select className="px-3.5 py-2 border border-ink/10 rounded-xl text-sm text-ink bg-white outline-none cursor-pointer">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {STAYS.map((s) => <StayCard key={s.id} {...s} imgHeight={200} />)}
          </div>
        </div>
      </div>
    </>
  )
}
