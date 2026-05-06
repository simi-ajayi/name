import {
  floatingObjects,
  mediaFeatures,
  presetProducts,
  sponsors,
  stockImageProducts,
} from './content'
import { galleries } from './galleries'
import { pageHeroImages, siteHeaderLogo } from './imageSources'
import { workshops } from './workshops'

const galleryImages = galleries.flatMap((gallery) => [gallery.coverImage, ...gallery.images])
const workshopImages = workshops.flatMap((workshop) => [workshop.banner, ...workshop.detailImages])

const rawImageUrls = [
  siteHeaderLogo,
  ...Object.values(pageHeroImages),
  ...galleryImages,
  ...workshopImages,
  ...mediaFeatures.map((feature) => feature.image),
  ...stockImageProducts.map((product) => product.image),
  ...presetProducts.map((product) => product.image),
  ...sponsors.map((sponsor) => sponsor.logo),
  ...floatingObjects.map((object) => object.src),
]

export const appImageUrls = Array.from(new Set(rawImageUrls)).filter(
  (url): url is string => Boolean(url),
)
