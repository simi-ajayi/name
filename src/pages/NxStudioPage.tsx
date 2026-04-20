import { PageHero } from '../components/common/PageHero'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function NxStudioPage() {
  return (
    <>
      <PageHero
        title="NX Studio Downloads"
        subtitle="Workflow tools and setup resources"
        backgroundImage="https://images.pixieset.com/506818211/83edf5a93ee175968dded983d3d6fd43-large.JPG"
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
              className="w-fit border-b border-white/20 text-white transition-colors duration-300 hover:text-red-300"
            >
              NX Studio Starter Preset Pack
            </a>
            <a
              href="#"
              className="w-fit border-b border-white/20 text-white transition-colors duration-300 hover:text-red-300"
            >
              Color Pipeline Checklist
            </a>
            <a
              href="#"
              className="w-fit border-b border-white/20 text-white transition-colors duration-300 hover:text-red-300"
            >
              Print Preparation Guide
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
