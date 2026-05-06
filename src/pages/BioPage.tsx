import { PageHero } from '../components/common/PageHero'
import { bioSummary } from '../data/content'
import { pageHeroImages } from '../data/imageSources'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function BioPage() {
  return (
    <>
      <PageHero
        title="About Kash Faje"
        subtitle="Work with Kash"
        backgroundImage={pageHeroImages.bio}
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} max-w-[900px]  leading-8 space-y-4 text-studio-text-dark`}
          data-animate="up"
        >
          <p className="m-0">{bioSummary}</p>
          <p className="m-0">
            Kash Faje develops visual systems where natural light, motion, and
            timing are central to both still image quality and storytelling
            impact. The work spans editorial portraiture, travel narratives,
            cinematic stills, and fine art projects.
          </p>
          <p className="m-0">
            From field capture to final print, the workflow is built around
            color discipline, tonal control, and expressive intent. Workshops
            and mentorship programs translate that craft into practical,
            repeatable systems for working photographers.
          </p>
        </div>
      </section>
    </>
  );
}
