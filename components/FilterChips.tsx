'use client'
import { useState } from 'react'

interface FilterChipsProps {
  options: string[]
}

export default function FilterChips({ options }: FilterChipsProps) {
  const [active, setActive] = useState(options[0])
  return (
    <div className="flex gap-2.5 flex-wrap mb-8">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setActive(opt)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
            active === opt
              ? 'bg-forest text-white border-forest'
              : 'bg-white text-muted border-ink/10 hover:border-forest-light hover:text-forest'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
