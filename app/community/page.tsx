import Image from 'next/image'
import Link from 'next/link'
import CommunityFeed from '@/components/CommunityFeed'

export const metadata = { title: 'Community — Ziarra' }

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-forest py-20 px-12">
        <div className="max-w-[1240px] mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-amber-light mb-4">Community Hub</p>
          <h1 className="font-serif text-[clamp(36px,5vw,62px)] font-light text-white tracking-tight mb-3.5">
            Explore. Share. <em className="italic text-amber-light">Connect.</em>
          </h1>
          <p className="text-[17px] text-white/58 max-w-[520px] mx-auto mb-8">
            320,000+ travellers sharing real stories, live tips, and curated journey inspiration from across Africa and beyond.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/signup" className="px-8 py-3.5 rounded-full font-semibold text-forest bg-amber-light hover:bg-amber transition-colors duration-200 text-[15px]">
              Join the Community
            </Link>
            <Link href="/planner" className="px-8 py-3.5 rounded-full font-semibold text-white border border-white/35 hover:border-white transition-colors duration-200 text-[15px]">
              Plan a Trip
            </Link>
          </div>
        </div>
      </div>

      {/* Feed + Sidebar */}
      <CommunityFeed />
    </>
  )
}
