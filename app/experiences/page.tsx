import { EXPERIENCES } from '@/lib/data'
import { ExpCard, PageHero } from '@/components/UI'
import FilterChips from '@/components/FilterChips'
import SidebarFilters from '@/components/SidebarFilters'
import Link from 'next/link'
import Image from 'next/image'
import { BADGE_STYLES } from '@/lib/data'

export const metadata = { title: 'Experiences — Ziarra' }

export default function ExperiencesPage() {
  return (
    <>
     <PageHero
  img="/pic.jpg"
  breadcrumb="Experiences"
  title={<>Go beyond the <em className="italic text-amber-light">ordinary</em></>}
  sub="Wildlife safaris, cultural deep-dives, culinary journeys & adventure tours across Africa."
/>

      <div className="grid grid-cols-1 lg:grid-cols-[272px_1fr] gap-8 px-6 sm:px-12 py-11 max-w-[1400px] mx-auto">
        <SidebarFilters type="experiences" />

        <div>
          <FilterChips options={['All','Safari','Cultural','Adventure','Culinary','Coastal']} />
          <div className="flex items-center justify-between mb-5">
            <p className="text-[15px] text-muted"><strong className="text-ink font-semibold">184</strong> experiences found</p>
            <select className="px-3.5 py-2 border border-ink/10 rounded-xl text-sm text-ink bg-white outline-none cursor-pointer">
              <option>Recommended</option><option>Price: Low to High</option><option>Highest Rated</option><option>Duration</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {EXPERIENCES.map((exp) => (
              <Link key={exp.id} href={`/experiences/${exp.id}`} className="ziarra-card group block">
                <div className="card-img relative overflow-hidden" style={{ height: 200 }}>
                  <Image src={exp.img} alt={exp.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                  <span className={`badge ${BADGE_STYLES[exp.category] ?? 'bg-white text-forest'}`}>{exp.category}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-medium text-ink mb-1">{exp.title}</h3>
                  <p className="text-[13px] text-muted mb-3">{exp.location} · {exp.duration}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-[13px] text-muted"><span className="text-[17px] font-semibold text-ink">${exp.price.toLocaleString()}</span>/person</div>
                    <div className="flex items-center gap-1 text-[13px] font-medium"><span className="text-amber-light">★</span> {exp.rating}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
