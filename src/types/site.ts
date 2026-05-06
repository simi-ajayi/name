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
  slug: string
  title: string
  description: string
  image: string
  articleBody: string[]
}

export type DigitalProduct = {
  slug: string
  title: string
  price: string
  description: string
  image: string
  includes: string[]
  buyLabel: string
  buyHref: string
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
