'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const tabs = ['Stays', 'Experiences', 'Tours']

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState('Stays')
  const router = useRouter()

  const dest = activeTab === 'Stays' ? '/stays' : activeTab === 'Experiences' ? '/experiences' : '/destinations'

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
    </div>
  )
}
