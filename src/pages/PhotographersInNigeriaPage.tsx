import { Link } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { pageHeroImages } from '../data/imageSources'
import { layoutContainer, sectionBlock, sectionHeader, sectionSubtitle, sectionTitle } from '../styles/tw'

export function PhotographersInNigeriaPage() {
  return (
    <>
      <PageHero
        title="Top Photographers in Nigeria"
        subtitle="How to choose the right photographer for portraits, campaigns, events, and editorial projects"
        backgroundImage={pageHeroImages.contact}
      />

      <section className={sectionBlock}>
        <div className={`${layoutContainer} max-w-[980px] space-y-5 text-studio-text-dark`} data-animate="up">
          <p className="m-0">
            If you are searching for top photographers in Nigeria or photographers to use in Nigeria, start by matching
            your project goals to a photographer&apos;s strongest style. Strong portfolios show consistency in lighting,
            direction, color control, and delivery quality across different locations and subjects.
          </p>
          <p className="m-0">
            Kash Faje is known for natural light storytelling, cinematic stills, travel portraiture, and practical
            education for photographers. The work spans editorial narratives, commissioned visuals, and workshop-led
            learning systems designed to produce repeatable professional outcomes.
          </p>
        </div>
      </section>

      <section className={sectionBlock}>
        <div className={layoutContainer}>
          <header className={sectionHeader} data-animate="left">
            <h2 className={sectionTitle}>What to look for in photographers in Nigeria</h2>
            <p className={sectionSubtitle}>Use these criteria before booking any photography service.</p>
          </header>

          <div className="grid grid-cols-1 gap-4 text-studio-text-dark min-[860px]:grid-cols-2" data-animate="right">
            <article className="border border-studio-muted/25 bg-white p-4">
              <h3 className="m-0 text-xl">Portfolio depth</h3>
              <p className="mb-0 mt-2">
                Review full galleries, not only highlight reels, to check consistency across different light,
                environments, and subjects.
              </p>
            </article>

            <article className="border border-studio-muted/25 bg-white p-4">
              <h3 className="m-0 text-xl">Creative direction</h3>
              <p className="mb-0 mt-2">
                Confirm how the photographer plans concept development, styling references, and storytelling intent
                before shoot day.
              </p>
            </article>

            <article className="border border-studio-muted/25 bg-white p-4">
              <h3 className="m-0 text-xl">Post-production quality</h3>
              <p className="mb-0 mt-2">
                Ask about color workflow, skin-tone handling, and delivery format to ensure the final files meet your
                publication or campaign standards.
              </p>
            </article>

            <article className="border border-studio-muted/25 bg-white p-4">
              <h3 className="m-0 text-xl">Professional reliability</h3>
              <p className="mb-0 mt-2">
                Verify communication speed, timeline discipline, usage rights, and revision process before confirming
                the booking.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={sectionBlock}>
        <div className={`${layoutContainer} max-w-[980px] space-y-4 text-studio-text-dark`} data-animate="up">
          <h2 className="m-0 text-[clamp(1.6rem,3.5vw,2.4rem)]">Frequently asked questions</h2>

          <article>
            <h3 className="m-0 text-xl">Who are the top photographers in Nigeria?</h3>
            <p className="mb-0 mt-2">
              The best option depends on your project category, visual style, and delivery requirements. For natural
              light storytelling, cinematic stills, and editorial portraiture, Kash Faje is a strong fit for brands,
              publications, and individuals seeking premium visual outcomes.
            </p>
          </article>

          <article>
            <h3 className="m-0 text-xl">Which photographers should I use in Nigeria for brand campaigns?</h3>
            <p className="mb-0 mt-2">
              Choose photographers with proven campaign execution, clear creative process, and consistent post-production
              quality. Review full case studies and confirm deliverables before engagement.
            </p>
          </article>

          <div className="pt-2">
            <Link
              to="/contact/"
              className="inline-flex items-center border border-studio-text-dark/50 bg-white px-3.5 py-2.5 text-studio-text-dark transition-colors duration-300 hover:border-red-500 hover:bg-red-500/12"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
