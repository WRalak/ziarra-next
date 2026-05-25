// ─── ZIARRA SHARED DATA ───────────────────────────────────────

export const STAYS = [
  { id: '1', title: 'The Serengeti Grand', location: 'Arusha, Tanzania', category: 'Hotel', badge: 'hotel', price: 240, rating: 4.97, reviews: 182, img: '/pic.jpg', coords: [ -3.3869, 36.6830 ] },
  { id: '2', title: 'Maasai Homestead', location: 'Laikipia, Kenya', category: 'Homestay', badge: 'home', price: 68, rating: 4.94, reviews: 79, img: '/picc.jpg', coords: [ 0.4500, 36.9000 ] },
  { id: '3', title: 'Okavango Wild Camp', location: 'Okavango Delta, Botswana', category: 'Camping', badge: 'camp', price: 45, rating: 4.91, reviews: 134, img: '/pic.jpg', coords: [ -19.0000, 23.0000 ] },
  { id: '4', title: 'Dune Dome, Namib', location: 'Sossusvlei, Namibia', category: 'Glamping', badge: 'glamp', price: 320, rating: 5.0, reviews: 47, img: '/picc.jpg', coords: [ -24.7667, 15.9167 ] },
  { id: '5', title: 'Zanzibar Ocean Villa', location: 'Stone Town, Zanzibar', category: 'Hotel', badge: 'hotel', price: 185, rating: 4.89, reviews: 112, img: '/pic.jpg', coords: [ -6.1659, 39.2026 ] },
  { id: '6', title: 'Cape Winelands Farmhouse', location: 'Stellenbosch, South Africa', category: 'Homestay', badge: 'home', price: 112, rating: 4.96, reviews: 88, img: '/picc.jpg', coords: [ -33.9344, 18.8636 ] },
]

export const EXPERIENCES = [
  { id: '1', title: 'Dawn Game Drive in the Mara', location: 'Masai Mara, Kenya', category: 'Safari', duration: '6 hrs', price: 120, rating: 4.98, reviews: 241, img: '/pic.jpg', coords: [ -1.4061, 35.0286 ] },
  { id: '2', title: 'Coastal Swahili Kitchen', location: 'Mombasa, Kenya', category: 'Culinary', duration: '3 hrs', price: 48, rating: 4.95, reviews: 99, img: '/picc.jpg', coords: [ -4.0435, 39.6682 ] },
  { id: '3', title: 'Kilimanjaro Summit Trek', location: 'Kilimanjaro, Tanzania', category: 'Adventure', duration: '7 days', price: 1800, rating: 4.99, reviews: 312, img: '/pic.jpg', coords: [ -3.0674, 37.3556 ] },
  { id: '4', title: 'Zanzibar Dhow Sunset Cruise', location: 'Zanzibar, Tanzania', category: 'Coastal', duration: '2 hrs', price: 60, rating: 4.97, reviews: 176, img: '/picc.jpg', coords: [ -6.1567, 39.1925 ] },
  { id: '5', title: 'Hot Air Balloon, Amboseli', location: 'Amboseli, Kenya', category: 'Aerial', duration: '4 hrs', price: 340, rating: 5.0, reviews: 58, img: '/pic.jpg', coords: [ -2.6481, 37.2520 ] },
  { id: '6', title: 'Maasai Village Immersion', location: 'Narok, Kenya', category: 'Cultural', duration: 'Full day', price: 75, rating: 4.93, reviews: 201, img: '/picc.jpg', coords: [ -1.0833, 35.9333 ] },
]

export const DESTINATIONS = [
  { name: 'Kenya',        region: 'East Africa',     stays: 1240, img: '/pic.jpg', tags: ['Safari','Coast','Culture'] },
  { name: 'Morocco',      region: 'North Africa',    stays: 890,  img: '/picc.jpg', tags: ['Medinas','Desert','Surf'] },
  { name: 'South Africa', region: 'Southern Africa', stays: 2100, img: '/pic.jpg', tags: ['Big Five','Cape','Wine'] },
  { name: 'Rwanda',       region: 'Central Africa',  stays: 320,  img: '/picc.jpg', tags: ['Gorillas','Volcanoes'] },
  { name: 'Zanzibar',     region: 'East Africa Islands', stays: 580, img: '/pic.jpg', tags: ['Beaches','Spice'] },
  { name: 'Namibia',      region: 'Southern Africa', stays: 410,  img: '/picc.jpg', tags: ['Dunes','Stargazing'] },
  { name: 'Ghana',        region: 'West Africa',     stays: 540,  img: '/pic.jpg', tags: ['Heritage','Beaches'] },
  { name: 'Tanzania',     region: 'East Africa',     stays: 1800, img: '/picc.jpg', tags: ['Serengeti','Kili'] },
  { name: 'Botswana',     region: 'Southern Africa', stays: 280,  img: '/pic.jpg', tags: ['Okavango','Delta'] },
]

export const EVENTS = [
  { id: '1', title: 'Nairobi Explorer Meetup', location: 'Nairobi, Kenya', category: 'Meetup', duration: 'Jul 18 · 6PM', price: 0, rating: 4.8, reviews: 54, img: '/pic.jpg', description: 'Connect with fellow explorers, hear local travel stories, and discover new plans for your next African adventure.' },
  { id: '2', title: 'Cape Town Travel Week', location: 'Cape Town, South Africa', category: 'Festival', duration: 'Aug 3–7', price: 25, rating: 4.9, reviews: 128, img: '/picc.jpg', description: 'A five-day celebration of travel, culture, food and itineraries from top local hosts and guides.' },
  { id: '3', title: 'Accra Photo Walk', location: 'Accra, Ghana', category: 'Workshop', duration: 'Aug 22 · 9AM', price: 15, rating: 4.7, reviews: 34, img: '/pic.jpg', description: 'Capture the city’s vibrant markets and street art with a local photographer guiding every step.' },
  { id: '4', title: 'Marrakech Market Masterclass', location: 'Marrakech, Morocco', category: 'Cultural', duration: 'Sep 6 · 2PM', price: 42, rating: 4.9, reviews: 62, img: '/picc.jpg', description: 'Learn bargaining, local flavours, and hidden souk routes with a guide who grew up in the medina.' },
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
