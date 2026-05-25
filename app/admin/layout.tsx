import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard — Ziarra',
  description: 'Admin dashboard for platform metrics, listings, and quick actions.',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
