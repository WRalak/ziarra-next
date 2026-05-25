'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const POSTS = [
  { id: 1, author: 'Amira Hassan', handle: '@amira.explores', location: 'Diani Beach, Kenya', time: '2 hours ago', img: '/pic.jpg', text: 'Diani at golden hour never gets old. 🌅 Found this quiet stretch of beach 2km south of the main strip — no crowds, just powdery white sand and warm Indian Ocean. Full journal dropping tomorrow!', tags: ['#DianiBeach','#KenyaTravel','#SoloTravel'], likes: 244, comments: 38, avatar: '/picc.jpg' },
  { id: 2, author: 'Kofi Mensah', handle: '@kofi.west', location: 'Accra, Ghana', time: '5 hours ago', img: null, text: 'Pro tip for anyone flying into Kotoka International: skip the taxi queue entirely. Use the Ziarra transfer booking — my driver was there before I cleared customs, and the car had chilled water and a phone charger. 🙌 Ghana is going off this year — book early!', tags: [], likes: 118, comments: 22, avatar: '/pic.jpg' },
  { id: 3, author: 'Leila Osei', handle: '@leila.nomad', location: 'Marrakech, Morocco', time: 'Yesterday', img: '/picc.jpg', text: "Three days in the Medina and I still find new streets every morning. Had the best harira of my life in a tiny riad just off Jemaa el-Fna. The couple running it have been there for 40 years. These are the moments that make travel worth everything.", tags: [], likes: 330, comments: 67, avatar: '/pic.jpg' },
]

const TRENDING = [
  { name: 'Kenya',   count: '4,218 posts this week', img: '/pic.jpg' },
  { name: 'Morocco', count: '3,107 posts this week', img: '/picc.jpg' },
  { name: 'Rwanda',  count: '1,842 posts this week', img: '/pic.jpg' },
]

const MEMBERS = [
  { initials: 'AH', name: 'Amira Hassan',  handle: '@amira.explores · 48K followers' },
  { initials: 'KM', name: 'Kofi Mensah',   handle: '@kofi.west · 22K followers' },
  { initials: 'LO', name: 'Leila Osei',    handle: '@leila.nomad · 91K followers' },
]

export default function CommunityFeed() {
  const [likes, setLikes] = useState<Record<number, boolean>>({})
  const [followed, setFollowed] = useState<Record<string, boolean>>({})

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_308px] gap-7 px-4 sm:px-6 lg:px-12 py-11 max-w-[1280px] mx-auto">
      {/* Feed */}
      <div>
        {/* Composer */}
        <div className="bg-white rounded-3xl p-5 border border-ink/10 mb-5">
          <div className="flex gap-3.5 items-start">
            <div className="w-11 h-11 rounded-full bg-forest text-white flex items-center justify-center font-semibold text-base flex-shrink-0">Z</div>
            <textarea className="flex-1 border border-ink/10 rounded-xl px-4 py-3 text-sm text-ink resize-none outline-none bg-cream leading-relaxed h-[60px] focus:border-forest-light transition-colors" placeholder="Share your travel story, tip, or question…" />
          </div>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-ink/10">
            <div className="flex gap-2">
              {['📷','📍','🏷️'].map((icon) => (
                <button key={icon} className="w-8 h-8 rounded-lg bg-cream text-base hover:bg-amber-pale transition-colors">{icon}</button>
              ))}
            </div>
            <button className="px-4 py-2 rounded-full font-semibold text-white bg-forest hover:bg-forest-mid transition-colors text-sm">Post Story</button>
          </div>
        </div>

        {/* Posts */}
        {POSTS.map((post) => (
          <div key={post.id} className="post-card">
            <div className="flex items-center gap-3 px-5 pt-5 pb-3">
              <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                <Image src={post.avatar} alt={post.author} width={44} height={44} className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{post.author}</p>
                <p className="text-xs text-muted">📍 {post.location} · {post.time}</p>
              </div>
            </div>
            {post.img && (
              <div className="relative h-[360px]">
                <Image src={post.img} alt="" fill className="object-cover" />
              </div>
            )}
            <div className="px-5 py-4">
              <p className="text-[15px] text-ink leading-[1.7] mb-3.5">{post.text}</p>
              {post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-amber-pale text-amber font-medium">{tag}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-4 px-5 py-3 border-t border-ink/10">
              <button
                onClick={() => setLikes((prev) => ({ ...prev, [post.id]: !prev[post.id] }))}
                className={`flex items-center gap-1.5 text-[13px] cursor-pointer transition-colors ${likes[post.id] ? 'text-coral' : 'text-muted hover:text-forest'}`}
              >
                ❤️ {likes[post.id] ? post.likes + 1 : post.likes}
              </button>
              <div className="flex items-center gap-1.5 text-[13px] text-muted">💬 {post.comments}</div>
              <button className="flex items-center gap-1.5 text-[13px] text-muted hover:text-forest transition-colors">🔗 Share</button>
              <Link href="/planner" className="flex items-center gap-1.5 text-[13px] text-muted hover:text-forest transition-colors ml-auto">🗺️ Add to Trip</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <aside>
        <div className="sidebar-widget">
          <h3 className="text-[13px] font-semibold text-ink mb-4">🔥 Trending Destinations</h3>
          {TRENDING.map((d) => (
            <Link key={d.name} href="/destinations" className="flex items-center gap-3 mb-3.5 cursor-pointer group">
              <Image src={d.img} alt={d.name} width={44} height={44} className="rounded-xl object-cover flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-ink group-hover:text-forest transition-colors">{d.name}</p>
                <p className="text-xs text-muted">{d.count}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="sidebar-widget">
          <h3 className="text-[13px] font-semibold text-ink mb-4">👥 People to Follow</h3>
          {MEMBERS.map((m) => (
            <div key={m.name} className="flex items-center gap-3 mb-3.5">
              <div className="w-9 h-9 rounded-full bg-amber-pale flex items-center justify-center text-sm font-semibold text-amber flex-shrink-0">{m.initials}</div>
              <div>
                <p className="text-sm font-medium text-ink">{m.name}</p>
                <p className="text-xs text-muted">{m.handle}</p>
              </div>
              <button
                onClick={() => setFollowed((prev) => ({ ...prev, [m.name]: !prev[m.name] }))}
                className={`ml-auto text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                  followed[m.name] ? 'bg-forest text-white' : 'bg-cream text-forest hover:bg-forest hover:text-white'
                }`}
              >
                {followed[m.name] ? 'Following ✓' : 'Follow'}
              </button>
            </div>
          ))}
        </div>

        <div className="sidebar-widget">
          <h3 className="text-[13px] font-semibold text-ink mb-4">📅 Upcoming Events</h3>
          {[
            { name: 'Nairobi Explorer Meetup', date: 'Jul 18 · Nairobi, Kenya · 42 attending' },
            { name: 'Cape Town Travel Week',   date: 'Aug 3–7 · Cape Town, SA · 180 attending' },
            { name: 'Accra Photo Walk',        date: 'Aug 22 · Accra, Ghana · 28 attending' },
          ].map((e) => (
            <div key={e.name} className="mb-3.5 pb-3.5 border-b border-ink/10 last:mb-0 last:pb-0 last:border-0">
              <p className="text-sm font-semibold text-ink">{e.name}</p>
              <p className="text-xs text-muted mt-0.5">{e.date}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
