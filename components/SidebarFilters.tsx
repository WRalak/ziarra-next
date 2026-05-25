'use client'

interface SidebarFiltersProps {
  type: 'stays' | 'experiences'
}

const STAYS_FILTERS = [
  { title: 'Category', opts: ['Hotels','Homestays','Camping','Glamping'] },
  { title: 'Region',   opts: ['East Africa','West Africa','North Africa','Southern Africa','Islands'] },
  { title: 'Star Rating', opts: ['★★★★★ 5 stars','★★★★ 4 stars','★★★ 3 stars','★★ & below'] },
  { title: 'Amenities', opts: ['WiFi','Pool','Breakfast included','Pet friendly','Parking'] },
]

const EXP_FILTERS = [
  { title: 'Category', opts: ['Wildlife Safari','Cultural','Adventure','Culinary','Water & Coastal','Aerial'] },
  { title: 'Duration',  opts: ['Up to 3 hours','Half day','Full day','Multi-day'] },
  { title: 'Group size', opts: ['Solo (1)','Small (2–6)','Group (7–15)','Large (15+)'] },
]

export default function SidebarFilters({ type }: SidebarFiltersProps) {
  const filters = type === 'stays' ? STAYS_FILTERS : EXP_FILTERS

  return (
    <aside className="lg:sticky lg:top-[88px] h-fit">
      {/* Price range */}
      <div className="filter-card">
        <h3>Price {type === 'stays' ? 'per night' : 'per person'}</h3>
        <input type="range" min="0" max={type === 'stays' ? 1000 : 500} defaultValue={type === 'stays' ? 400 : 250}
          className="w-full accent-forest mt-2" />
        <div className="flex justify-between text-[13px] text-muted mt-1.5">
          <span>$0</span><span>${type === 'stays' ? '400' : '250'}</span>
        </div>
      </div>

      {filters.map(({ title, opts }) => (
        <div key={title} className="filter-card">
          <h3>{title}</h3>
          {opts.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 mb-2.5 cursor-pointer text-sm text-ink">
              <input type="checkbox" defaultChecked={opts.indexOf(opt) < 2} className="accent-forest w-4 h-4" />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button className="w-full py-3 rounded-full font-semibold text-white bg-forest hover:bg-forest-mid transition-colors duration-200 text-sm">
        Apply Filters
      </button>
    </aside>
  )
}
