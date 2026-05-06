import { useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { mainNav } from '../../data/navigation'
import { siteHeaderLogo } from '../../data/imageSources'
import { layoutContainer } from '../../styles/tw'

function getNavClass(isActive: boolean) {
  return [
    'inline-flex  px-[0.6rem] py-[0.45rem] text-[1.04rem] tracking-[0.02em] transition-colors duration-300',
    isActive
      ? 'border-red-500 text-studio-text'
      : 'border-transparent text-studio-text hover:border-red-500 hover:text-studio-text',
  ].join(' ')
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const activeOverride = useMemo(() => {
    if (location.pathname.startsWith('/galleries/')) {
      return '/portfolio/'
    }

    return location.pathname
  }, [location.pathname])

  return (
    <header className="absolute w-full text-studio-text top-0 z-[120]  ">
      <div
        className={`${layoutContainer} flex min-h-[78px] items-center justify-between gap-4`}
      >
        <Link
          to="/"
          aria-label="Kash Faje home"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-2"
        >
          <img
            src={siteHeaderLogo}
            alt="Kash Faje"
            loading="eager"
            className="w-[60px] rounded-2xl max-w-[20vw]"
          />
          <div className='font-mono text-xl italic'>KASH FAJE</div>{" "}
        </Link>

        <button
          type="button"
          className="inline-flex h-[42px] w-[42px] flex-col justify-center gap-1  p-2 text-studio-text min-[861px]:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="block w-full border-b border-studio-text" />
          <span className="block w-full border-b border-studio-text" />
          <span className="block w-full border-b border-studio-text" />
        </button>

        <nav
          className="hidden text-studio-text min-[861px]:block"
          aria-label="Main navigation"
        >
          <ul className="m-0 flex list-none gap-1 p-0">
            {mainNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    getNavClass(isActive || activeOverride === item.path)
                  }
                  end={item.path === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={[
          "overflow-hidden bg-studio-bg transition-[max-height] duration-300 min-[861px]:hidden",
          menuOpen ? "h-[70vh]" : "max-h-0",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation">
          <ul
            className={`${layoutContainer} m-0 list-none divide-y divide-studio-muted/20 py-2`}
          >
            {mainNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${getNavClass(isActive || activeOverride === item.path)} text-studio-text-dark! w-full px-1 py-[0.85rem]`
                  }
                  end={item.path === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
