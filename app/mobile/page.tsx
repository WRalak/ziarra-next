import type { Metadata } from 'next'
import ZiarraMobileApp from '@/components/ZiarraMobileApp'

export const metadata: Metadata = {
  title: 'Ziarra Mobile App',
  description: 'A phone-first Ziarra experience for discovering stays, planning trips, booking securely, and earning travel rewards.',
}

export default function MobilePage() {
  return <ZiarraMobileApp />
}
