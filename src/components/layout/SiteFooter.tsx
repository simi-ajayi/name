// import { Link } from 'react-router-dom'
// import { legalLinks } from '../../data/navigation'
// import { sponsors } from '../../data/content'
import { layoutContainer } from '../../styles/tw'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8 pb-10">
      {/* <section
        className={`${layoutContainer} flex flex-wrap items-center gap-3`}
        aria-label="Partners"
        data-animate="up"
      >
        {sponsors.map((sponsor) => (
          <a
            href={sponsor.href}
            key={sponsor.name}
            target="_blank"
            rel="noreferrer"
            className="w-[110px] border border-white/10 bg-white p-1.5 transition-transform duration-300 hover:-translate-y-0.5 max-[680px]:w-[calc(50%-0.5rem)]"
          >
            <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
          </a>
        ))}
      </section> */}

      {/* <section
        className={`${layoutContainer} mt-[1.1rem] flex flex-wrap gap-3`}
        aria-label="Additional pages"
        data-animate="left"
      >
        {legalLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-sm text-studio-muted transition-colors duration-300 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </section> */}

      <p className={`${layoutContainer} mt-4 text-[0.88rem] text-studio-muted`} data-animate="right">
        © 2026 All Rights Reserved. Kash Faje Photography
      </p>
    </footer>
  )
}
