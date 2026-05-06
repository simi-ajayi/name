type PageHeroProps = {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative min-h-[38vh]  bg-studio-bg-soft bg-cover bg-center"
      data-animate="zoom"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
            }
          : undefined
      }
    >
      <div className="mx-auto flex min-h-[38vh] w-[min(1200px,calc(100%-3rem))] flex-col justify-end gap-2 py-7">
        <h1 className="m-0 text-[clamp(2rem,4vw,3.2rem)] text-studio-text">{title}</h1>
        {subtitle ? <p className="m-0 max-w-[720px] text-studio-muted">{subtitle}</p> : null}
      </div>
    </section>
  )
}
