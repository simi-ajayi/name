import { Navigate, useParams } from 'react-router-dom'
import { PageHero } from '../components/common/PageHero'
import { workshopBySlug } from '../data/workshops'
import { layoutContainer, sectionBlock, sectionBlockDark } from '../styles/tw'

export function WorkshopDetailPage() {
  const { slug } = useParams()

  if (!slug || !workshopBySlug[slug]) {
    return <Navigate to="/workshops/" replace />
  }

  const workshop = workshopBySlug[slug]

  return (
    <>
      <PageHero title={workshop.title} subtitle={workshop.date} backgroundImage={workshop.banner} />

      <section className={sectionBlock}>
        <div className={`${layoutContainer} max-w-[900px] space-y-4 text-studio-muted`} data-animate="up">
          <p className="m-0">{workshop.cost}</p>
          <p className="m-0">{workshop.description}</p>
          <p className="m-0">
            This workshop follows a field-first approach with daily image review, guided assignments, and a
            strong focus on timing, composition, and purposeful visual storytelling.
          </p>
        </div>
      </section>

      {workshop.detailImages.length > 0 ? (
        <section className={sectionBlockDark}>
          <div className={`${layoutContainer} grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3`}>
            {workshop.detailImages.map((image, index) => (
              <figure key={`${workshop.slug}-${index}`} data-animate={index % 2 === 0 ? 'left' : 'right'}>
                <img
                  src={image}
                  alt={`${workshop.title} detail ${index + 1}`}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </>
  )
}
