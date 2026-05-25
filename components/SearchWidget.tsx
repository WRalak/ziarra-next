'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const tabs = ['Stays', 'Experiences', 'Tours']

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState('Stays')
  const router = useRouter()

  const dest = activeTab === 'Stays' ? '/stays' : activeTab === 'Experiences' ? '/experiences' : '/destinations'

  return (
    <div className="bg-warm-white/97 rounded-[22px] p-4 sm:p-2 flex flex-col sm:flex-row items-stretch sm:items-center max-w-[780px] w-full shadow-hero animate-fade-up-3 gap-3">
      {/* Tabs */}
      <div className="flex gap-1 px-2 py-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-3.5 py-1.5 rounded-[10px] text-[13px] font-medium whitespace-nowrap transition-all duration-150 ${
              activeTab === t ? 'bg-forest text-white' : 'text-muted hover:text-ink'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="w-px h-[42px] bg-ink/10 flex-shrink-0" />

      {/* Fields */}
      <div className="flex flex-1 flex-col sm:flex-row items-stretch sm:items-center">
        {[
          { label: 'Where to',  placeholder: 'Destination…' },
          { label: 'Check in',  placeholder: 'Add dates' },
          { label: 'Guests',    placeholder: 'Add travellers' },
          { label: 'Category',  placeholder: 'Hotel, Glamping…' },
        ].map(({ label, placeholder }, i, arr) => (
          <div key={label} className={`flex-1 px-4 ${i < arr.length - 1 ? 'border-b border-ink/10 pb-4 mb-4 sm:border-b-0 sm:pb-0 sm:mb-0 sm:border-r sm:border-ink/10' : ''}`}>
            <div className="text-[10px] font-semibold tracking-[0.07em] uppercase text-muted mb-0.5">{label}</div>
            <input
              className="text-sm font-medium text-ink bg-transparent border-none outline-none w-full placeholder:text-muted placeholder:font-normal"
              placeholder={placeholder}
            />
          </div>
        ))}
      </div>

      {/* Search btn */}
      <button
        onClick={() => router.push(dest)}
        className="flex-shrink-0 ml-0 sm:ml-2 w-full sm:w-[52px] h-[52px] rounded-[14px] bg-coral hover:bg-[#c04e2a] flex items-center justify-center transition-colors duration-200"
      >
        <svg className="w-5 h-5 stroke-white fill-none stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" /><path d="m21 21-4.35-4.35" />
        </svg>
      </button>
    </div>
  )
}
