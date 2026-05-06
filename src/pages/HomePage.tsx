import { Link } from "react-router-dom";
import { PortfolioGrid } from "../components/gallery/PortfolioGrid";
import { FloatingHero } from "../components/home/FloatingHero";
import { mediaFeatures } from "../data/content";
import { featuredHomeSlugs, galleries } from "../data/galleries";
import {
  layoutContainer,
  // outlineButton,
  sectionBlock,
  sectionBlockDark,
  sectionHeader,
  sectionSubtitle,
  sectionTitle,
} from "../styles/tw";
import { ArrowRightIcon } from "lucide-react";

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
            <h2 className={sectionTitle}>Natural Light Photography by Kash Faje</h2>
            <p className={sectionSubtitle}>
              Editorial portraiture, travel storytelling, cinematic stills, and practical photography education.
            </p>
          </header>


          <div className="mt-5 flex flex-wrap gap-4" data-animate="right">
            <Link to="/bio/" className="text-studio-text-dark inline-flex items-center gap-2 border-b border-red-500 transition-colors duration-300">
              Read Full Bio
              <ArrowRightIcon className="w-4" />
            </Link>
            <Link to="/contact/" className="text-studio-text-dark inline-flex items-center gap-2 border-b border-red-500 transition-colors duration-300">
              Contact for Bookings
              <ArrowRightIcon className="w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className={sectionBlockDark}>
        <div className={layoutContainer}>
          <header className={sectionHeader} data-animate="up">
            <h2 className={sectionTitle}>Cuba Galleries</h2>
            <p className={sectionSubtitle}>Selected portfolio highlights</p>
          </header>

          <PortfolioGrid galleries={featuredGalleries} />

          <div className="mt-5" data-animate="right">
            <Link to="/portfolio/" className="text-studio-text-dark inline-flex items-center gap-2 border-b border-red-500  transition-colors duration-300">
              View Full Galleries 
  <ArrowRightIcon className="w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className={sectionBlock}>
        <div className={layoutContainer}>
          <header className={sectionHeader} data-animate="left">
            <h2 className={sectionTitle}>Media</h2>
            <p className={sectionSubtitle}>Read articles</p>
          </header>

          <div className="grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3">
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
                    <h3 className="mt-1.5 text-xl text-studio-text-dark">{feature.title}</h3>
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
        </div>
      </section>
    </>
  );
}
