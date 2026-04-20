import type { Workshop } from '../types/site'

export const workshops: Workshop[] = [
  {
    slug: 'cuba',
    title: 'Cuba: Turning the Last Page of 1962',
    path: '/workshops/cuba/',
    date: 'Workshop Date: November 7 – 15, 2026',
    cost: 'Cost: $5,499.00 | Limited to 8 Participants',
    description:
      'A photographic travel intensive focused on street-level storytelling, visual timing, and cultural immersion.',
    banner:
      'https://images.pixieset.com/282818211/9a906ce0c60eb38f7d911fb340fbdc1c-large.JPG',
    detailImages: [
      'https://images.pixieset.com/282818211/a91083c859f64063469aac4f988f3b9d-large.JPG',
      'https://images.pixieset.com/282818211/a96ecdde9c6f2a9ea8cdb9b813210586-large.JPG',
      'https://images.pixieset.com/282818211/b54edd662efca3b99e0b22dbf7f17e46-large.JPG',
      'https://images.pixieset.com/282818211/ca1e376c10d8df532c6ea1ec6e4898a5-large.JPG',
    ],
  },
  {
    slug: 'cuba-seeing-the-sounds-of-music',
    title: 'Cuba: Seeing the Sounds of Music',
    path: '/workshops/cuba-seeing-the-sounds-of-music/',
    date: 'Workshop Date: January 27 – February 3, 2027',
    cost: 'Cost: $5,499.00 | Limited to 8 Participants',
    description:
      'A Cuba workshop centered on rhythm, gesture, and translating live sound into still photographic movement.',
    banner:
      'https://images.pixieset.com/282818211/dd12589f3926c1798e8c107ef1ea45c2-large.JPG',
    detailImages: [
      'https://images.pixieset.com/282818211/efbbeec1307f90e3024a7d65e58abd80-large.JPG',
      'https://images.pixieset.com/326575211/08bc31f57830ec2397ac34d4c62fc913-large.JPG',
      'https://images.pixieset.com/326575211/169c044da9fcc3505c0722dea9c3eec8-large.JPG',
      'https://images.pixieset.com/326575211/1de83d7760bce0223503918c0f3d0549-large.JPG',
    ],
  },
  {
    slug: 'oz-black-and-white',
    title: 'From Oz to Kansas: Ultimate Digital B&W',
    path: '/workshops/',
    date: 'Workshop Date: May 14 – June 4, 2026',
    cost: 'Cost: $675.00 | Limited to 12 Participants',
    description:
      'Domestic and online class on tonal control, monochrome workflow, and advanced print-ready contrast design.',
    banner:
      'https://images.pixieset.com/326575211/44538e378f5fb738c0616d0f4a25947e-large.JPG',
    detailImages: [],
  },
  {
    slug: 'suspect-retreat',
    title: 'Suspect Photography Retreat in the Woods II',
    path: '/workshops/',
    date: 'Workshop Date: September 22 – 25, 2026',
    cost: 'Cost: $500–$4,000 depending on accommodations',
    description:
      'Small cohort retreat with critiques, assignment loops, and field-to-edit instruction.',
    banner:
      'https://images.pixieset.com/326575211/4f5d2d5881d58435df4765d4640e5894-large.JPG',
    detailImages: [],
  },
  {
    slug: 'colors-of-fall',
    title: 'The Colors of Fall',
    path: '/workshops/',
    date: 'Workshop Date: October 12 – 16, 2026',
    cost: 'Cost: $1,895.00 | Limited to 8 Participants',
    description:
      'A fall-location workshop focused on dynamic color relationships and atmospheric natural light.',
    banner:
      'https://images.pixieset.com/326575211/5846d0c268e336b5c871a80be0c85d16-large.JPG',
    detailImages: [],
  },
  {
    slug: 'master-printing',
    title: 'Master Printing',
    path: '/workshops/',
    date: 'Workshop Date: October 19 – 23, 2026',
    cost: 'Cost: $2,295.00 | Limited to 8 Participants',
    description:
      'A print-focused course on tonal separation, media choice, and final output presentation.',
    banner:
      'https://images.pixieset.com/326575211/74c4570f9cd02623db8820eeec9098aa-large.JPG',
    detailImages: [],
  },
]

export const workshopBySlug = Object.fromEntries(
  workshops.map((workshop) => [workshop.slug, workshop]),
)
