import Image from 'next/image'
import Link from 'next/link'
export const metadata = { title: 'Sign In — Ziarra' }

export default function LoginPage() {
  return (
    <div className="grid grid-cols-2 min-h-[calc(100vh-72px)]">
      <div className="relative overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1535940300484-20b4c6930c7e?w=900&q=80" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-forest/80 to-forest/40 flex flex-col justify-end p-[52px]">
          <p className="font-serif text-[28px] font-light text-white leading-[1.35] mb-4">&ldquo;Every great journey begins with a single <em className="italic text-amber-light">step</em> — or one login.&rdquo;</p>
          <p className="text-sm text-white/45">— The Ziarra Community</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-12 bg-white">
        <div className="w-full max-w-[400px]">
          <h2 className="font-serif text-[32px] font-light text-ink mb-1.5">Welcome back</h2>
          <p className="text-[15px] text-muted mb-8">Sign in to your Ziarra account to continue exploring.</p>

          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {[['🌐','Google'],['📘','Facebook']].map(([icon, label]) => (
              <Link key={label} href="/profile" className="flex items-center justify-center gap-2 py-2.5 border border-ink/10 rounded-xl text-sm font-medium text-ink bg-white hover:bg-cream transition-colors">
                {icon} {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 my-5 text-[13px] text-muted">
            <div className="flex-1 h-px bg-ink/10" />or continue with email<div className="flex-1 h-px bg-ink/10" />
          </div>

          <div className="space-y-4 mb-4">
            <div><label className="block text-[13px] font-medium text-muted mb-1.5">Email address</label><input type="email" className="form-input" placeholder="your@email.com"/></div>
            <div><label className="block text-[13px] font-medium text-muted mb-1.5">Password</label><input type="password" className="form-input" placeholder="••••••••"/></div>
          </div>

          <div className="flex justify-end mb-5">
            <a href="#" className="text-[13px] font-medium text-forest hover:text-forest-light transition-colors">Forgot password?</a>
          </div>

          <Link href="/profile" className="flex items-center justify-center w-full py-3.5 rounded-full font-semibold text-white bg-forest hover:bg-forest-mid transition-colors">Sign In</Link>

          <p className="text-center text-sm text-muted mt-6">
            Don&apos;t have an account? <Link href="/signup" className="text-forest font-medium hover:text-forest-light">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
