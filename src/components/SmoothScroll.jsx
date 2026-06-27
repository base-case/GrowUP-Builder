import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

let lenisInstance = null

// Buttery smooth scrolling via Lenis, RAF-driven.
export default function SmoothScroll({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisInstance = lenis

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  // Jump to top instantly on route change.
  useEffect(() => {
    lenisInstance?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}
