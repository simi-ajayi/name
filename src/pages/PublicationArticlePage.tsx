import { ArrowLeftIcon } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { mediaFeatures } from '../data/content'
import { layoutContainer, sectionBlock } from '../styles/tw'

export function PublicationArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = mediaFeatures.find((feature) => feature.slug === slug)

  if (!article) {
    return <Navigate to="/publications/" replace />
  }

  return (
    <>
      <PageHero
        title={article.title}
        subtitle="Read article"
        backgroundImage={article.image}
      />

      <section className={sectionBlock}>
        <div className={`${layoutContainer} max-w-3xl`}>
          <Link
            to="/publications/"
            className="inline-flex items-center gap-2 border-b border-red-500 text-studio-text-dark transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-4" />
            Back to Articles
          </Link>

          <article className="mt-6 border border-studio-muted/25 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.08)]">
            <span className="text-[0.8rem] uppercase tracking-[0.08em] text-studio-text-dark">
              Read
            </span>
            <h1 className="mt-1.5 text-3xl text-studio-text-dark">{article.title}</h1>
            <p className="mt-3 text-studio-text-dark">{article.description}</p>

            {article.articleBody.map((paragraph) => (
              <p key={paragraph.slice(0, 45)} className="mt-4 text-studio-text-dark">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
