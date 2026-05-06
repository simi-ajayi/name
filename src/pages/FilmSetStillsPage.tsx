import { PageHero } from '../components/common/PageHero'
import { presetProducts, stockImageProducts } from '../data/content'
import { pageHeroImages } from '../data/imageSources'
import {
  layoutContainer,
  sectionBlock,
  sectionHeader,
  sectionSubtitle,
  sectionTitle,
} from '../styles/tw'

function ProductGrid({
  title,
  subtitle,
  products,
}: {
  title: string
  subtitle: string
  products: typeof stockImageProducts
}) {
  return (
    <section className={sectionBlock}>
      <div className={layoutContainer}>
        <header className={sectionHeader} data-animate="up">
          <h2 className={sectionTitle}>{title}</h2>
          <p className={sectionSubtitle}>{subtitle}</p>
        </header>

        <div className="grid grid-cols-1 gap-4 min-[681px]:grid-cols-2 min-[1025px]:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.slug}
              className="overflow-hidden border border-studio-muted/35 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
              data-animate={index % 2 === 0 ? "left" : "right"}
            >
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="h-auto w-full"
              />
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="m-0 text-xl text-studio-text-dark">{product.title}</h3>
                  <span className="text-base font-medium text-studio-text-dark">{product.price}</span>
                </div>
                <p className="mt-2.5 text-studio-text-dark">{product.description}</p>
                <ul className="mt-3.5 space-y-1 pl-4 text-sm text-studio-text-dark">
                  {product.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <a
                  href={product.buyHref}
                  className="mt-4 inline-flex border-b border-red-500 text-studio-text-dark transition-colors duration-300"
                >
                  {product.buyLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FilmSetStillsPage() {
  return (
    <>
      <PageHero
        title="Digital Shop"
        subtitle="Stock images and photography presets"
        backgroundImage={pageHeroImages.filmSetStills}
      />

      <ProductGrid
        title="Stock Images"
        subtitle="Licensable image packs for campaigns, social, and editorial work"
        products={stockImageProducts}
      />

      <ProductGrid
        title="Photography Presets"
        subtitle="Natural light and cinematic preset collections for Lightroom"
        products={presetProducts}
      />
    </>
  );
}
