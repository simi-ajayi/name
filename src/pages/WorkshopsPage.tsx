import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { workshops } from '../data/workshops'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function WorkshopsPage() {
  return (
    <>
      <PageHero
        title="Workshops"
        subtitle="Travel workshops and domestic online workshops"
        backgroundImage="https://images.pixieset.com/506818211/239ac07d36440d9041c90020b20cc53f-large.JPG"
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3`}
        >
          {workshops.map((workshop, index) => (
            <article
              key={workshop.slug}
              className="overflow-hidden border border-white/20 bg-white/[0.02]"
              data-animate={index % 2 === 0 ? "left" : "right"}
            >
              <img
                src={workshop.banner}
                alt={workshop.title}
                loading="lazy"
                className="h-auto w-full"
              />
              <div className="p-4">
                <h2 className="m-0 text-xl text-white">{workshop.title}</h2>
                <p className="mt-2 text-[0.92rem] text-studio-muted">
                  {workshop.date}
                </p>
                <p className="mt-1 text-[0.92rem] text-studio-muted">
                  {workshop.cost}
                </p>
                <p className="mt-2.5 text-studio-muted">
                  {workshop.description}
                </p>
                <Link
                  to={workshop.path}
                  className="mt-3 inline-flex border-b border-red-500 text-white transition-colors duration-300 hover:text-red-300"
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
