'use client'
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
  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-12 py-3 bg-forest/95 backdrop-blur-lg border-b border-white/[0.07]">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-[38px] h-[38px] bg-amber-light rounded-[10px] flex items-center justify-center font-serif text-xl font-bold text-forest">
          Z
        </div>
        <span className="font-serif text-[22px] font-medium text-white tracking-[0.02em]">Ziarra</span>
      </Link>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-1">
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

      {/* Auth */}
      <div className="flex items-center gap-2.5">
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
    </nav>
  )
}
