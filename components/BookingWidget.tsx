'use client'
import { useState } from 'react'

interface BookingWidgetProps {
  price: number
  unit: string
  rating: number
  reviews: number
  cta: string
}

export default function BookingWidget({ price, unit, rating, reviews, cta }: BookingWidgetProps) {
  const [toast, setToast] = useState(false)

  const handleBook = () => {
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <>
      <div className="booking-widget">
        <p className="font-serif text-[32px] font-medium text-ink mb-1">
          ${price.toLocaleString()} <span className="text-base font-light font-sans text-muted">/{unit}</span>
        </p>
        <div className="flex items-center gap-1.5 text-sm text-muted mb-5">
          <span className="text-amber-light">★</span> {rating} · {reviews} reviews
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="border border-ink/10 rounded-xl p-3">
            <label className="block text-[10px] font-semibold tracking-[0.06em] uppercase text-muted mb-1">Check in</label>
            <input type="date" defaultValue="2025-07-10" className="text-sm font-medium text-ink border-none bg-transparent outline-none w-full" />
          </div>
          <div className="border border-ink/10 rounded-xl p-3">
            <label className="block text-[10px] font-semibold tracking-[0.06em] uppercase text-muted mb-1">Check out</label>
            <input type="date" defaultValue="2025-07-15" className="text-sm font-medium text-ink border-none bg-transparent outline-none w-full" />
          </div>
        </div>

        <div className="border border-ink/10 rounded-xl p-3 mb-3">
          <label className="block text-[10px] font-semibold tracking-[0.06em] uppercase text-muted mb-1">Guests</label>
          <select className="text-sm font-medium text-ink border-none bg-transparent outline-none w-full cursor-pointer">
            <option>2 adults</option>
            <option>1 adult</option>
            <option>2 adults, 1 child</option>
            <option>3 adults</option>
          </select>
        </div>

        <button
          onClick={handleBook}
          className="w-full py-3.5 rounded-full font-semibold text-forest bg-amber-light hover:bg-amber transition-colors duration-200"
        >
          {cta}
        </button>
        <p className="text-center text-[12px] text-muted mt-2.5">Free cancellation until Jun 30</p>

        <div className="border-t border-ink/10 mt-3.5 pt-3.5 space-y-3">
          <div className="flex justify-between text-sm font-semibold">
            <span>${price.toLocaleString()} × 5 nights</span>
            <span>${(price * 5).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm font-semibold">
            <span>Ziarra service fee</span>
            <span>${Math.round(price * 0.35)}</span>
          </div>
          <div className="flex justify-between text-[15px] font-bold border-t border-ink/10 pt-3">
            <span>Total</span>
            <span>${(price * 5 + Math.round(price * 0.35)).toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-7 right-7 bg-forest text-white rounded-2xl px-5 py-3.5 text-sm font-medium shadow-xl z-50 animate-fade-up">
          ✅ Booking confirmed! Check your email.
        </div>
      )}
    </>
  )
}
