'use client'

import { FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'

const ADMIN_EMAIL = 'admin@gmail.com'
const ADMIN_PASSWORD = 'Wallace'
const AUTH_KEY = 'ziarra_admin_authed'

const KPI_CARDS = [
  { label: 'Total Bookings', value: '8.4K', trend: '+12%', icon: '📈' },
  { label: 'Revenue This Month', value: '$214K', trend: '+9%', icon: '💰' },
  { label: 'Active Hosts', value: '1,153', trend: '+4%', icon: '🏠' },
  { label: 'Guest Satisfaction', value: '4.9/5', trend: '+0.2', icon: '⭐' },
]

const QUICK_ACTIONS = [
  { label: 'Review new hosts', href: '/partner' },
  { label: 'Publish platform update', href: '/about' },
  { label: 'Respond to messages', href: '/community' },
  { label: 'Manage listings', href: '/stays' },
]

const REPORTS = [
  { title: 'Bookings by region', value: 'West Africa 34%', description: 'Strong demand from Lagos, Accra and Abidjan.' },
  { title: 'Top performing stay', value: 'Cape Coast Lodge', description: 'Booked 42 times in the last 7 days.' },
  { title: 'New partner applications', value: '18 pending', description: 'Verify host details and onboarding documents.' },
]

const PERFORMANCE_CARDS = [
  { label: 'Conversion Rate', value: '5.8%', note: 'Up 0.4% versus last month.' },
  { label: 'Average Booking Value', value: '$243', note: 'Slight increase from last week.' },
  { label: 'Support Tickets', value: '24', note: '78% resolved within 2 hours.' },
]

const RECENT_ACTIVITY = [
  { id: 'BKG-4081', description: 'New booking confirmed for Serengeti Suite', meta: '2h ago' },
  { id: 'HOST-329', description: 'Partner application received from Nairobi Lodge', meta: '4h ago' },
  { id: 'MSG-112', description: 'Message from guest about itinerary assistance', meta: '7h ago' },
]

export default function AdminPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [checkedAuth, setCheckedAuth] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(AUTH_KEY) : null
    setIsAuthenticated(stored === 'true')
    setCheckedAuth(true)
  }, [])

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      window.localStorage.setItem(AUTH_KEY, 'true')
      setIsAuthenticated(true)
      setError('')
      return
    }

    setIsAuthenticated(false)
    setError('Invalid admin email or password.')
  }

  const handleLogout = () => {
    window.localStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
    setEmail('')
    setPassword('')
    setError('')
  }

  if (!checkedAuth) {
    return (
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-warm-white text-ink">
        <p>Checking access…</p>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-warm-white px-4 sm:px-6">
        <div className="w-full max-w-md rounded-[32px] border border-ink/10 bg-white p-8 shadow-card">
          <p className="text-[11px] uppercase tracking-[0.18em] text-amber mb-3">Admin sign in</p>
          <h1 className="font-serif text-[32px] font-light text-ink mb-4">Enter admin credentials</h1>
          <p className="text-sm text-muted mb-6">Provide the correct admin email and password to access the dashboard.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-muted mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-input"
                placeholder="admin@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-muted mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-input"
                placeholder="Password"
                required
              />
            </div>
            {error && <p className="text-sm text-coral mt-1">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-forest px-4 py-3 text-sm font-semibold text-white hover:bg-forest-mid transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-warm-white min-h-screen pb-20">
      <section className="bg-forest px-6 py-16 text-white sm:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-amber-light mb-3">Admin Dashboard</p>
              <h1 className="font-serif text-[clamp(32px,4vw,52px)] font-light leading-tight mb-4">Platform health & operational insights</h1>
              <p className="max-w-[680px] text-sm text-white/70 leading-7">
                Monitor bookings, revenue, host performance and user activity across Ziarra. This dashboard gives you quick access to the most important metrics for managing the platform.
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition"
            >
              Log out
            </button>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/admin" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15 transition">
              Refresh data
            </Link>
            <Link href="/admin" className="inline-flex items-center justify-center rounded-full border border-amber-light bg-amber-light/15 px-5 py-3 text-sm text-amber-light hover:bg-amber-light/25 transition">
              Open analytics panel
            </Link>
          </div>
        </div>
      </section>

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 -mt-16">
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.85fr]">
          <div className="grid gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {KPI_CARDS.map((card) => (
                <article key={card.label} className="rounded-[28px] border border-ink/10 bg-white p-6 shadow-card">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="text-2xl">{card.icon}</div>
                    <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">{card.label}</span>
                  </div>
                  <p className="text-[28px] font-serif font-medium text-ink mb-2">{card.value}</p>
                  <p className="text-sm text-forest-light">{card.trend} since last month</p>
                </article>
              ))}
            </div>

            <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="rounded-[32px] border border-ink/10 bg-white p-6 shadow-card">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-amber">Operations</p>
                    <h2 className="font-serif text-[28px] font-light text-ink mt-3">Weekly performance</h2>
                  </div>
                  <span className="rounded-full bg-forest/10 px-4 py-2 text-sm font-semibold text-forest">Live</span>
                </div>
                <div className="space-y-4">
                  {REPORTS.map((report) => (
                    <div key={report.title} className="rounded-3xl bg-cream p-5">
                      <h3 className="text-base font-semibold text-ink mb-1.5">{report.title}</h3>
                      <p className="text-[28px] font-serif font-medium text-forest mb-1">{report.value}</p>
                      <p className="text-sm text-muted leading-6">{report.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="space-y-5 rounded-[32px] border border-ink/10 bg-white p-6 shadow-card">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-amber">Quick actions</p>
                  <h3 className="mt-3 text-2xl font-serif font-light text-ink">Take action</h3>
                </div>
                <div className="grid gap-3">
                  {QUICK_ACTIONS.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="rounded-3xl border border-ink/10 bg-warm-white px-4 py-4 text-sm font-medium text-ink transition hover:border-forest hover:bg-forest/5"
                    >
                      {action.label}
                    </Link>
                  ))}
                </div>
                <div className="rounded-[28px] bg-forest p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.15em] text-amber-light/90">Admin tip</p>
                  <p className="mt-3 text-sm leading-7 text-white/85">
                    Keep a close eye on host onboarding and guest satisfaction during high season. Prompt responses improve retention and trust across the platform.
                  </p>
                </div>
              </aside>
            </section>

            <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
              {PERFORMANCE_CARDS.map((metric) => (
                <div key={metric.label} className="rounded-[28px] border border-ink/10 bg-white p-6 shadow-card">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-muted mb-4">{metric.label}</p>
                  <p className="text-[32px] font-serif font-medium text-ink mb-3">{metric.value}</p>
                  <p className="text-sm text-muted leading-6">{metric.note}</p>
                </div>
              ))}
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[32px] border border-ink/10 bg-white p-6 shadow-card">
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-amber">Recent activity</p>
              <h3 className="mt-3 text-2xl font-serif font-light text-ink">Latest updates</h3>
              <div className="mt-5 space-y-4">
                {RECENT_ACTIVITY.map((item) => (
                  <div key={item.id} className="rounded-3xl bg-warm-white p-4 border border-ink/5">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="text-sm font-semibold text-ink">{item.id}</p>
                      <span className="text-[12px] uppercase tracking-[0.18em] text-muted">{item.meta}</span>
                    </div>
                    <p className="text-sm text-muted leading-6">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-ink/10 bg-white p-6 shadow-card">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-amber">Support overview</p>
                  <h3 className="mt-3 text-2xl font-serif font-light text-ink">Ticket queue</h3>
                </div>
                <span className="rounded-full bg-amber-pale px-3 py-1 text-sm font-semibold text-amber">High priority</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl bg-cream p-5">
                  <p className="text-sm font-semibold text-ink">24 open tickets</p>
                  <p className="text-sm text-muted mt-2">Most tickets are related to reservation change requests and onboarding support.</p>
                </div>
                <div className="rounded-3xl bg-cream p-5">
                  <p className="text-sm font-semibold text-ink">78% resolved within 2 hours</p>
                  <p className="text-sm text-muted mt-2">Maintain speedy replies to keep guests and hosts happy.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
