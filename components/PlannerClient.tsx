'use client'
import { useState } from 'react'
import Link from 'next/link'

const DAYS = [
  { label: 'Day 1 — Arrival', date: 'Thursday, July 10', items: [
    { time: '14:00', icon: '✈️', type: 'transport', title: 'Arrive at JKIA, Nairobi', detail: 'Kenya Airways KQ102 · Terminal 1E' },
    { time: '16:30', icon: '🚐', type: 'transport', title: 'Private Transfer to Arusha', detail: '~5 hrs · Ziarra partner driver' },
    { time: '21:30', icon: '🏨', type: 'stay',      title: 'Check in — The Serengeti Grand', detail: 'Arusha, Tanzania · 4 nights' },
  ]},
  { label: 'Day 2 — Mara Game Drive', date: 'Friday, July 11', items: [
    { time: '05:00', icon: '🌅', type: 'exp',       title: 'Dawn Game Drive — Masai Mara', detail: '6 hrs · Expert Maasai ranger · $120/person' },
    { time: '07:30', icon: '☕', type: 'food',      title: 'Bush Breakfast at Mara River', detail: 'Included with game drive' },
    { time: '20:00', icon: '🌟', type: 'exp',       title: 'Dinner under the Stars', detail: 'Exclusive bush dinner · $80/person' },
  ]},
  { label: 'Day 3 — Zanzibar Transfer', date: 'Saturday, July 12', items: [
    { time: '08:00', icon: '🛩️', type: 'transport', title: 'Charter Flight Arusha → Zanzibar', detail: 'Coastal Aviation · 1 hr 10 min' },
    { time: '10:30', icon: '🏡', type: 'stay',      title: 'Check in — Zanzibar Ocean Villa', detail: 'Stone Town · 2 nights · $185/night' },
    { time: '18:00', icon: '⛵', type: 'exp',       title: 'Dhow Sunset Cruise', detail: '2 hrs · $60/person' },
  ]},
]

const ICON_BG: Record<string, string> = {
  stay: 'bg-amber-pale', exp: 'bg-[#E8F3EE]', food: 'bg-coral-pale', transport: 'bg-blue-100',
}

export default function PlannerClient() {
  const [toast, setToast] = useState('')

  const fire = (msg: string) => {
    setToast(msg)
    setTimeout(() => setToast(''), 3000)
  }

  return (
    <div className="grid grid-cols-[1fr_360px] h-[calc(100vh-72px)]">
      {/* Left */}
      <div className="px-10 py-9 overflow-y-auto border-r border-ink/10">
        <div className="mb-7">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-amber mb-2">Trip Planner</p>
          <h1 className="font-serif text-[28px] font-light text-ink mb-1">East Africa Safari ✈️</h1>
          <p className="text-sm text-muted">Jul 10–17, 2025 · 2 travellers · 7 nights</p>
        </div>

        <div className="flex gap-2.5 mb-6 flex-wrap">
          {[
            ['Share Plan', () => fire('📤 Itinerary shared!')],
            ['Export PDF', () => fire('📄 Exported as PDF!')],
          ].map(([label, fn]) => (
            <button key={label as string} onClick={fn as () => void}
              className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-forest hover:bg-forest-mid transition-colors">
              {label as string}
            </button>
          ))}
          <Link href="/stays" className="px-4 py-2 rounded-full text-sm font-semibold text-ink border border-ink/20 hover:bg-ink/5 transition-colors">+ Add Stay</Link>
          <Link href="/experiences" className="px-4 py-2 rounded-full text-sm font-semibold text-ink border border-ink/20 hover:bg-ink/5 transition-colors">+ Add Experience</Link>
        </div>

        {DAYS.map((day) => (
          <div key={day.label} className="bg-white rounded-[18px] border border-ink/10 mb-4 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 bg-cream border-b border-ink/10">
              <span className="font-serif text-[17px] font-medium text-ink">{day.label}</span>
              <span className="text-sm text-muted">{day.date}</span>
            </div>
            <div className="px-4 py-3">
              {day.items.map((item) => (
                <div key={item.title} className="flex gap-3.5 items-start py-3 border-b border-ink/10 last:border-0">
                  <span className="text-xs font-semibold text-muted w-[52px] flex-shrink-0 pt-0.5">{item.time}</span>
                  <div className={`w-9 h-9 rounded-[10px] flex-shrink-0 flex items-center justify-center text-base ${ICON_BG[item.type]}`}>{item.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.title}</p>
                    <p className="text-[13px] text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
              <button onClick={() => fire('✚ Activity slot added!')}
                className="w-full mt-2.5 py-2.5 border border-dashed border-ink/15 rounded-xl text-[13px] text-muted hover:border-forest-light hover:text-forest transition-all">
                + Add activity
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right */}
      <div className="px-7 py-7 overflow-y-auto bg-cream">
        {/* Map */}
        <div className="bg-gradient-to-br from-[#D4E8DF] to-[#C8DDD4] rounded-[18px] h-[260px] flex items-center justify-center mb-4 relative">
          <div className="text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-sm font-medium text-forest-mid">Interactive Map</p>
            <p className="text-xs text-forest-light">Nairobi → Arusha → Zanzibar</p>
          </div>
          <div className="absolute bottom-3.5 left-3.5 bg-white/90 backdrop-blur-sm rounded-[10px] px-3 py-1.5 text-[13px] font-medium">
            📍 3 destinations · 2,400 km
          </div>
        </div>

        {/* Budget */}
        <div className="bg-white rounded-[18px] border border-ink/10 p-5 mb-4">
          <h3 className="font-serif text-[17px] font-medium text-ink mb-4">Trip Budget</h3>
          {[
            ['Accommodation (7 nights)', '$1,495'],
            ['Experiences & Tours', '$556'],
            ['Transfers & Flights', '$820'],
            ['Meals (est.)', '$480'],
            ['Ziarra service fee', '$102'],
          ].map(([label, amt]) => (
            <div key={label} className="flex justify-between py-2 border-b border-ink/10 text-sm last:border-0">
              <span className="text-muted">{label}</span>
              <span className="text-ink">{amt}</span>
            </div>
          ))}
          <div className="flex justify-between pt-3 text-[15px] font-bold">
            <span>Total (2 pax)</span>
            <span className="text-forest">$3,453</span>
          </div>
        </div>

        {/* Weather */}
        <div className="bg-white rounded-[18px] border border-ink/10 p-5 mb-4">
          <h3 className="text-[13px] font-semibold text-ink mb-4">🌤️ Weather Forecast</h3>
          <div className="grid grid-cols-4 gap-2">
            {[['☀️','Jul 10','28°C'],['⛅','Jul 11','26°C'],['☀️','Jul 12','30°C'],['🌤️','Jul 13','29°C']].map(([icon,day,temp]) => (
              <div key={day} className="text-center text-xs">
                <div className="text-2xl mb-1">{icon}</div>
                <div className="font-medium text-ink">{day}</div>
                <div className="text-muted">{temp}</div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => fire('✅ All bookings confirmed!')}
          className="w-full py-3.5 rounded-full font-semibold text-forest bg-amber-light hover:bg-amber transition-colors duration-200">
          Confirm All Bookings
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-7 right-7 bg-forest text-white rounded-[14px] px-5 py-3.5 text-sm font-medium shadow-xl z-50 animate-fade-up">
          {toast}
        </div>
      )}
    </div>
  )
}
