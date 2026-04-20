import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { BioPage } from './pages/BioPage'
import { ContactPage } from './pages/ContactPage'
import { FilmSetStillsPage } from './pages/FilmSetStillsPage'
import { GalleryPage } from './pages/GalleryPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { NxStudioPage } from './pages/NxStudioPage'
import { PortfolioGroupPage } from './pages/PortfolioGroupPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { PublicationsPage } from './pages/PublicationsPage'
import { WorkshopDetailPage } from './pages/WorkshopDetailPage'
import { WorkshopsPage } from './pages/WorkshopsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="galleries" element={<PortfolioPage title="Portfolio" subtitle="Explore complete gallery collections" />} />
          <Route path="galleries/:slug" element={<GalleryPage />} />
          <Route path="film-set-stills" element={<FilmSetStillsPage />} />
          <Route path="bio" element={<BioPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="workshops" element={<WorkshopsPage />} />
          <Route path="workshops/:slug" element={<WorkshopDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="nxstudio" element={<NxStudioPage />} />
          <Route path="portfolio_group/:group" element={<PortfolioGroupPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
