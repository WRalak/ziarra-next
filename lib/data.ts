// ─── ZIARRA SHARED DATA ───────────────────────────────────────

export const STAYS = [
  { id: '1', title: 'The Serengeti Grand', location: 'Arusha, Tanzania', category: 'Hotel', badge: 'hotel', price: 240, rating: 4.97, reviews: 182, img: 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=500&q=80' },
  { id: '2', title: 'Maasai Homestead', location: 'Laikipia, Kenya', category: 'Homestay', badge: 'home', price: 68, rating: 4.94, reviews: 79, img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&q=80' },
  { id: '3', title: 'Okavango Wild Camp', location: 'Okavango Delta, Botswana', category: 'Camping', badge: 'camp', price: 45, rating: 4.91, reviews: 134, img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80' },
  { id: '4', title: 'Dune Dome, Namib', location: 'Sossusvlei, Namibia', category: 'Glamping', badge: 'glamp', price: 320, rating: 5.0, reviews: 47, img: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=500&q=80' },
  { id: '5', title: 'Zanzibar Ocean Villa', location: 'Stone Town, Zanzibar', category: 'Hotel', badge: 'hotel', price: 185, rating: 4.89, reviews: 112, img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&q=80' },
  { id: '6', title: 'Cape Winelands Farmhouse', location: 'Stellenbosch, South Africa', category: 'Homestay', badge: 'home', price: 112, rating: 4.96, reviews: 88, img: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&q=80' },
]

export const EXPERIENCES = [
  { id: '1', title: 'Dawn Game Drive in the Mara', location: 'Masai Mara, Kenya', category: 'Safari', duration: '6 hrs', price: 120, rating: 4.98, reviews: 241, img: 'https://images.unsplash.com/photo-1535940300484-20b4c6930c7e?w=500&q=80' },
  { id: '2', title: 'Coastal Swahili Kitchen', location: 'Mombasa, Kenya', category: 'Culinary', duration: '3 hrs', price: 48, rating: 4.95, reviews: 99, img: 'https://images.unsplash.com/photo-1585155784229-aff921ccfa53?w=500&q=80' },
  { id: '3', title: 'Kilimanjaro Summit Trek', location: 'Kilimanjaro, Tanzania', category: 'Adventure', duration: '7 days', price: 1800, rating: 4.99, reviews: 312, img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=500&q=80' },
  { id: '4', title: 'Zanzibar Dhow Sunset Cruise', location: 'Zanzibar, Tanzania', category: 'Coastal', duration: '2 hrs', price: 60, rating: 4.97, reviews: 176, img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&q=80' },
  { id: '5', title: 'Hot Air Balloon, Amboseli', location: 'Amboseli, Kenya', category: 'Aerial', duration: '4 hrs', price: 340, rating: 5.0, reviews: 58, img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=500&q=80' },
  { id: '6', title: 'Maasai Village Immersion', location: 'Narok, Kenya', category: 'Cultural', duration: 'Full day', price: 75, rating: 4.93, reviews: 201, img: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=500&q=80' },
]

export const DESTINATIONS = [
  { name: 'Kenya',        region: 'East Africa',     stays: 1240, img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80', tags: ['Safari','Coast','Culture'] },
  { name: 'Morocco',      region: 'North Africa',    stays: 890,  img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&q=80', tags: ['Medinas','Desert','Surf'] },
  { name: 'South Africa', region: 'Southern Africa', stays: 2100, img: 'https://images.unsplash.com/photo-1544985361-b420d7a77043?w=600&q=80', tags: ['Big Five','Cape','Wine'] },
  { name: 'Rwanda',       region: 'Central Africa',  stays: 320,  img: 'https://images.unsplash.com/photo-1590489168135-e5b6a535c157?w=600&q=80', tags: ['Gorillas','Volcanoes'] },
  { name: 'Zanzibar',     region: 'East Africa Islands', stays: 580, img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80', tags: ['Beaches','Spice'] },
  { name: 'Namibia',      region: 'Southern Africa', stays: 410,  img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', tags: ['Dunes','Stargazing'] },
  { name: 'Ghana',        region: 'West Africa',     stays: 540,  img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80', tags: ['Heritage','Beaches'] },
  { name: 'Tanzania',     region: 'East Africa',     stays: 1800, img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80', tags: ['Serengeti','Kili'] },
  { name: 'Botswana',     region: 'Southern Africa', stays: 280,  img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80', tags: ['Okavango','Delta'] },
]

export const BADGE_STYLES: Record<string, string> = {
  hotel: 'bg-forest text-white',
  home:  'bg-amber-pale text-amber',
  camp:  'bg-white/90 text-forest',
  glamp: 'bg-coral-pale text-coral',
  Safari:    'bg-amber-pale text-amber',
  Culinary:  'bg-purple-100 text-purple-700',
  Adventure: 'bg-[#E8F3EE] text-forest',
  Coastal:   'bg-blue-100 text-blue-700',
  Aerial:    'bg-[#E8F3EE] text-forest',
  Cultural:  'bg-coral-pale text-coral',
}
