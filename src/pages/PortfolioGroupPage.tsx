import { Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { PortfolioGrid } from '../components/gallery/PortfolioGrid'
import { galleries, portfolioGroupMap } from '../data/galleries'
import { pageHeroImages } from '../data/imageSources'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function PortfolioGroupPage() {
  const { group } = useParams()

  if (!group || !portfolioGroupMap[group]) {
    return <Navigate to="/portfolio/" replace />
  }

  const filtered = galleries.filter((gallery) => portfolioGroupMap[group].includes(gallery.slug))
  const title = `Portfolio Group: ${group.replace(/-/g, ' ')}`

  return (
    <>
      <PageHero
        title={title}
        subtitle="Filtered gallery view"
        backgroundImage={pageHeroImages.portfolioGroup}
      />

      <section className={sectionBlock}>
        <div className={layoutContainer}>
          <PortfolioGrid galleries={filtered} />
        </div>
      </section>
    </>
  );
}
