import { PageHero } from '../components/common/PageHero'
import { PortfolioGrid } from '../components/gallery/PortfolioGrid'
import { galleries } from '../data/galleries'
import { pageHeroImages } from '../data/imageSources'
import { layoutContainer, sectionBlock } from '../styles/tw'

type PortfolioPageProps = {
  title?: string
  subtitle?: string
}

export function PortfolioPage({
  title = 'Portfolio',
  subtitle = 'Explore complete gallery collections',
}: PortfolioPageProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        backgroundImage={pageHeroImages.portfolio}
      />

      <section className={sectionBlock}>
        <div className={layoutContainer}>
          <PortfolioGrid galleries={galleries} />
        </div>
      </section>
    </>
  );
}
