'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/stays',        label: 'Stays' },
  { href: '/experiences',  label: 'Experiences' },
  { href: '/events',       label: 'Events' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/community',    label: 'Community' },
  { href: '/planner',      label: 'Trip Planner' },
  { href: '/partner',      label: 'Be a Patner' },
  { href: '/about',        label: 'About' },
]

export default function Nav() {
  const path = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-forest/95 backdrop-blur-lg border-b border-white/[0.07]">
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-12 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-[38px] h-[38px] bg-amber-light rounded-[10px] flex items-center justify-center font-serif text-xl font-bold text-forest">
            Z
          </div>
          <span className="font-serif text-[22px] font-medium text-white tracking-[0.02em]">Ziarra</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex flex-wrap items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-[13.5px] px-3 py-1.5 rounded-lg transition-all duration-200 ${
                path === href
                  ? 'text-amber-light bg-white/[0.06]'
                  : href === '/partner'
                  ? 'text-amber-light hover:bg-white/[0.06]'
                  : 'text-white/70 hover:text-amber-light hover:bg-white/[0.06]'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            href="/login"
            className="px-4 py-2 border border-white/[0.22] rounded-full text-[13px] text-white/85 hover:border-white/55 hover:text-white transition-all duration-200"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-full text-[13px] font-semibold text-forest bg-amber-light hover:bg-amber transition-all duration-200"
          >
            Sign up free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          className="sm:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/5 text-white/90 transition hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12h16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ${menuOpen ? 'max-h-[420px]' : 'max-h-0'}`}
      >
        <div className="flex flex-col gap-2 px-4 pb-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-[15px] px-3 py-3 rounded-2xl transition-all duration-200 ${
                path === href
                  ? 'text-amber-light bg-white/[0.08]'
                  : href === '/partner'
                  ? 'text-amber-light hover:bg-white/[0.06]'
                  : 'text-white/80 hover:text-amber-light hover:bg-white/[0.06]'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.08]">
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-full border border-white/[0.22] text-[13px] text-white/85 hover:border-white/55 hover:text-white transition-all duration-200 text-center"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-full text-[13px] font-semibold text-forest bg-amber-light hover:bg-amber transition-all duration-200 text-center"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
