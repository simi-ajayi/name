import type { DigitalProduct, FilmProject, MediaFeature, Sponsor } from '../types/site'

export type FloatingObject = {
  className: string
  top?: string
  startXvw: number
  speed: number
  src: string
  alt: string
}

export const floatingObjects: FloatingObject[] = [
  {
    className: "z-[1] w-[25%] max-[1024px]:w-[35%]",
    top: "42%",
    startXvw: -12,
    speed: 0.33,
    src: "https://instagram.fabv2-1.fna.fbcdn.net/v/t51.82787-15/660442016_18354208429237633_6861594795758463787_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzg2NTgyMTE1OTMxMjM1Mzc4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkwOC5zZHIuQzIifQ%3D%3D&_nc_ohc=ECR9Q5L37F0Q7kNvwGawwI5&_nc_oc=AdroM8kDBjFUxS93VgKdqmCplxcRITpx0JrnryZ-gkI6suhOheiVTs3DI1TqJOfgaCg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fabv2-1.fna&_nc_gid=Tn1sVehBxo5t7wIJF2TQAQ&_nc_ss=7a32e&oh=00_Af04VJ9mZ1f4N3aJpnZtkT4k6DCRl2P5F9u_Dw4rMIlw_A&oe=69EC33F5",
    alt: "Palace architecture",
  },
  {
    className: "z-[1] w-[17%] max-[1024px]:w-[25%]",
    top: "65%",
    startXvw: -90,
    speed: 0.24,
    src: "https://instagram.fabv2-1.fna.fbcdn.net/v/t51.82787-15/616053665_18342609781237633_8193515641861202299_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzgwOTMyMDA4NzI0NTU4NTY0MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOS5zZHIuQzIifQ%3D%3D&_nc_ohc=M-M4aWWMyjYQ7kNvwHXBYAp&_nc_oc=AdpqfqNnx7gNjfe0NDZZv3Fy2UOpr23h1Sndqo1rOdtSmPzcz8T8BBU70FA4l4jKd8g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fabv2-1.fna&_nc_gid=Tn1sVehBxo5t7wIJF2TQAQ&_nc_ss=7a32e&oh=00_Af25ebBnfuJoQSMO9GqCNT_sNciLiti3cCjiO7OezAicNg&oe=69EC38D8",
    alt: "Eiffel Tower",
  },
  {
    className: "z-[3] w-[17%] max-[1024px]:w-[25%]",
    top: "53%",
    startXvw: -45,
    speed: 0.27,
    src: "https://instagram.fabv2-1.fna.fbcdn.net/v/t51.82787-15/537431590_18306346621222117_8059356268763327306_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzcwNDkxOTIxNDY5MTQxMTU0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzIifQ%3D%3D&_nc_ohc=G9GImYSZ7Z4Q7kNvwGbdEKI&_nc_oc=AdqaHLiNHNFpD-U32S-QD1sYAd2OcX6CmyUutea2BrEzbRQEJd2x3FuBRba-_ismphI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fabv2-1.fna&_nc_gid=tK5xNvnCq0AC_hsZxIQu5Q&_nc_ss=7a32e&oh=00_Af3gHAYVlU7-_HSgIW0i5LxZqT-VDCJI37goQgxWvPO32w&oe=69EC083C",
    alt: "Portrait",
  },
  {
    className: "z-[3] top-[5%] w-[25%] max-[1024px]:w-[35%]",
    startXvw: -30,
    speed: 0.3,
    src: "https://instagram.fabv2-1.fna.fbcdn.net/v/t39.30808-6/470215904_18293744692237633_7884031686916584201_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzQyNzQwODAxNTAzMDI2NDYwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5OS5zZHIuQzIifQ%3D%3D&_nc_ohc=wnkbfYLDgcYQ7kNvwHwckyH&_nc_oc=AdrHtAXZ3gqxh-O3GKZLVwvhVy2WfYE4eWwBJoVEkiNCzYWkBKxsfGxlZ95VXe_mAIs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fabv2-1.fna&_nc_gid=Tn1sVehBxo5t7wIJF2TQAQ&_nc_ss=7a32e&oh=00_Af1NL_nt18LaHlzElTBK0BbPv_pHu4t-mFWhCRSNeLFkpA&oe=69EC2E3D",
    alt: "Bridge at golden hour",
  },
  {
    className: "z-[3] w-[17%] max-[1024px]:w-[25%]",
    top: "12%",
    startXvw: -110,
    speed: 0.22,
    src: "https://instagram.fabv2-1.fna.fbcdn.net/v/t51.82787-15/640311532_18348119080237633_8188167718321337902_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzgzODI3NzgxNTQ0Nzg3NDE3Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzIifQ%3D%3D&_nc_ohc=0XI_JzdOuogQ7kNvwGc3-DH&_nc_oc=AdpX_ng38jsq23JxtL6rvyp_fB85mkczg4E-jZYDx0AhSKewKQB3MAVXxsv3G6bI2iU&_nc_ad=z-m&_nc_cid=1080&_nc_zt=23&_nc_ht=instagram.fabv2-1.fna&_nc_gid=r9Sf-rbRYjhjaqvHyJZtSg&_nc_ss=7a32e&oh=00_Af37vZHnWnsB38SxkcmVLVaLwrtRA-Pp0C218Go347XqRQ&oe=69EC30AC",
    alt: "Hands playing an instrument",
  },
  {
    className: "z-[1] w-[12%] max-[1024px]:w-[20%]",
    top: "63%",
    startXvw: -70,
    speed: 0.29,
    src: "https://images.pixieset.com/507588211/36630f944e733c9ebdda22dad2ea821f-large.JPG",
    alt: "Portrait in India",
  },
  {
    className: "z-[3] top-[5%] w-[8%] max-[1024px]:w-[12%]",
    startXvw: -80,
    speed: 0.25,
    src: "https://images.pixieset.com/507588211/5146bc2c912a56c90b9e0059016fea77-cover.JPG",
    alt: "Actor headshot",
  },
];

export const homeHeadline = {
  kicker: 'Journeys in Natural Light Photography',
  title: 'Kash Faje',
  subtitle:
    'An immersive photographic experience inspired by the kinetic visual language of the original site.',
}

export const bioSummary =
  'Kash Faje is an internationally recognized photographer and educator known for natural light storytelling, visual experimentation, and craft-focused teaching across travel, portraiture, and cinematic stills.'

export const filmProjects: FilmProject[] = [
  {
    title: "Daughter of the Bride",
    subtitle: "Set Photography",
    description:
      "Photographed scenes, practical still elements, and publicity imagery throughout production.",
    image:
      "https://images.pixieset.com/90253685/497b787ec3ea336ecd09ce5e36da8391-xlarge.jpg",
  },
  {
    title: "Pinball",
    subtitle: "Feature Production Stills",
    description:
      "Captured behind-the-scenes visual coverage and promotional photography for campaign use.",
    image:
      "https://images.pixieset.com/557126001/352e4b3c46e2201eb8c3490ceaf1b9c1-cover.JPG",
  },
  {
    title: "Eco Challenge",
    subtitle: "The World's Toughest Race",
    description:
      "Followed teams and production on location, creating documentary stills across the full course.",
    image:
      "https://images.pixieset.com/620533211/bbbe2ff6be6e5ad9fada1d1dba7e1461-large.JPG",
  },
  {
    title: "Saving Flora",
    subtitle: "Series Publicity Stills",
    description:
      "Delivered in-character portraits and narrative images for marketing and editorial use.",
    image:
      "https://images.pixieset.com/620533211/487386e6e7dcc25e0098c57880bb6bb4-large.JPG",
  },
  {
    title: "Framed",
    subtitle: "On-Set Portrait Sessions",
    description:
      "Created principal cast portrait sets and still visuals for episodic promotional campaigns.",
    image:
      "https://images.pixieset.com/620533211/40b033649b1e63e3f3c6c21ebbb9b7b0-large.JPG",
  },
];

export const mediaFeatures: MediaFeature[] = [
  {
    slug: "lighting-craft-deep-dive",
    title: "Lighting Craft Deep Dive",
    description:
      "A practical walkthrough of natural light choices, rhythm, and in-camera storytelling decisions.",
    image:
      "https://images.pixieset.com/282818211/017b27e57245dd2e5a2a4e21b36f209a-medium.JPG",
    articleBody: [
      "Natural light is not just a source, it is a narrative device. The way light enters a space can suggest mood, social class, distance between characters, or emotional safety. Before placing the camera, I observe how the light changes over ten to fifteen minutes and identify where contrast becomes expressive instead of distracting.",
      "My workflow starts with subtraction. I remove unnecessary modifiers and ask what the frame communicates with only available light, then introduce small adjustments to preserve texture in skin and highlights. This keeps the image grounded and avoids flattening the emotional atmosphere.",
      "When sequencing a story, I use lighting continuity to carry emotional momentum across scenes. Even subtle consistency in direction and tone helps the audience feel progression without forcing attention to technique. The goal is not perfect light, but meaningful light that supports the story."
    ],
  },
  {
    slug: "on-visual-storytelling",
    title: "On Visual Storytelling",
    description:
      "An editorial conversation on creative discipline and translating emotion into still images.",
    image:
      "https://images.pixieset.com/620533211/8ba32ea8206089e0f1e9a636046786d3-cover.JPG",
    articleBody: [
      "Visual storytelling begins long before the shutter. Research, references, and location observation shape which details deserve emphasis. I often build a short visual brief that defines emotional intent for each scene, then evaluate every frame against that intent.",
      "Emotion in still imagery usually comes from relationships between elements: gesture, negative space, light falloff, and perspective. Instead of chasing dramatic moments only, I look for transitional moments where a subject reveals uncertainty, focus, or release. Those in-between frames often become the most memorable.",
      "Discipline is the bridge between inspiration and consistency. I review contact sheets with notes on framing decisions, missed opportunities, and timing patterns. That feedback loop refines instinct over time and makes each project stronger than the last."
    ],
  },
  {
    slug: "print-and-editorial-work",
    title: "Print and Editorial Work",
    description:
      "Selected written interviews and feature stories focused on craft and photographic direction.",
    image:
      "https://images.pixieset.com/282818211/4372424c9b67935794bb95f631540539-large.JPG",
    articleBody: [
      "Editorial photography demands a balance between authorship and service. The image must carry a clear point of view while supporting the narrative priorities of writers, editors, and design teams. Clear communication at pre-production prevents visual drift during execution.",
      "For print, detail integrity matters from capture through delivery. I expose with highlight protection, maintain color-managed previews, and evaluate files at intended print size before final export. This protects tonal separation and avoids surprises in production.",
      "Across interviews and features, the recurring theme is intention. Strong editorial images are rarely accidental; they come from decisions repeated with care. When composition, light, and timing align with narrative purpose, the photograph remains useful long after publication."
    ],
  },
];

export const stockImageProducts: DigitalProduct[] = [
  {
    slug: "havana-street-life-pack",
    title: "Havana Street Life Pack",
    price: "$79",
    description:
      "A curated stock collection of street portraits, architecture, and movement from Havana.",
    image:
      "https://images.pixieset.com/282818211/5ed5b735d857bf9ea0d413da4259e9ce-large.JPG",
    includes: [
      "40 high-resolution JPEG images",
      "Commercial license for web and social use",
      "Color and monochrome variants",
    ],
    buyLabel: "Buy Stock Pack",
    buyHref:
      "mailto:hello@kashfaje.com?subject=Purchase%20Havana%20Street%20Life%20Pack&body=Hello%20Kashfaje%2C%0A%0AI%20would%20like%20to%20purchase%20the%20Havana%20Street%20Life%20Pack.%20Please%20share%20payment%20and%20delivery%20details.%0A%0AThank%20you.",
  },
  {
    slug: "cinematic-travel-pack",
    title: "Cinematic Travel Pack",
    price: "$99",
    description:
      "Editorial-ready travel stock with dramatic light, layered composition, and storytelling frames.",
    image:
      "https://images.pixieset.com/506818211/db625df6684925e333ab307fec8a93d0-large.JPG",
    includes: [
      "55 high-resolution JPEG images",
      "Commercial license for campaigns and digital ads",
      "Instant download delivery",
    ],
    buyLabel: "Buy Stock Pack",
    buyHref:
      "mailto:hello@kashfaje.com?subject=Purchase%20Cinematic%20Travel%20Pack&body=Hello%20Kashfaje%2C%0A%0AI%20would%20like%20to%20purchase%20the%20Cinematic%20Travel%20Pack.%20Please%20share%20payment%20and%20delivery%20details.%0A%0AThank%20you.",
  },
  {
    slug: "portrait-editorial-pack",
    title: "Portrait Editorial Pack",
    price: "$89",
    description:
      "A portrait-focused stock set built for magazine layouts, branding, and social storytelling.",
    image:
      "https://images.pixieset.com/507588211/5146bc2c912a56c90b9e0059016fea77-cover.JPG",
    includes: [
      "45 high-resolution JPEG images",
      "Commercial license for client projects",
      "Delivered with usage guide",
    ],
    buyLabel: "Buy Stock Pack",
    buyHref:
      "mailto:hello@kashfaje.com?subject=Purchase%20Portrait%20Editorial%20Pack&body=Hello%20Kashfaje%2C%0A%0AI%20would%20like%20to%20purchase%20the%20Portrait%20Editorial%20Pack.%20Please%20share%20payment%20and%20delivery%20details.%0A%0AThank%20you.",
  },
];

export const presetProducts: DigitalProduct[] = [
  {
    slug: "natural-light-starter-presets",
    title: "Natural Light Starter Presets",
    price: "$49",
    description:
      "Clean, true-to-skin Lightroom presets designed for fast natural light workflow.",
    image:
      "https://images.pixieset.com/620533211/8ba32ea8206089e0f1e9a636046786d3-cover.JPG",
    includes: [
      "8 Lightroom presets (desktop + mobile)",
      "Installation guide PDF",
      "Best-use exposure notes",
    ],
    buyLabel: "Buy Preset Pack",
    buyHref: "mailto:hello@kashfaje.com?subject=Purchase%20Natural%20Light%20Starter%20Presets",
  },
  {
    slug: "cinematic-tone-presets",
    title: "Cinematic Tone Presets",
    price: "$59",
    description:
      "Filmic contrast and tonal control presets for portraits, travel, and campaign imagery.",
    image:
      "https://images.pixieset.com/620533211/bbbe2ff6be6e5ad9fada1d1dba7e1461-large.JPG",
    includes: [
      "10 Lightroom presets (desktop + mobile)",
      "Daylight and low-light variants",
      "Video walkthrough link",
    ],
    buyLabel: "Buy Preset Pack",
    buyHref: "mailto:hello@kashfaje.com?subject=Purchase%20Cinematic%20Tone%20Presets",
  },
  {
    slug: "editorial-color-presets",
    title: "Editorial Color Presets",
    price: "$69",
    description:
      "Refined color profiles inspired by magazine and campaign post-production workflows.",
    image:
      "https://images.pixieset.com/282818211/4372424c9b67935794bb95f631540539-large.JPG",
    includes: [
      "12 Lightroom presets (desktop + mobile)",
      "Color profile recommendations",
      "Skin tone correction notes",
    ],
    buyLabel: "Buy Preset Pack",
    buyHref: "mailto:hello@kashfaje.com?subject=Purchase%20Editorial%20Color%20Presets",
  },
]

export const sponsors: Sponsor[] = [
  {
    name: 'Nikon',
    logo: 'https://images.pixieset.com/282818211/280a8d1adf4eb3f6815a9cf7bcdf6905-cover.JPG',
    href: 'https://www.nikonusa.com',
  },
  {
    name: 'B and H',
    logo: 'https://images.pixieset.com/282818211/382814e84c1335aceb77810cd62c7fd3-medium.JPG',
    href: 'https://www.bhphotovideo.com',
  },
  {
    name: 'Calibrite',
    logo: 'https://images.pixieset.com/282818211/38babda5a94839a8b11f1836bd6b6075-medium.JPG',
    href: 'https://calibrite.com',
  },
  {
    name: 'Epson',
    logo: 'https://images.pixieset.com/282818211/41a3ba9dbdb448c90bfe168001ba1195-medium.JPG',
    href: 'https://epson.com',
  },
  {
    name: 'BenQ',
    logo: 'https://images.pixieset.com/282818211/4372424c9b67935794bb95f631540539-medium.JPG',
    href: 'https://www.benq.com',
  },
  {
    name: 'Kolari Vision',
    logo: 'https://images.pixieset.com/282818211/4cfabb4ae02d0ebc33dd47006d5398e3-medium.JPG',
    href: 'https://kolarivision.com',
  },
]
