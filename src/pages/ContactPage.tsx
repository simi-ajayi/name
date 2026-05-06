import { PageHero } from '../components/common/PageHero'
import { pageHeroImages } from '../data/imageSources'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Inquiries"
        subtitle="Let’s collaborate"
        backgroundImage={pageHeroImages.contact}
      />

      <section className={sectionBlock}>
        <div
          className={`${layoutContainer} grid grid-cols-1 gap-5 min-[1025px]:grid-cols-2`}
        >
          <div
            className="max-w-[900px] space-y-4 text-studio-text-dark"
        
          >
            <h2 className="m-0 text-[clamp(1.6rem,3.5vw,2.4rem)] text-studio-text">
              Send an inquiry
            </h2>
            <p className="m-0">
              For workshop questions, media, licensing, and commissioned
              photography inquiries, send a direct message and include your
              timeline and project scope.
            </p>
            <p className="m-0">Email: hello@kashfaje.com</p>
            <p className="m-0">Instagram: @kashfaje</p>
          </div>

          <form
            className="grid gap-3.5 border border-studio-text-dark/50 bg-white p-4"
            onSubmit={(event) => event.preventDefault()}
       
          >
            <label className="grid gap-1.5 text-[0.93rem] text-studio-text-dark">
              Name
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full border border-studio-text-dark/50 bg-white/90 px-3 py-2.5 text-studio-text-dark outline-none transition-colors duration-300 focus:border-red-500"
              />
            </label>
            <label className="grid gap-1.5 text-[0.93rem] text-studio-text-dark">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-studio-text-dark/50 bg-white/90 px-3 py-2.5 text-studio-text-dark outline-none transition-colors duration-300 focus:border-red-500"
              />
            </label>
            <label className="grid gap-1.5 text-[0.93rem] text-studio-text-dark">
              Message
              <textarea
                rows={6}
                placeholder="Tell me about your project"
                required
                className="w-full resize-y border border-studio-text-dark/50 bg-white/90 px-3 py-2.5 text-studio-text-dark outline-none transition-colors duration-300 focus:border-red-500"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-fit border border-studio-text-dark/50 bg-white px-3.5 py-2.5 text-studio-text-dark transition-colors duration-300 hover:border-red-500 hover:bg-red-500/12"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
