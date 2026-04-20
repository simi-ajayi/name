import { PageHero } from '../components/common/PageHero'
import { bioSummary } from '../data/content'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function BioPage() {
  return (
    <>
      <PageHero
        title="About Kash Faje"
        subtitle="Work with Kash"
        backgroundImage="https://images.pixieset.com/506818211/452d9bb6ce8a6fc77db29dee9e9d9c16-large.JPG"
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} max-w-[900px] space-y-4 text-studio-muted`}
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
