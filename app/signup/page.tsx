import Image from 'next/image'
import Link from 'next/link'
export const metadata = { title: 'Sign Up — Ziarra' }

export default function SignupPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-72px)]">
      <div className="relative overflow-hidden min-h-[320px]">
        <Image src="/picc.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/80 to-forest/40 flex flex-col justify-end p-8 sm:p-[52px]">
          <p className="font-serif text-[28px] font-light text-white leading-[1.35] mb-3">Join <em className="italic text-amber-light">320,000+</em> travellers already exploring Africa with Ziarra.</p>
          <p className="text-sm text-white/45">Free forever · No credit card required</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-12 bg-white overflow-y-auto">
        <div className="w-full max-w-[400px]">
          <h2 className="font-serif text-[32px] font-light text-ink mb-1.5">Create your account</h2>
          <p className="text-[15px] text-muted mb-8">Start your Africa journey — it&apos;s completely free.</p>

          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {[['🌐','Google'],['','Apple']].map(([icon, label]) => (
              <Link key={label} href="/profile" className="flex items-center justify-center gap-2 py-2.5 border border-ink/10 rounded-xl text-sm font-medium text-ink bg-white hover:bg-cream transition-colors">
                {icon} {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 my-5 text-[13px] text-muted">
            <div className="flex-1 h-px bg-ink/10" />or sign up with email<div className="flex-1 h-px bg-ink/10" />
          </div>

          <div className="space-y-4 mb-5">
            <div className="grid grid-cols-2 gap-3">
              <div><label className="block text-[13px] font-medium text-muted mb-1.5">First name</label><input className="form-input" placeholder="Amira"/></div>
              <div><label className="block text-[13px] font-medium text-muted mb-1.5">Last name</label><input className="form-input" placeholder="Hassan"/></div>
            </div>
            <div><label className="block text-[13px] font-medium text-muted mb-1.5">Email address</label><input type="email" className="form-input" placeholder="your@email.com"/></div>
            <div><label className="block text-[13px] font-medium text-muted mb-1.5">Password</label><input type="password" className="form-input" placeholder="Minimum 8 characters"/></div>
            <div>
              <label className="block text-[13px] font-medium text-muted mb-1.5">I am a…</label>
              <select className="form-input">
                <option>Solo Traveller</option>
                <option>Group Traveller</option>
                <option>Travel Influencer</option>
                <option>Seasoned Explorer</option>
                <option>Destination Partner / Host</option>
              </select>
            </div>
          </div>

          <Link href="/profile" className="flex items-center justify-center w-full py-3.5 rounded-full font-semibold text-forest bg-amber-light hover:bg-amber transition-colors">Create Free Account</Link>

          <p className="text-center text-sm text-muted mt-6">
            Already have an account? <Link href="/login" className="text-forest font-medium hover:text-forest-light">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
