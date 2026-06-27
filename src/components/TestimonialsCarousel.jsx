import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/site.js'
import Icon from './Icon.jsx'

const easeExpo = [0.16, 1, 0.3, 1]
const AUTOPLAY_MS = 6000

export default function TestimonialsCarousel() {
  const [[index, dir], setState] = useState([0, 0])
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(true)
  const count = testimonials.length
  const active = testimonials[index]

  const paginate = (d) => setState(([i]) => [(i + d + count) % count, d])
  const goTo = (i) => setState(([cur]) => [i, i > cur ? 1 : -1])

  // Pause autoplay while off-screen.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Auto-advance.
  useEffect(() => {
    if (paused || !inView) return
    const id = setInterval(() => paginate(1), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, inView, count])

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <div
      ref={sectionRef}
      className="mx-auto mt-16 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-ink-900/5 bg-cream-50 px-7 py-12 sm:px-14 sm:py-16">
        {/* Big watermark quote */}
        <span className="pointer-events-none absolute -top-6 left-6 select-none font-display text-[10rem] leading-none text-clay-500/10">
          "
        </span>

        <AnimatePresence mode="wait" custom={dir}>
          <motion.figure
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: easeExpo }}
            className="relative text-center"
          >
            <blockquote className="font-display text-2xl leading-relaxed text-ink-900/90 sm:text-[1.75rem]">
              "{active.quote}"
            </blockquote>
            <figcaption className="mt-8 flex flex-col items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-800 font-display text-xl text-cream-50">
                {active.name[0]}
              </span>
              <div>
                <p className="font-semibold text-ink-900">{active.name}</p>
                <p className="text-sm text-clay-600">{active.project}</p>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {/* Autoplay progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-1 bg-ink-900/5">
          <motion.div
            key={`${index}-${paused || !inView}`}
            className="h-full bg-clay-500"
            initial={{ width: '0%' }}
            animate={{ width: paused || !inView ? '0%' : '100%' }}
            transition={{ duration: paused || !inView ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={() => paginate(-1)}
          data-hover
          aria-label="Previous testimonial"
          className="grid h-12 w-12 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition hover:border-brand-800 hover:bg-brand-800 hover:text-cream-50"
        >
          <Icon name="arrow" className="h-5 w-5 rotate-180" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              data-hover
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-clay-500' : 'w-2 bg-ink-900/20 hover:bg-ink-900/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          data-hover
          aria-label="Next testimonial"
          className="grid h-12 w-12 place-items-center rounded-full border border-ink-900/15 text-ink-900 transition hover:border-brand-800 hover:bg-brand-800 hover:text-cream-50"
        >
          <Icon name="arrow" className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
