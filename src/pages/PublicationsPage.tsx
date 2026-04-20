import { PageHero } from '../components/common/PageHero'
import { mediaFeatures } from '../data/content'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function PublicationsPage() {
  return (
    <>
      <PageHero
        title="Publications"
        subtitle="Watch, listen, and read"
        backgroundImage="https://images.pixieset.com/506818211/452d9bb6ce8a6fc77db29dee9e9d9c16-large.JPG"
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3`}
        >
          {mediaFeatures.map((feature, index) => (
            <article
              className="overflow-hidden  bg-white/[0.02]"
              key={feature.title}
              data-animate={index % 2 === 0 ? "left" : "right"}
            >
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                className="h-auto w-full"
              />
              <div className="p-4">
                <span className="text-[0.8rem] uppercase tracking-[0.08em] text-white">
                  {feature.type}
                </span>
                <h2 className="mt-1.5 text-xl text-white">{feature.title}</h2>
                <p className="mt-2.5 text-studio-muted">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex border-b border-red-500 text-white transition-colors duration-300 hover:text-red-300"
                >
                  {feature.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
