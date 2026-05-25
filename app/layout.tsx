import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Ziarra — Discover Africa & Beyond',
  description: 'Curated stays, immersive experiences & a thriving community of explorers — all in one vibrant hub.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Nav />
        <main className="pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
