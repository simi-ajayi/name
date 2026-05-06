import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { ScrollInGallery } from '../components/gallery/ScrollInGallery'
import { galleries, galleriesBySlug } from '../data/galleries'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function GalleryPage() {
  const { slug } = useParams()

  if (!slug) {
    return <Navigate to="/portfolio/" replace />
  }

  const gallery = galleriesBySlug[slug]

  if (!gallery) {
    return <Navigate to="/portfolio/" replace />
  }

  const currentIndex = galleries.findIndex((entry) => entry.slug === slug)
  const previousGallery = galleries[(currentIndex - 1 + galleries.length) % galleries.length]
  const nextGallery = galleries[(currentIndex + 1) % galleries.length]

  return (
    <>
      <PageHero title={gallery.title} subtitle={gallery.description} backgroundImage={gallery.coverImage} />

      <section className={sectionBlock}>
        <div className={layoutContainer}>
          <ScrollInGallery images={gallery.images} title={gallery.title} />

          <nav
            className="mt-5 flex flex-wrap justify-between gap-4 border-t border-studio-muted/20 pt-4"
            aria-label="Gallery navigation"
            data-animate="up"
          >
            <Link
              to={previousGallery.path}
              className="text-studio-muted transition-colors duration-300 hover:text-studio-text"
            >
              ← {previousGallery.title}
            </Link>
            <Link to="/portfolio/" className="text-studio-muted transition-colors duration-300 hover:text-studio-text">
              All Galleries
            </Link>
            <Link to={nextGallery.path} className="text-studio-muted transition-colors duration-300 hover:text-studio-text">
              {nextGallery.title} →
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}
