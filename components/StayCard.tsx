import Link from 'next/link'
import Image from 'next/image'
import { BADGE_STYLES } from '@/lib/data'

interface StayCardProps {
  id: string
  title: string
  location: string
  category: string
  badge: string
  price: number
  rating: number
  reviews: number
  img: string
  imgHeight?: number
}

export default function StayCard({ id, title, location, badge, category, price, rating, img, imgHeight = 220 }: StayCardProps) {
  return (
    <Link href={`/stays/${id}`} className="ziarra-card group block">
      <div className="card-img relative overflow-hidden" style={{ height: imgHeight }}>
        <Image src={img} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" />
        <span className={`badge ${BADGE_STYLES[badge] ?? 'bg-white text-forest'}`}>{category}</span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg font-medium text-ink mb-1">{title}</h3>
        <p className="text-[13px] text-muted mb-3">{location}</p>
        <div className="flex justify-between items-center">
          <div className="text-[13px] text-muted">
            <span className="text-[17px] font-semibold text-ink">${price}</span>/night
          </div>
          <div className="flex items-center gap-1 text-[13px] font-medium">
            <span className="text-amber-light">★</span> {rating}
          </div>
        </div>
      </div>
    </Link>
  )
}
