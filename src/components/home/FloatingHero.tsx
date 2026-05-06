import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { homeHeadline } from '../../data/content'
import { galleries } from '../../data/galleries'
import { layoutContainer } from '../../styles/tw'

const letterRows = [
  ['K', 'A', 'S', 'H'],
  ['F', 'A', 'J', 'E'],
]

const allLetters = letterRows.flat()
const HERO_ROTATION_MS = 5200
const HERO_FADE_DURATION_MS = 2600

const heroBackgroundImages = Array.from(
  new Set([
    ...galleries.map((gallery) => gallery.coverImage),
  ]),
)

export function FloatingHero() {
  const [revealedCount, setRevealedCount] = useState(0)
  const [dimLetters, setDimLetters] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [incomingImageIndex, setIncomingImageIndex] = useState<number | null>(null)
  const [isCrossfading, setIsCrossfading] = useState(false)

  const activeIndexRef = useRef(0)

  useEffect(() => {
    const timeouts: number[] = []

    allLetters.forEach((_, index) => {
      const timeout = window.setTimeout(() => {
        setRevealedCount((count) => Math.max(count, index + 1))
      }, index * 100)

      timeouts.push(timeout)
    })

    timeouts.push(
      window.setTimeout(() => {
        setDimLetters(true)
      }, 2500),
    )

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
    }
  }, [])

  useEffect(() => {
    if (heroBackgroundImages.length < 2) {
      return
    }

    const getNextIndex = (index: number) => (index + 1) % heroBackgroundImages.length
    let rotationTimeout = 0
    let fadeTimeout = 0
    let cancelled = false

    const queueRotation = () => {
      rotationTimeout = window.setTimeout(() => {
        const nextIndex = getNextIndex(activeIndexRef.current)
        setIncomingImageIndex(nextIndex)
        window.requestAnimationFrame(() => {
          setIsCrossfading(true)
        })

        fadeTimeout = window.setTimeout(() => {
          activeIndexRef.current = nextIndex
          setActiveImageIndex(nextIndex)
          setIncomingImageIndex(null)
          setIsCrossfading(false)

          if (!cancelled) {
            queueRotation()
          }
        }, HERO_FADE_DURATION_MS)
      }, HERO_ROTATION_MS)
    }

    queueRotation()

    return () => {
      cancelled = true
      window.clearTimeout(rotationTimeout)
      window.clearTimeout(fadeTimeout)
    }
  }, [])

  return (
    <section
      id="landing-hero"
      className="relative isolate min-h-screen min-h-[min(100dvh,860px)] overflow-hidden max-[680px]:min-h-[100dvh]"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackgroundImages[activeImageIndex]})`,
          }}
        />
        {incomingImageIndex !== null ? (
          <div
            className={[
              "absolute inset-0 bg-cover bg-center transition-opacity ease-in-out",
              isCrossfading ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{
              backgroundImage: `url(${heroBackgroundImages[incomingImageIndex]})`,
              transitionDuration: `${HERO_FADE_DURATION_MS}ms`,
            }}
          />
        ) : null}
      </div>

      <div
        id="lg-name"
        className="pointer-events-none absolute bottom-[21%] left-[clamp(0.75rem,3vw,2.5rem)] z-[20] max-[1024px]:left-3 max-[1024px]:top-[140px] max-[1024px]:bottom-auto max-[1024px]:rotate-0 max-[680px]:top-[112px] max-[680px]:left-2"
      >
        {letterRows.map((row, rowIndex) => (
          <div className="flex select-none" key={`${rowIndex}-${row.join("")}`}>
            {row.map((letter, columnIndex) => {
              const globalIndex = rowIndex * row.length + columnIndex;
              const isVisible = globalIndex < revealedCount;

              return (
                <span
                  key={`${letter}-${globalIndex}`}
                  className={[
                    "font-display text-[clamp(4.1rem,10vw,10.4rem)] leading-[0.95] text-studio-text/92 [text-shadow:0_10px_28px_rgba(17,24,39,0.22)] transition-[transform,color] duration-1000 [transform:rotate3d(0,1,0,90deg)] max-[1024px]:text-[clamp(2.5rem,8vw,5.5rem)]",
                    isVisible ? "[transform:rotate3d(0,1,0,0deg)]" : "",
                    dimLetters ? "text-studio-text/55" : "",
                  ].join(" ")}
                >
                  {letter}
                </span>
              );
            })}
          </div>
        ))}
      </div>

      <div
        className={`${layoutContainer} relative z-[9] flex min-h-[min(90dvh,860px)] flex-col items-end justify-end gap-3 pb-[clamp(1.5rem,5vw,4rem)] text-right max-[860px]:items-start max-[860px]:pb-5 max-[860px]:text-left max-[680px]:min-h-[86dvh]`}
      >
        <p className="m-0 text-xs uppercase tracking-[0.13em]">
          {homeHeadline.kicker}
        </p>
        <h1
          className="m-0 text-[clamp(2rem,4vw,3.4rem)] text-studio-text"
          data-animate="tilt"
        >
          {homeHeadline.title}
        </h1>
        <p className="m-0 max-w-[520px] text-studio-muted">
          {homeHeadline.subtitle}
        </p>
        <div className="mt-2.5 flex text-studio-text flex-wrap justify-end gap-3 max-[860px]:justify-start">
          <Link to="/portfolio/" className="border border-studio-muted  px-[1.1rem] py-3 text-[0.88rem] font-medium tracking-[0.01em] transition-colors duration-300 hover:text-studio-text-dark hover:bg-studio-bg">
            Galleries
          </Link>
          {/* <Link to="/workshops/" className={outlineButton}>
            Upcoming Workshops
          </Link> */}
        </div>
      </div>
    </section>
  );
}
