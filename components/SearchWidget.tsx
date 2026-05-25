'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { STAYS, EXPERIENCES } from '@/lib/data'

const tabs = ['Stays', 'Experiences', 'Tours']

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (v: number) => (v * Math.PI) / 180
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return 6371 * c
}

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState('Stays')
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [nearest, setNearest] = useState<Array<any>>([])
  const [geoError, setGeoError] = useState<string | null>(null)
  const [locating, setLocating] = useState(false)
  const router = useRouter()

  const dest = activeTab === 'Stays' ? '/stays' : activeTab === 'Experiences' ? '/experiences' : '/destinations'

  useEffect(() => {
    if (!userLocation) {
      setNearest([])
      return
    }

    const allPackages = [
      ...STAYS.map((item) => ({ ...item, type: 'stay' as const })),
      ...EXPERIENCES.map((item) => ({ ...item, type: 'experience' as const })),
    ].filter((item) => item.coords)

    const sorted = allPackages
      .map((item) => ({
        ...item,
        distance: getDistance(userLocation[0], userLocation[1], item.coords[0], item.coords[1]),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 4)

    setNearest(sorted)
  }, [userLocation])

  const requestLocation = () => {
    setGeoError(null)
    setLocating(true)

    if (!navigator.geolocation) {
      setGeoError('Location access is not supported by your browser.')
      setLocating(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude])
        setLocating(false)
      },
      (error) => {
        setGeoError(error.message || 'Unable to access your location.')
        setLocating(false)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  return (
    <div className="bg-white/95 rounded-[32px] p-4 sm:p-5 border border-slate-200/80 shadow-[0_28px_80px_-35px_rgba(15,23,42,0.35)] max-w-[820px] w-full animate-fade-up-3 gap-4">
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 px-3 py-2 rounded-full bg-slate-100/80">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActiveTab(t)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-150 ${
              activeTab === t
                ? 'bg-forest text-white shadow-sm'
                : 'text-slate-600 hover:text-forest'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.2fr_1fr_1fr_0.7fr] items-end">
        {[
          { label: 'Where to', placeholder: 'Search destination' },
          { label: 'Check in', placeholder: 'Add dates' },
          { label: 'Guests', placeholder: 'Add travellers' },
          { label: 'Category', placeholder: 'Hotel, Glamping…' },
        ].map(({ label, placeholder }) => (
          <div key={label} className="min-w-0">
            <div className="text-[10px] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-2">
              {label}
            </div>
            <input
              type="text"
              className="text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-[26px] px-4 py-3 w-full shadow-sm outline-none transition duration-200 placeholder:text-slate-400 focus:border-forest focus:ring-2 focus:ring-forest/15"
              placeholder={placeholder}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={() => router.push(dest)}
          className="w-full h-[60px] rounded-[26px] bg-forest text-white font-semibold shadow-[0_16px_40px_-20px_rgba(34,197,94,0.85)] hover:bg-[#1f6f44] transition-colors duration-200 flex items-center justify-center"
        >
          <svg className="w-5 h-5 stroke-white fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      <div className="mt-4 border-t border-slate-200/80 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-ink">Use your location</p>
            <p className="text-sm text-slate-500">Turn on location to discover packages nearest you.</p>
          </div>
          <button
            type="button"
            onClick={requestLocation}
            disabled={locating}
            className="inline-flex items-center justify-center rounded-full border border-forest bg-forest/5 px-4 py-2 text-sm font-semibold text-forest transition hover:bg-forest/10 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {locating ? 'Locating…' : 'Find nearest packages'}
          </button>
        </div>
        {geoError && <p className="mt-3 text-sm text-rose-600">{geoError}</p>}
        {userLocation && (
          <p className="mt-3 text-sm text-slate-600">Showing nearest packages to your location.</p>
        )}
      </div>

      {nearest.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {nearest.map((item) => (
            <button
              key={`${item.type}-${item.id}`}
              type="button"
              onClick={() => router.push(item.type === 'stay' ? `/stays/${item.id}` : `/experiences/${item.id}`)}
              className="group rounded-3xl border border-slate-200/80 p-4 text-left transition shadow-sm hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div>
                  <p className="text-[13px] uppercase tracking-[0.12em] text-slate-500">{item.type === 'stay' ? 'Stay' : 'Experience'}</p>
                  <h3 className="font-serif text-base font-semibold text-ink">{item.title}</h3>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase text-slate-600">{item.location}</span>
              </div>
              <div className="flex items-center justify-between text-[13px] text-slate-500">
                <span>{item.category}</span>
                <span>{item.distance.toFixed(1)} km</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
