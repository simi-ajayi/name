import { Link } from 'react-router-dom'
import type { Gallery } from '../../types/site'

type PortfolioGridProps = {
  galleries: Gallery[]
  showGroups?: boolean
}

export function PortfolioGrid({ galleries, showGroups = true }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 min-[681px]:grid-cols-2">
      {galleries.map((gallery, index) => (
        <article
          key={gallery.slug}
          className="group relative min-h-[325px] overflow-hidden bg-cover bg-center after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_48%)] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
          data-animate={index % 2 === 0 ? 'left' : 'right'}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.05) 15%, rgba(0, 0, 0, 0.72) 88%), url(${gallery.coverImage})`,
          }}
        >
          <Link to={gallery.path} className="absolute inset-0 z-[3]" aria-label={gallery.title} />
          <div className="absolute inset-x-0 bottom-0 z-[4] p-[1.1rem]">
            <h2 className="m-0 text-[clamp(1.2rem,2.3vw,1.6rem)] text-white">
              <Link to={gallery.path} className="transition-colors duration-300 hover:text-red-300">
                {gallery.title}
              </Link>
            </h2>
            {showGroups ? (
              <p className="mt-1 flex flex-wrap gap-[0.55rem] text-[0.85rem] text-studio-muted">
                {gallery.groups.map((group) => (
                  <Link
                    key={group}
                    to={`/portfolio_group/${group}/`}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {group.replace(/-/g, ' ')}
                  </Link>
                ))}
              </p>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  )
}
