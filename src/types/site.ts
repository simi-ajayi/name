export type NavItem = {
  label: string
  path: string
}

export type Gallery = {
  slug: string
  title: string
  path: string
  coverImage: string
  groups: string[]
  description: string
  images: string[]
}

export type FilmProject = {
  title: string
  subtitle: string
  description: string
  image: string
}

export type MediaFeature = {
  title: string
  type: 'Watch' | 'Listen' | 'Read'
  description: string
  image: string
  linkLabel: string
  linkHref: string
}

export type Workshop = {
  slug: string
  title: string
  path: string
  date: string
  cost: string
  description: string
  banner: string
  detailImages: string[]
}

export type Sponsor = {
  name: string
  logo: string
  href: string
}
