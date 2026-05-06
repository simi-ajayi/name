import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { mediaFeatures } from '../../data/content'
import { galleriesBySlug } from '../../data/galleries'
import { workshopBySlug } from '../../data/workshops'

type PageSeo = {
  title: string
  description: string
  image?: string
  ogType?: 'website' | 'article'
  robots?: string
}

const DEFAULT_IMAGE = '/logo.jpg'

const SITE_NAME = 'Kash Faje'

const staticSeoByPath: Record<string, PageSeo> = {
  "/": {
    title: `${SITE_NAME} | Photographer in Nigeria for Portraits, Campaigns, and Visual Storytelling`,
    description:
      "Looking for a top photographer in Nigeria? Explore portfolio galleries, cinematic stills, publications, and workshops by Kash Faje.",
  },
  "/portfolio": {
    title: `Portfolio | ${SITE_NAME}`,
    description:
      "Browse complete photographic portfolios spanning travel, portraiture, cinematic stills, and documentary moments.",
  },
  "/galleries": {
    title: `Galleries | ${SITE_NAME}`,
    description:
      "Explore curated gallery collections featuring natural light storytelling, color studies, and global visual narratives.",
  },
  "/film-set-stills": {
    title: `Film Set Stills | ${SITE_NAME}`,
    description:
      "View set photography and production stills captured by Kash Faje for feature films and episodic projects.",
  },
  "/bio": {
    title: `About | ${SITE_NAME}`,
    description:
      "Learn about Kash Faje, an internationally recognized photographer and educator focused on natural light craft.",
  },
  "/publications": {
    title: `Publications | ${SITE_NAME}`,
    description:
      "Read editorial features and written deep-dives on visual storytelling, lighting craft, and image-making discipline.",
  },
  "/workshops": {
    title: `Workshops | ${SITE_NAME}`,
    description:
      "Join photography workshops led by Kash Faje covering storytelling, travel practice, monochrome craft, and printing.",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Get in touch with Kash Faje for bookings, workshop inquiries, partnerships, and media requests.",
  },
  "/photographers-in-nigeria": {
    title: `Top Photographers in Nigeria | ${SITE_NAME}`,
    description:
      "Looking for a top photographer in Nigeria? Explore Kash Faje for natural light storytelling, portraiture, cinematic stills, and campaign-ready photography.",
    image: "/logo.jpg",
  },
  "/nxstudio": {
    title: `NX Studio | ${SITE_NAME}`,
    description:
      "Discover NX Studio resources and workflow guidance from Kash Faje for efficient post-production and image refinement.",
  },
};

const publicationBySlug = Object.fromEntries(
  mediaFeatures.map((feature) => [feature.slug, feature]),
)

function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') {
    return '/'
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
}

function withTrailingSlash(pathname: string) {
  if (pathname === '/') {
    return '/'
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`
}

function toAbsoluteUrl(url: string, origin: string) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }

  return `${origin}${url.startsWith('/') ? url : `/${url}`}`
}

function resolveSeo(pathname: string): PageSeo {
  const path = normalizePath(pathname)

  if (staticSeoByPath[path]) {
    return staticSeoByPath[path]
  }

  if (path.startsWith('/galleries/')) {
    const slug = path.replace('/galleries/', '')
    const gallery = galleriesBySlug[slug]

    if (gallery) {
      return {
        title: `${gallery.title} Gallery | ${SITE_NAME}`,
        description: gallery.description,
        image: gallery.coverImage,
      }
    }
  }

  if (path.startsWith('/publications/')) {
    const slug = path.replace('/publications/', '')
    const publication = publicationBySlug[slug]

    if (publication) {
      return {
        title: `${publication.title} | ${SITE_NAME}`,
        description: publication.description,
        image: publication.image,
        ogType: 'article',
      }
    }
  }

  if (path.startsWith('/workshops/')) {
    const slug = path.replace('/workshops/', '')
    const workshop = workshopBySlug[slug]

    if (workshop) {
      return {
        title: `${workshop.title} | ${SITE_NAME}`,
        description: `${workshop.description} ${workshop.date}`,
        image: workshop.banner,
        ogType: 'article',
      }
    }
  }

  if (path.startsWith('/portfolio_group/')) {
    return {
      title: `Portfolio Groups | ${SITE_NAME}`,
      description:
        'Browse grouped portfolio collections with selected work across travel, portraiture, and cinematic visual storytelling.',
    }
  }

  return {
    title: `Page Not Found | ${SITE_NAME}`,
    description: 'The requested page could not be found.',
    robots: 'noindex, nofollow',
  }
}

function upsertMetaName(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function upsertMetaProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

export function SiteSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = resolveSeo(pathname)
    const image = toAbsoluteUrl(metadata.image ?? DEFAULT_IMAGE, window.location.origin)
    const canonicalPath = withTrailingSlash(pathname)
    const canonicalUrl = `${window.location.origin}${canonicalPath}`

    document.title = metadata.title

    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }

    canonicalTag.setAttribute('href', canonicalUrl)

    upsertMetaName(
      'robots',
      metadata.robots ?? 'index, follow, max-image-preview:large',
    )
    upsertMetaName('description', metadata.description)
    upsertMetaProperty('og:type', metadata.ogType ?? 'website')
    upsertMetaProperty('og:title', metadata.title)
    upsertMetaProperty('og:description', metadata.description)
    upsertMetaProperty('og:url', canonicalUrl)
    upsertMetaProperty('og:image', image)
    upsertMetaName('twitter:title', metadata.title)
    upsertMetaName('twitter:description', metadata.description)
    upsertMetaName('twitter:image', image)
  }, [pathname])

  return null
}
