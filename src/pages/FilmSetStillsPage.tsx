import { PageHero } from '../components/common/PageHero'
import { filmProjects } from '../data/content'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function FilmSetStillsPage() {
  return (
    <>
      <PageHero
        title="Set Photography"
        subtitle="Production stills and cinematic imagery"
        backgroundImage="https://images.pixieset.com/506818211/9d388cf7c58c6e50af87e7494401de01-large.JPG"
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3`}
        >
          {filmProjects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden border border-white/20 bg-white/[0.02]"
              data-animate={index % 2 === 0 ? "left" : "right"}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-auto w-full"
              />
              <div className="p-4">
                <h2 className="m-0 text-xl text-white">{project.title}</h2>
                <h3 className="mt-1 text-base font-medium text-studio-muted">
                  {project.subtitle}
                </h3>
                <p className="mt-2.5 text-studio-muted">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
