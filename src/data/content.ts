import type { FilmProject, MediaFeature, Sponsor } from '../types/site'

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
    title: "Lighting Craft Deep Dive",
    type: "Watch",
    description:
      "A breakdown of natural light decision-making, visual rhythm, and in-camera choices.",
    image:
      "https://images.pixieset.com/282818211/017b27e57245dd2e5a2a4e21b36f209a-medium.JPG",
    linkLabel: "Watch Feature",
    linkHref: "/publications/",
  },
  {
    title: "On Visual Storytelling",
    type: "Listen",
    description:
      "Conversations on process, creative discipline, and translating emotion into still imagery.",
    image:
      "https://images.pixieset.com/620533211/8ba32ea8206089e0f1e9a636046786d3-cover.JPG",
    linkLabel: "Listen Now",
    linkHref: "/publications/",
  },
  {
    title: "Print and Editorial Work",
    type: "Read",
    description:
      "Selected written interviews and feature stories focused on craft and photographic direction.",
    image:
      "https://images.pixieset.com/282818211/4372424c9b67935794bb95f631540539-large.JPG",
    linkLabel: "Read Articles",
    linkHref: "/publications/",
  },
];

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
