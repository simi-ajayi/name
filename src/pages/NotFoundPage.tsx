import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { layoutContainer, outlineButton, sectionBlock } from '../styles/tw'

export function NotFoundPage() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="This route is not available"
        backgroundImage="https://images.pixieset.com/506818211/83edf5a93ee175968dded983d3d6fd43-large.JPG"
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
