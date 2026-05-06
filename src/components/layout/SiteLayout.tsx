import { Outlet } from 'react-router-dom'
import { GlobalScrollAnimations } from '../common/GlobalScrollAnimations'
import { SiteSeo } from '../common/SiteSeo'
import { ScrollToTop } from '../common/ScrollToTop'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteSeo />
      <ScrollToTop />
      <GlobalScrollAnimations />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
