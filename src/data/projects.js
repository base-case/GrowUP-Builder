// Dummy project catalogue for demo purposes.
// Images use Unsplash (real-estate themed) and load over the network.

export const projects = [
  {
    slug: 'growup-greens',
    name: 'GrowUP Greens',
    type: 'Residential',
    status: 'Ongoing',
    city: 'Shela, Ahmedabad',
    priceFrom: '₹ 68 Lakh',
    config: '2 & 3 BHK Apartments',
    area: '1,250 – 1,980 sq.ft.',
    possession: 'Dec 2027',
    rera: 'PR/GJ/AHMEDABAD/2026/000123',
    short:
      'A 12-acre green township of low-rise apartments wrapped in landscaped gardens.',
    description:
      'GrowUP Greens reimagines community living across 12 acres of lush, low-density development. With 70% open space, resort-style amenities and homes that flood with natural light, it is designed for families who want room to grow without leaving the city behind.',
    highlights: [
      '70% open & green space',
      'Resort-style clubhouse',
      'Vastu-compliant layouts',
      '3-tier security',
    ],
    cover:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    ],
    plans: [
      { name: '2 BHK', area: '1,250 sq.ft.', price: '₹ 68 Lakh*' },
      { name: '3 BHK', area: '1,640 sq.ft.', price: '₹ 89 Lakh*' },
      { name: '3 BHK Premium', area: '1,980 sq.ft.', price: '₹ 1.12 Cr*' },
    ],
    mapQuery: 'Shela, Ahmedabad, Gujarat',
  },
  {
    slug: 'growup-heights',
    name: 'GrowUP Heights',
    type: 'Residential',
    status: 'Ongoing',
    city: 'SG Highway, Ahmedabad',
    priceFrom: '₹ 1.35 Cr',
    config: '3 & 4 BHK Luxury Apartments',
    area: '1,850 – 2,750 sq.ft.',
    possession: 'Jun 2028',
    rera: 'PR/GJ/AHMEDABAD/2026/000456',
    short:
      'Iconic high-rise living with skyline views and a sky-deck infinity pool.',
    description:
      'Rising 28 storeys above SG Highway, GrowUP Heights is a statement address for those who have arrived. Floor-to-ceiling glass, a sky deck with an infinity pool, and concierge services define a lifestyle that sits comfortably above the ordinary.',
    highlights: [
      '28-storey landmark towers',
      'Sky-deck infinity pool',
      'Concierge & valet',
      'Smart-home ready',
    ],
    cover:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    ],
    plans: [
      { name: '3 BHK', area: '1,850 sq.ft.', price: '₹ 1.35 Cr*' },
      { name: '4 BHK', area: '2,400 sq.ft.', price: '₹ 1.85 Cr*' },
      { name: '4 BHK Sky Villa', area: '2,750 sq.ft.', price: '₹ 2.40 Cr*' },
    ],
    mapQuery: 'SG Highway, Ahmedabad, Gujarat',
  },
  {
    slug: 'growup-business-park',
    name: 'GrowUP Business Park',
    type: 'Commercial',
    status: 'Upcoming',
    city: 'Gift City Road, Gandhinagar',
    priceFrom: '₹ 45 Lakh',
    config: 'Offices & Retail Showrooms',
    area: '550 – 5,000 sq.ft.',
    possession: 'Mar 2029',
    rera: 'PR/GJ/GANDHINAGAR/2026/000789',
    short:
      'A Grade-A business destination with offices, showrooms and a food court.',
    description:
      'GrowUP Business Park is where ambition sets up office. LEED-aligned Grade-A floor plates, double-height retail frontage, ample parking and a vibrant food court make it the most future-ready commercial address on the Gift City corridor.',
    highlights: [
      'Grade-A LEED-aligned design',
      'Double-height showrooms',
      '3-level basement parking',
      'High-speed fibre backbone',
    ],
    cover:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1200&q=80',
    ],
    plans: [
      { name: 'Retail Showroom', area: '550 sq.ft.', price: '₹ 45 Lakh*' },
      { name: 'Office Suite', area: '1,200 sq.ft.', price: '₹ 96 Lakh*' },
      { name: 'Full Floor Plate', area: '5,000 sq.ft.', price: '₹ 3.75 Cr*' },
    ],
    mapQuery: 'GIFT City, Gandhinagar, Gujarat',
  },
  {
    slug: 'growup-meadows',
    name: 'GrowUP Meadows',
    type: 'Plotting',
    status: 'Ongoing',
    city: 'Sanand, Ahmedabad',
    priceFrom: '₹ 32 Lakh',
    config: 'Residential Plots',
    area: '1,200 – 3,600 sq.ft.',
    possession: 'Ready to Register',
    rera: 'PR/GJ/AHMEDABAD/2026/000234',
    short:
      'Gated, fully-developed plots with ready roads, drainage and greenery.',
    description:
      'Build your dream home, your way. GrowUP Meadows offers gated, fully-developed residential plots with concrete roads, underground utilities, street lighting and a landscaped central avenue — register today and start building tomorrow.',
    highlights: [
      'Gated & secured community',
      'Ready concrete roads',
      'Underground utilities',
      'Clear, single-title plots',
    ],
    cover:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80',
    ],
    plans: [
      { name: 'Compact Plot', area: '1,200 sq.ft.', price: '₹ 32 Lakh*' },
      { name: 'Standard Plot', area: '2,400 sq.ft.', price: '₹ 58 Lakh*' },
      { name: 'Premium Plot', area: '3,600 sq.ft.', price: '₹ 84 Lakh*' },
    ],
    mapQuery: 'Sanand, Ahmedabad, Gujarat',
  },
  {
    slug: 'growup-riviera',
    name: 'GrowUP Riviera',
    type: 'Residential',
    status: 'Completed',
    city: 'Bopal, Ahmedabad',
    priceFrom: 'Sold Out',
    config: '4 BHK Villas',
    area: '3,200 – 4,100 sq.ft.',
    possession: 'Delivered 2024',
    rera: 'PR/GJ/AHMEDABAD/2022/000061',
    short:
      'A delivered enclave of 48 private villas around a central water feature.',
    description:
      'GrowUP Riviera is our flagship villa community — 48 private residences with landscaped courtyards, a clubhouse and a serene central water feature. Fully delivered in 2024 and now a thriving, sought-after neighbourhood.',
    highlights: [
      '48 private villas',
      'Private landscaped courtyards',
      'Central water feature',
      'Delivered & occupied',
    ],
    cover:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
    ],
    plans: [
      { name: '4 BHK Villa', area: '3,200 sq.ft.', price: 'Sold Out' },
      { name: '4 BHK Grand Villa', area: '4,100 sq.ft.', price: 'Sold Out' },
    ],
    mapQuery: 'Bopal, Ahmedabad, Gujarat',
  },
  {
    slug: 'growup-central',
    name: 'GrowUP Central',
    type: 'Commercial',
    status: 'Upcoming',
    city: 'Prahlad Nagar, Ahmedabad',
    priceFrom: '₹ 78 Lakh',
    config: 'Boutique Offices',
    area: '900 – 2,200 sq.ft.',
    possession: 'Sep 2029',
    rera: 'Coming Soon',
    short:
      'Boutique office suites in the heart of the city’s premium business hub.',
    description:
      'GrowUP Central brings boutique, efficiently-planned office suites to Prahlad Nagar — the city’s most coveted business address. Walkable to cafes, banks and hotels, with a striking glass facade and rooftop lounge.',
    highlights: [
      'Premium central location',
      'Efficient boutique floor plates',
      'Rooftop business lounge',
      'Walkable amenities',
    ],
    cover:
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80',
    ],
    plans: [
      { name: 'Boutique Office', area: '900 sq.ft.', price: '₹ 78 Lakh*' },
      { name: 'Corner Suite', area: '1,500 sq.ft.', price: '₹ 1.28 Cr*' },
      { name: 'Premium Suite', area: '2,200 sq.ft.', price: '₹ 1.85 Cr*' },
    ],
    mapQuery: 'Prahlad Nagar, Ahmedabad, Gujarat',
  },
]

export const projectStatuses = ['All', 'Ongoing', 'Upcoming', 'Completed']
export const projectTypes = ['All', 'Residential', 'Commercial', 'Plotting']

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
