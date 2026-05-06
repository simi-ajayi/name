import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { pageHeroImages } from '../data/imageSources'
import { layoutContainer, outlineButton, sectionBlock } from '../styles/tw'

export function NotFoundPage() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="This route is not available"
        backgroundImage={pageHeroImages.notFound}
      />
      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} max-w-[900px] space-y-4 text-studio-muted`}
          data-animate="up"
        >
          <p className="m-0">
            The page you requested does not exist in this build.
          </p>
          <Link to="/portfolio/" className={outlineButton}>
            Back to Galleries
          </Link>
        </div>
      </section>
    </>
  );
}
