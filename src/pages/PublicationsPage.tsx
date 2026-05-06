import { PageHero } from '../components/common/PageHero'
import { mediaFeatures } from '../data/content'
import { pageHeroImages } from '../data/imageSources'
import { Link } from 'react-router-dom'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function PublicationsPage() {
  return (
    <>
      <PageHero
        title="Publications"
        subtitle="Read articles"
        backgroundImage={pageHeroImages.publications}
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3`}
        >
          {mediaFeatures.map((feature, index) => (
            <Link
              to={`/publications/${feature.slug}`}
              key={feature.title}
              className="group block overflow-hidden border border-studio-muted/25 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
              data-animate={index % 2 === 0 ? "left" : "right"}
              aria-label={`Read full article: ${feature.title}`}
            >
              <article>
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="h-auto w-full"
                />
                <div className="p-4">
                  <span className="text-[0.8rem] uppercase tracking-[0.08em] text-studio-text-dark">
                    Read
                  </span>
                  <h2 className="mt-1.5 text-xl text-studio-text-dark">{feature.title}</h2>
                  <p className="mt-2.5 text-studio-text-dark">
                    {feature.description}
                  </p>
                  <span className="mt-3 inline-flex border-b border-red-500 text-studio-text-dark transition-colors duration-300">
                    Read Article
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
