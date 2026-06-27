import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectStatuses, projectTypes } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import PageHero from '../components/PageHero.jsx'

export default function Projects() {
  const [status, setStatus] = useState('All')
  const [type, setType] = useState('All')

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (status === 'All' || p.status === status) &&
          (type === 'All' || p.type === type),
      ),
    [status, type],
  )

  const pill = (active) =>
    `rounded-full px-5 py-2.5 text-sm font-medium transition ${
      active
        ? 'bg-brand-800 text-cream-50'
        : 'bg-cream-50 text-ink-700 ring-1 ring-ink-900/10 hover:ring-brand-400'
    }`

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Explore GrowUP's residential, commercial and plotted developments across the city."
        image="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col gap-6 border-b border-ink-900/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
              <div>
                <p className="label mb-3 text-ink-700/50">Status</p>
                <div className="flex flex-wrap gap-2">
                  {projectStatuses.map((s) => (
                    <button key={s} onClick={() => setStatus(s)} data-hover className={pill(status === s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="label mb-3 text-ink-700/50">Type</p>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((t) => (
                    <button key={t} onClick={() => setType(t)} data-hover className={pill(type === t)}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-display text-2xl text-ink-900/80">
              {String(filtered.length).padStart(2, '0')}
              <span className="text-base text-ink-700/50"> {filtered.length === 1 ? 'project' : 'projects'}</span>
            </p>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                  >
                    <ProjectCard project={p} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="mt-12 rounded-[2rem] border border-ink-900/10 bg-cream-50 p-16 text-center">
              <p className="font-display text-2xl text-ink-900">No projects match these filters.</p>
              <button
                onClick={() => {
                  setStatus('All')
                  setType('All')
                }}
                data-hover
                className="mt-5 rounded-full bg-brand-800 px-6 py-3 text-sm font-semibold text-cream-50"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
