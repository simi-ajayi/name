import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const revealPresets: Record<string, gsap.TweenVars> = {
  up: { y: 92, rotateX: -8, transformPerspective: 900 },
  left: { x: -120, rotate: -2 },
  right: { x: 120, rotate: 2 },
  zoom: { y: 48, scale: 0.86 },
  tilt: { y: 64, rotateY: 14, transformPerspective: 1000 },
}

function getPreset(type: string, index: number) {
  if (type === 'up') {
    return {
      y: 88 + (index % 3) * 10,
      rotateX: index % 2 === 0 ? -8 : -4,
      transformPerspective: 900,
    }
  }

  return revealPresets[type] ?? revealPresets.up
}

export function GlobalScrollAnimations() {
  const { pathname } = useLocation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>('[data-animate]')

      elements.forEach((element, index) => {
        const animation = element.dataset.animate ?? 'up'
        const duration = Number(element.dataset.duration ?? 1.05)
        const delay = Number(element.dataset.delay ?? 0)
        const start = element.dataset.start ?? 'top 86%'
        const preset = getPreset(animation, index)

        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            filter: 'blur(10px)',
            ...preset,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            rotateX: 0,
            rotateY: 0,
            filter: 'blur(0px)',
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start,
              end: 'bottom 35%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    })

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
    }
  }, [pathname])

  return null
}
