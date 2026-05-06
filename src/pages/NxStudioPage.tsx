import { PageHero } from '../components/common/PageHero'
import { pageHeroImages } from '../data/imageSources'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function NxStudioPage() {
  return (
    <>
      <PageHero
        title="NX Studio Downloads"
        subtitle="Workflow tools and setup resources"
        backgroundImage={pageHeroImages.nxStudio}
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} max-w-[900px] space-y-4 text-studio-muted`}
          data-animate="up"
        >
          <p className="m-0">
            Download recommended workflow presets, color settings, and editing
            references to match the studio process used in gallery and workshop
            sessions.
          </p>
          <div className="grid gap-2.5">
            <a
              href="#"
              className="w-fit border-b border-studio-muted/35 text-studio-text transition-colors duration-300 hover:text-red-300"
            >
              NX Studio Starter Preset Pack
            </a>
            <a
              href="#"
              className="w-fit border-b border-studio-muted/35 text-studio-text transition-colors duration-300 hover:text-red-300"
            >
              Color Pipeline Checklist
            </a>
            <a
              href="#"
              className="w-fit border-b border-studio-muted/35 text-studio-text transition-colors duration-300 hover:text-red-300"
            >
              Print Preparation Guide
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
