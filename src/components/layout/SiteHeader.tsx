import { useMemo, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { mainNav } from '../../data/navigation'
import { layoutContainer } from '../../styles/tw'

function getNavClass(isActive: boolean) {
  return [
    'inline-flex  px-[0.6rem] py-[0.45rem] text-[0.84rem] tracking-[0.02em] transition-colors duration-300',
    isActive
      ? 'border-red-500 text-white'
      : 'border-transparent text-studio-muted hover:border-red-500 hover:text-white',
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
    <header className="sticky top-0 z-[120] bg-studio-bg backdrop-blur-md">
      <div
        className={`${layoutContainer} flex min-h-[78px] items-center justify-between gap-4`}
      >
        <Link
          to="/"
          aria-label="Kash Faje home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="https://logos.pixieset.com/0319251/8878948fdc755a202144dee522afe164-medium.jpg"
            alt="Kash Faje"
            className="w-[75px] max-w-[40vw]"
          />
        </Link>

        <button
          type="button"
          className="inline-flex h-[42px] w-[42px] flex-col justify-center gap-1 rounded bg-transparent p-2 text-white min-[861px]:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="block w-full border-b border-white" />
          <span className="block w-full border-b border-white" />
          <span className="block w-full border-b border-white" />
        </button>

        <nav className="hidden min-[861px]:block" aria-label="Main navigation">
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
          "overflow-hidden bg-studio-bg/95 transition-[max-height] duration-300 min-[861px]:hidden",
          menuOpen ? "max-h-[65vh]" : "max-h-0",
        ].join(" ")}
      >
        <nav aria-label="Mobile navigation">
          <ul
            className={`${layoutContainer} m-0 list-none divide-y divide-white/10 py-2`}
          >
            {mainNav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `${getNavClass(isActive || activeOverride === item.path)} w-full px-1 py-[0.85rem]`
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
