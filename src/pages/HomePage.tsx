import { Link } from "react-router-dom";
import { PortfolioGrid } from "../components/gallery/PortfolioGrid";
import { FloatingHero } from "../components/home/FloatingHero";
import { mediaFeatures } from "../data/content";
import { featuredHomeSlugs, galleries } from "../data/galleries";
import {
  layoutContainer,
  outlineButton,
  sectionBlock,
  sectionBlockDark,
  sectionHeader,
  sectionSubtitle,
  sectionTitle,
} from "../styles/tw";

export function HomePage() {
  const featuredGalleries = galleries.filter((gallery) =>
    featuredHomeSlugs.includes(gallery.slug),
  );

  return (
    <>
      <FloatingHero />

      <section className={sectionBlock}>
        <div className={layoutContainer}>
          <header className={sectionHeader} data-animate="up">
            <h2 className={sectionTitle}>Cuba Galleries</h2>
            <p className={sectionSubtitle}>Selected portfolio highlights</p>
          </header>

          <PortfolioGrid galleries={featuredGalleries} />

          <div className="mt-5" data-animate="right">
            <Link to="/portfolio/" className={outlineButton}>
              View Full Galleries
            </Link>
          </div>
        </div>
      </section>

      <section className={sectionBlockDark}>
        <div className={layoutContainer}>
          <header className={sectionHeader} data-animate="left">
            <h2 className={sectionTitle}>Media</h2>
            <p className={sectionSubtitle}>Watch, listen, and read</p>
          </header>

          <div className="grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3">
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
                  <h3 className="mt-1.5 text-xl text-white">{feature.title}</h3>
                  <p className="mt-2.5 text-studio-muted">
                    {feature.description}
                  </p>
                  <Link
                    to={feature.linkHref}
                    className="mt-3 inline-flex border-b border-red-500 text-white transition-colors duration-300 hover:text-red-300"
                  >
                    {feature.linkLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
