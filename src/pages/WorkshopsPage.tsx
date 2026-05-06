import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { pageHeroImages } from '../data/imageSources'
import { workshops } from '../data/workshops'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function WorkshopsPage() {
  return (
    <>
      <PageHero
        title="Workshops"
        subtitle="Travel workshops and domestic online workshops"
        backgroundImage={pageHeroImages.workshops}
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3`}
        >
          {workshops.map((workshop, index) => (
            <article
              key={workshop.slug}
              className="overflow-hidden border border-studio-muted/25 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
              data-animate={index % 2 === 0 ? "left" : "right"}
            >
              <img
                src={workshop.banner}
                alt={workshop.title}
                loading="lazy"
                className="h-auto w-full"
              />
              <div className="p-4">
                <h2 className="m-0 text-xl text-studio-text-dark">{workshop.title}</h2>
                <p className="mt-2 text-[0.92rem] text-studio-text-dark">
                  {workshop.date}
                </p>
                <p className="mt-1 text-[0.92rem] text-studio-text-dark">
                  {workshop.cost}
                </p>
                <p className="mt-2.5 text-studio-text-dark">
                  {workshop.description}
                </p>
                <Link
                  to={workshop.path}
                  className="mt-3 inline-flex border-b border-red-500 text-studio-text-dark transition-colors duration-300 "
                >
                  View Workshop
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
