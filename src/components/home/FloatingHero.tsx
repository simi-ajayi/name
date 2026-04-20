import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { floatingObjects, homeHeadline } from '../../data/content'
import { layoutContainer, outlineButton } from '../../styles/tw'

type FloatState = {
  startX: number
  width: number
}

const letterRows = [
  ['K', 'A', 'S', 'H'],
  ['F', 'A', 'J', 'E'],
]

const allLetters = letterRows.flat()
const FLOAT_SPEED_PX_PER_SECOND = 28

export function FloatingHero() {
  const [revealedCount, setRevealedCount] = useState(0)
  const [hideBg, setHideBg] = useState(false)
  const [showObjects, setShowObjects] = useState(false)
  const [dimLetters, setDimLetters] = useState(false)
  const [hideObjectsOnScroll, setHideObjectsOnScroll] = useState(false)

  const objectRefs = useRef<Array<HTMLDivElement | null>>([])

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
        setHideBg(true)
        setDimLetters(true)
      }, 2500),
    )

    timeouts.push(
      window.setTimeout(() => {
        setShowObjects(true)
      }, 3000),
    )

    return () => {
      timeouts.forEach((timeout) => window.clearTimeout(timeout))
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setHideObjectsOnScroll(window.scrollY > 200)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!showObjects) {
      return
    }

    const elements = objectRefs.current.filter(
      (element): element is HTMLDivElement => element !== null,
    )

    if (!elements.length) {
      return
    }

    let floatState: FloatState[] = []
    let loopWidth = 1
    let travelledDistance = 0
    let resizeFrame = 0

    let animationFrame = 0
    let previousTime = performance.now()

    const layoutLoop = () => {
      const gap = Math.max(20, Math.min(52, window.innerWidth * 0.028))
      let runningX = 0

      floatState = elements.map((element) => {
        const width = element.offsetWidth
        const state = { startX: runningX, width }
        runningX += width + gap
        return state
      })

      loopWidth = Math.max(runningX, window.innerWidth + gap)
      travelledDistance %= loopWidth
    }

    const updatePositions = () => {
      elements.forEach((element, index) => {
        const state = floatState[index]
        let x = state.startX - travelledDistance

        while (x + state.width < 0) {
          x += loopWidth
        }

        element.style.transform = `translate3d(${x}px, 0, 0)`
      })
    }

    const onResize = () => {
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(() => {
        layoutLoop()
        updatePositions()
      })
    }

    layoutLoop()
    updatePositions()

    const step = (time: number) => {
      const dtSeconds = (time - previousTime) / 1000
      previousTime = time

      travelledDistance += FLOAT_SPEED_PX_PER_SECOND * dtSeconds
      if (travelledDistance > loopWidth) {
        travelledDistance %= loopWidth
      }

      updatePositions()

      animationFrame = window.requestAnimationFrame(step)
    }

    window.addEventListener('resize', onResize, { passive: true })
    animationFrame = window.requestAnimationFrame(step)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.cancelAnimationFrame(resizeFrame)
      window.removeEventListener('resize', onResize)
    }
  }, [showObjects])

  return (
    <section
      id="floating-objects-hero"
      className="relative isolate min-h-[min(90dvh,860px)] overflow-hidden border-b border-white/10 max-[680px]:min-h-[86dvh]"
    >
      <div
        className={[
          "absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-1000",
          hideBg ? "opacity-0" : "opacity-100",
        ].join(" ")}
        style={{
          backgroundImage:
            "url(https://images.pixieset.com/506818211/bd4dbcc9f72608be2ed8de4c59d3703b-large.JPG)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(4,8,23,0.15)_10%,rgba(4,8,23,0.88)_76%)]" />

      <div id="floating-objects" className="absolute inset-0">
        {floatingObjects.map((object, index) => (
          <div
            key={`${object.src}-${index}`}
            ref={(element) => {
              objectRefs.current[index] = element
            }}
            className={[
              'absolute left-0 z-[4] will-change-transform',
              object.className,
              showObjects ? 'block' : 'hidden',
            ].join(" ")}
            style={{
              top: object.top,
            }}
          >
            <div
              className={[
                'group overflow-hidden bg-black transition-[opacity,transform] duration-[900ms] ease-out [box-shadow:1px_1px_0_rgba(20,20,20,1),2px_2px_0_rgba(20,20,20,1),3px_3px_0_rgba(20,20,20,1),4px_4px_0_rgba(20,20,20,1),5px_5px_0_rgba(20,20,20,1),6px_6px_0_rgba(20,20,20,1),7px_7px_0_rgba(20,20,20,1),8px_8px_0_rgba(20,20,20,1)]',
                hideObjectsOnScroll ? '-translate-y-2.5 opacity-0' : 'translate-y-0 opacity-100',
              ].join(' ')}
            >
              <img
                src={object.src}
                alt={object.alt}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
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
                    "font-display text-[clamp(4.1rem,10vw,10.4rem)] leading-[0.95] text-white/92 [text-shadow:0_10px_28px_rgba(0,0,0,0.46)] transition-[transform,color] duration-1000 [transform:rotate3d(0,1,0,90deg)] max-[1024px]:text-[clamp(2.5rem,8vw,5.5rem)]",
                    isVisible ? "[transform:rotate3d(0,1,0,0deg)]" : "",
                    dimLetters ? "text-white/55" : "",
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
          className="m-0 text-[clamp(2rem,4vw,3.4rem)] text-white"
          data-animate="tilt"
        >
          {homeHeadline.title}
        </h1>
        <p className="m-0 max-w-[520px] text-studio-muted">
          {homeHeadline.subtitle}
        </p>
        <div className="mt-2.5 flex flex-wrap justify-end gap-3 max-[860px]:justify-start">
          <Link to="/portfolio/" className={outlineButton}>
            Galleries
          </Link>
          <Link to="/workshops/" className={outlineButton}>
            Upcoming Workshops
          </Link>
        </div>
      </div>
    </section>
  );
}
