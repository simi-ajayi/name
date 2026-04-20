import { PageHero } from '../components/common/PageHero'
import { PortfolioGrid } from '../components/gallery/PortfolioGrid'
import { galleries } from '../data/galleries'
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
        backgroundImage="https://images.pixieset.com/506818211/db625df6684925e333ab307fec8a93d0-large.JPG"
      />

      <section className={sectionBlock}>
        <div className={layoutContainer}>
          <PortfolioGrid galleries={galleries} />
        </div>
      </section>
    </>
  );
}
