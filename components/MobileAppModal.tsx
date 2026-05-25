'use client'

import { useEffect, useState } from 'react'

export default function MobileAppModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const closed = window.localStorage.getItem('ziarra_mobile_modal_closed') === 'true'
    setIsOpen(!closed)
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    window.localStorage.setItem('ziarra_mobile_modal_closed', 'true')
  }

  if (!hasMounted || !isOpen) {
    return null
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-white/95 px-7 py-3 text-sm font-semibold text-ink shadow-lg shadow-slate-900/10 transition hover:bg-white"
      >
        Download Ziarra Mobile
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-sm">
          <div className="relative w-full max-w-[560px] rounded-[32px] bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.55)] ring-1 ring-slate-200">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              aria-label="Close mobile app modal"
            >
              <span className="text-[22px] leading-none">×</span>
            </button>

            <div className="rounded-[32px] bg-gradient-to-br from-forest to-amber-dark px-8 py-10 text-white overflow-hidden">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-light/80">Ziarra mobile</p>
                <h2 className="font-serif text-[clamp(28px,3.6vw,40px)] font-light tracking-tight">Travel Africa faster on the go.</h2>
                <p className="max-w-[520px] text-sm text-white/80 leading-7">
                  Book stays, manage trips, chat with local hosts and unlock exclusive offers from your phone. Download the Ziarra mobile app and take your journey anywhere.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="#"
                  className="flex items-center justify-between rounded-[24px] bg-white/10 px-5 py-4 text-left transition hover:bg-white/20"
                >
                  <div>
                    <p className="text-[13px] uppercase tracking-[0.18em] text-amber-light/90">Download on</p>
                    <p className="font-semibold text-lg">App Store</p>
                  </div>
                  <span className="text-2xl"></span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-between rounded-[24px] bg-white/10 px-5 py-4 text-left transition hover:bg-white/20"
                >
                  <div>
                    <p className="text-[13px] uppercase tracking-[0.18em] text-amber-light/90">Download on</p>
                    <p className="font-semibold text-lg">Google Play</p>
                  </div>
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.2 2.75l12.7 7.3-6.4 6.75-6.3-14.05Z" fill="#34A853" />
                    <path d="m3.2 2.75 12.7 7.3 6.1-3.3-18.8-4Z" fill="#4285F4" />
                    <path d="m16.1 17.35-6.4-6.75 6.4-3.35 5.9 9.95-5.9 0.15Z" fill="#FBBC05" />
                    <path d="m16.1 17.35 5.9 0.15-2.8 5.45-3.1-5.6Z" fill="#EA4335" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-5 px-8 py-8">
              <div className="rounded-[28px] bg-slate-50 p-6 border border-slate-200">
                <h3 className="text-base font-semibold text-ink mb-3">Sign in with your social account</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.6 11.28c0-.7-.06-1.38-.18-2.04H12.5v3.86h5.68c-.25 1.4-1 2.58-2.12 3.38v2.8h3.42c2-1.84 3.18-4.56 3.18-7.99Z" fill="#4285F4" />
                      <path d="M12.5 22c2.88 0 5.3-.96 7.07-2.6l-3.42-2.8c-.94.64-2.14 1.02-3.65 1.02-2.8 0-5.18-1.88-6.03-4.4H2.74v2.76C4.5 19.8 8.2 22 12.5 22Z" fill="#34A853" />
                      <path d="M6.47 13.22a7.44 7.44 0 0 1 0-4.44V6.02H2.74a11.92 11.92 0 0 0 0 11.96l3.73-2.76Z" fill="#FBBC05" />
                      <path d="M12.5 5.1c1.57 0 3 .54 4.12 1.6l3.08-3.1C17.8 1.78 15.38 1 12.5 1 8.2 1 4.5 3.2 2.74 6.02l3.73 2.76c.85-2.52 3.23-4.4 6.03-4.4Z" fill="#EA4335" />
                    </svg>
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-3 rounded-[20px] border border-slate-200 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-900">
                      <span className="text-lg"></span>
                    </span>
                    Continue with Apple
                  </button>
                </div>
              </div>

              <div className="text-sm text-slate-500 leading-6">
                <p className="font-semibold text-slate-900">Why use Ziarra Mobile?</p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>Instant access to your booked stays, experiences and trip plans.</li>
                  <li>Push alerts for local events, price drops and host messages.</li>
                  <li>Secure sign-in with Apple or Google for fast onboarding.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
