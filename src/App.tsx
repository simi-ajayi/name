import { useEffect, useState } from 'react'
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
import { PhotographersInNigeriaPage } from './pages/PhotographersInNigeriaPage'
import { PublicationArticlePage } from './pages/PublicationArticlePage'
import { PublicationsPage } from './pages/PublicationsPage'
import { WorkshopDetailPage } from './pages/WorkshopDetailPage'
import { WorkshopsPage } from './pages/WorkshopsPage'
import {
  getImagePreloadSnapshot,
  preloadAllAppImages,
  subscribeImagePreloadProgress,
} from './utils/preloadAllImages'

type AppLoadingScreenProps = {
  loadedCount: number
  totalCount: number
}

function AppLoadingScreen({ loadedCount, totalCount }: AppLoadingScreenProps) {
  const progress = totalCount > 0 ? Math.round((loadedCount / totalCount) * 100) : 100

  return (
    <div className="flex min-h-screen items-center justify-center bg-studio-bg px-6 text-studio-text-dark">
      <div className="w-full max-w-[420px] space-y-3">
        <div className='text-2xl italic font-mono mb-10 justify-center tracking-tighter text-center '>KASH FAJE</div>
        <p className="m-0 text-sm uppercase mx-auto tracking-[0.09em]">
          Loading images...
        </p>
        <div className="h-1.5 overflow-hidden bg-studio-bg-soft">
          <div
            className="h-full bg-black transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="m-0 text-sm text-studio-text-dark/70">{progress}%</p>
      </div>
    </div>
  );
}

function App() {
  const [progress, setProgress] = useState(() => getImagePreloadSnapshot())
  const [isReady, setIsReady] = useState(
    () => progress.totalCount > 0 && progress.loadedCount >= progress.totalCount,
  )

  useEffect(() => {
    const unsubscribe = subscribeImagePreloadProgress((loadedCount, totalCount) => {
      setProgress({ loadedCount, totalCount })
    })
    let cancelled = false

    preloadAllAppImages().finally(() => {
      if (!cancelled) {
        setIsReady(true)
      }
    })

    return () => {
      cancelled = true
      unsubscribe()
    }
  }, [])

  if (!isReady) {
    return <AppLoadingScreen loadedCount={progress.loadedCount} totalCount={progress.totalCount} />
  }

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
          <Route path="publications/:slug" element={<PublicationArticlePage />} />
          <Route path="workshops" element={<WorkshopsPage />} />
          <Route path="workshops/:slug" element={<WorkshopDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="nxstudio" element={<NxStudioPage />} />
          <Route path="portfolio_group/:group" element={<PortfolioGroupPage />} />
          <Route path="photographers-in-nigeria" element={<PhotographersInNigeriaPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
