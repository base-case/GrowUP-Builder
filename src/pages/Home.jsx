import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { company, stats, categories, whyUs, amenities } from '../data/site.js'
import { projects } from '../data/projects.js'
import { Reveal, Stagger, StaggerItem, AnimatedHeading } from '../components/motion.jsx'
import Icon from '../components/Icon.jsx'
import Counter from '../components/Counter.jsx'
import Marquee from '../components/Marquee.jsx'
import Magnetic from '../components/Magnetic.jsx'
import Parallax from '../components/Parallax.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import TestimonialsCarousel from '../components/TestimonialsCarousel.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'

const easeExpo = [0.16, 1, 0.3, 1]

function HeroTitle() {
  const lines = [
    [{ t: 'Where', i: false }, { t: 'your', i: false }, { t: 'life', i: false }],
    [{ t: 'grows', i: true }, { t: 'up.', i: false }],
  ]
  let k = 0
  return (
    <h1 className="font-display text-[12.5vw] leading-[0.95] text-cream-50 [text-shadow:0_2px_30px_rgba(0,0,0,0.5)] sm:text-[11vw] lg:text-[8.5rem] lg:leading-[0.92]">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map((w) => {
            const delay = 0.5 + k++ * 0.09
            return (
              <span key={w.t} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
                <motion.span
                  className={`inline-block ${w.i ? 'italic text-clay-400' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: easeExpo, delay }}
                >
                  {w.t}&nbsp;
                </motion.span>
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const featured = projects.slice(0, 4)

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section ref={heroRef} className="relative h-[100svh] overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
            alt="GrowUP residences"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/65 via-ink-900/45 to-ink-900/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/35 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroFade }} className="relative flex h-full flex-col justify-end pb-20 pt-28 sm:pb-28 sm:pt-32">
          <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-clay-400" />
              <span className="label text-cream-50/80">RERA Certified · Established 2008</span>
            </motion.div>

            <HeroTitle />

            <div className="mt-7 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="max-w-md text-lg leading-relaxed text-cream-50/95 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)]"
              >
                Premium homes and landmark commercial spaces, crafted across Gujarat for every stage of your life.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <Magnetic>
                  <Link
                    to="/projects"
                    data-hover
                    className="group flex items-center gap-3 rounded-full bg-cream-50 px-7 py-4 text-sm font-semibold text-ink-900"
                  >
                    Explore Projects
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-500 text-cream-50 transition-transform group-hover:rotate-45">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </Magnetic>
                <Link
                  to="/contact"
                  data-hover
                  className="rounded-full border border-cream-50/30 px-7 py-4 text-sm font-semibold text-cream-50 backdrop-blur transition hover:bg-cream-50/10"
                >
                  Book a Visit
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-10 w-6 items-start justify-center rounded-full border border-cream-50/40 p-1.5"
          >
            <span className="h-2 w-1 rounded-full bg-cream-50/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* ───────────── MARQUEE ───────────── */}
      <section className="border-y border-ink-900/10 bg-cream-50 py-5">
        <Marquee
          items={['Residential', 'Commercial', 'Plotted Schemes', 'Joint Ventures', 'Luxury Villas', 'Smart Offices']}
          className="font-display text-2xl text-ink-900/80 sm:text-3xl"
          duration={32}
        />
      </section>

      {/* ───────────── INTRO ───────────── */}
      <section className="bg-cream-100 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="label mb-8 flex items-center gap-3 text-clay-600">
                  <span className="h-px w-10 bg-clay-500" /> Who we are
                </p>
              </Reveal>
              <AnimatedHeading
                text="We don't just build properties — we build the backdrop to people's lives."
                className="max-w-3xl font-display text-4xl leading-[1.1] text-ink-900 sm:text-5xl lg:text-[3.4rem]"
              />
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-700/80">
                  For nearly two decades, {company.name} has shaped skylines and communities across Gujarat — blending thoughtful design, honest pricing and on-time delivery into every home we hand over.
                </p>
                <Magnetic className="mt-10 inline-block">
                  <Link to="/about" data-hover className="group flex items-center gap-3 text-sm font-semibold text-ink-900">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-ink-900/20 transition group-hover:bg-brand-800 group-hover:text-cream-50">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                    Our story
                  </Link>
                </Magnetic>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <Parallax
                  src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=1000&q=80"
                  alt="GrowUP craftsmanship"
                  rounded="rounded-[2rem]"
                  className="aspect-[4/5]"
                />
              </Reveal>
            </div>
          </div>

          {/* Stats row */}
          <Stagger className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-ink-900/10 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label} className="bg-cream-100 p-8">
                <p className="font-display text-5xl text-brand-700 lg:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm text-ink-700/70">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ───────────── CATEGORIES (BENTO) ───────────── */}
      <section className="bg-brand-950 py-24 text-cream-50 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="label mb-6 flex items-center gap-3 text-clay-400">
                  <span className="h-px w-10 bg-clay-400" /> What we build
                </p>
              </Reveal>
              <AnimatedHeading
                text="A portfolio for every ambition"
                className="max-w-xl font-display text-4xl leading-[1.05] sm:text-5xl"
              />
            </div>
            <Reveal>
              <p className="max-w-xs text-cream-50/60">
                Four verticals, one promise — spaces engineered to grow your life and your wealth.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {categories.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 0.08}
                className={i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <div
                  data-hover
                  className={`group relative h-full overflow-hidden rounded-[1.75rem] ${
                    i === 0 ? 'min-h-[20rem] lg:min-h-full' : 'min-h-[16rem]'
                  }`}
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-cream-50/10 text-cream-50 backdrop-blur transition group-hover:bg-clay-500">
                        <Icon name={c.icon} className="h-6 w-6" />
                      </span>
                      <span className="label text-cream-50/60">{c.count}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-cream-50 lg:text-3xl">{c.title}</h3>
                      <p className="mt-2 max-w-sm text-sm text-cream-50/0 transition-colors duration-500 group-hover:text-cream-50/75">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── FEATURED (HORIZONTAL RAIL) ───────────── */}
      <section className="bg-cream-100 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="label mb-6 flex items-center gap-3 text-clay-600">
                  <span className="h-px w-10 bg-clay-500" /> Featured
                </p>
              </Reveal>
              <AnimatedHeading
                text="Signature developments"
                className="font-display text-4xl leading-[1.05] text-ink-900 sm:text-5xl"
              />
            </div>
            <Magnetic>
              <Link
                to="/projects"
                data-hover
                className="group flex items-center gap-3 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-900 hover:text-cream-50"
              >
                All projects
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
          </div>
          {/* Offset editorial grid */}
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.slice(0, 3).map((p, i) => (
              <StaggerItem key={p.slug} className={i === 1 ? 'lg:mt-12' : i === 2 ? 'lg:mt-24' : ''}>
                <ProjectCard project={p} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ───────────── WHY US (STICKY SPLIT) ───────────── */}
      <section className="bg-cream-50 py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="label mb-6 flex items-center gap-3 text-clay-600">
                  <span className="h-px w-10 bg-clay-500" /> The GrowUP promise
                </p>
              </Reveal>
              <AnimatedHeading
                text="Reasons families trust us"
                className="font-display text-4xl leading-[1.05] text-ink-900 sm:text-5xl"
              />
              <Reveal delay={0.2}>
                <p className="mt-6 text-ink-700/80">
                  Every decision we make is measured against one question — does it serve the people who will live and work here?
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-ink-900/10 sm:grid-cols-2">
              {whyUs.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.08}>
                  <div className="group h-full bg-cream-50 p-8 transition-colors hover:bg-brand-800">
                    <div className="flex items-center justify-between">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-700 transition group-hover:bg-clay-500 group-hover:text-cream-50">
                        <Icon name={w.icon} className="h-7 w-7" />
                      </span>
                      <span className="font-display text-3xl text-ink-900/10 transition group-hover:text-cream-50/20">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl text-ink-900 transition group-hover:text-cream-50">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700/75 transition group-hover:text-cream-50/75">
                      {w.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── AMENITIES MARQUEE ───────────── */}
      <section className="overflow-hidden bg-brand-800 py-16 text-cream-50">
        <div className="mx-auto mb-10 max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="label flex items-center gap-3 text-clay-400">
              <span className="h-px w-10 bg-clay-400" /> Lifestyle &amp; Amenities
            </p>
          </Reveal>
        </div>
        <Marquee
          items={amenities.map((a) => a.name)}
          className="font-display text-3xl text-cream-50/90 sm:text-4xl"
          duration={40}
          separator="✦"
        />
      </section>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section className="bg-cream-100 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <p className="label mb-6 flex items-center justify-center gap-3 text-center text-clay-600">
              <span className="h-px w-10 bg-clay-500" /> Testimonials
            </p>
          </Reveal>
          <AnimatedHeading
            text="Loved by the families who live here"
            className="mx-auto max-w-3xl text-center font-display text-4xl leading-[1.1] text-ink-900 sm:text-5xl"
          />
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ───────────── CTA + ENQUIRY ───────────── */}
      <section className="relative overflow-hidden bg-brand-950 py-24 text-cream-50 lg:py-32">
        <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 select-none font-display text-[18rem] leading-none text-cream-50/[0.03]">
          GrowUP
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Reveal>
              <p className="label mb-6 flex items-center gap-3 text-clay-400">
                <span className="h-px w-10 bg-clay-400" /> Let's talk
              </p>
            </Reveal>
            <AnimatedHeading
              text="Ready to find where your life grows up?"
              className="font-display text-4xl leading-[1.05] sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-cream-50/70">
                Share a few details and our team will help you find the perfect GrowUP address — or arrange a site visit at your convenience.
              </p>
              <div className="mt-8 space-y-4">
                <a href={`tel:${company.phoneHref}`} data-hover className="flex items-center gap-4 text-cream-50/90 transition hover:text-clay-300">
                  <Icon name="phone" className="h-5 w-5 text-clay-400" /> {company.phone}
                </a>
                <a href={`mailto:${company.email}`} data-hover className="flex items-center gap-4 text-cream-50/90 transition hover:text-clay-300">
                  <Icon name="mail" className="h-5 w-5 text-clay-400" /> {company.email}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="rounded-[2rem] bg-cream-50 p-7 text-ink-900 shadow-2xl sm:p-9">
              <h3 className="font-display text-2xl">Quick Enquiry</h3>
              <p className="mt-1 text-sm text-ink-700/70">We'll respond within 24 hours.</p>
              <div className="mt-6">
                <EnquiryForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
