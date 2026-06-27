import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProject, projects } from '../data/projects.js'
import { amenities } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { Reveal } from '../components/motion.jsx'
import NotFound from './NotFound.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [active, setActive] = useState(0)

  if (!project) return <NotFound />

  const similar = projects.filter((p) => p.slug !== project.slug && p.type === project.type).slice(0, 3)
  const facts = [
    { label: 'Configuration', value: project.config, icon: 'bed' },
    { label: 'Carpet Area', value: project.area, icon: 'ruler' },
    { label: 'Starting Price', value: project.priceFrom, icon: 'tag' },
    { label: 'Possession', value: project.possession, icon: 'calendar' },
  ]

  return (
    <>
      {/* Gallery hero */}
      <section className="pt-20">
        <div className="relative h-[64vh] overflow-hidden bg-ink-900">
          <motion.img
            key={active}
            src={project.gallery[active]}
            alt={project.name}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-ink-900/30" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
              <nav className="label mb-4 flex items-center gap-3 text-cream-50/70">
                <Link to="/" className="hover:text-clay-300" data-hover>Home</Link>
                <span className="h-px w-5 bg-clay-400" />
                <Link to="/projects" className="hover:text-clay-300" data-hover>Projects</Link>
                <span className="h-px w-5 bg-clay-400" />
                <span className="text-cream-50">{project.name}</span>
              </nav>
              <div className="flex gap-2">
                <span className="rounded-full bg-clay-500 px-3 py-1 text-xs font-semibold text-cream-50">{project.status}</span>
                <span className="rounded-full bg-cream-50/15 px-3 py-1 text-xs font-medium text-cream-50 backdrop-blur">{project.type}</span>
              </div>
              <h1 className="mt-4 font-display text-5xl text-cream-50 sm:text-6xl">{project.name}</h1>
              <p className="mt-2 flex items-center gap-1.5 text-cream-50/80">
                <Icon name="pin" className="h-4 w-4 text-clay-400" /> {project.city}
              </p>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="no-scrollbar -mt-4 flex gap-3 overflow-x-auto pb-2">
            {project.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                data-hover
                className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl ring-2 transition ${
                  active === i ? 'ring-clay-500' : 'opacity-60 ring-transparent hover:opacity-100'
                }`}
              >
                <img src={g} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-cream-100 py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] bg-ink-900/10 px-0 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-cream-50 p-6">
              <Icon name={f.icon} className="h-6 w-6 text-clay-500" />
              <p className="label mt-4 text-ink-700/50">{f.label}</p>
              <p className="mt-1 font-display text-xl text-ink-900">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main */}
      <section className="bg-cream-100 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-3 lg:px-8">
          <div className="space-y-14 lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-3xl text-ink-900">Overview</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700/85">{project.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 rounded-xl bg-cream-50 px-4 py-3 text-sm text-ink-700">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-700">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {h}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-ink-900">Plans &amp; Pricing</h2>
              <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-brand-800 text-cream-50">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Type</th>
                      <th className="px-6 py-4 font-semibold">Area</th>
                      <th className="px-6 py-4 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ink-900/5">
                    {project.plans.map((p) => (
                      <tr key={p.name} className="bg-cream-50">
                        <td className="px-6 py-4 font-medium text-ink-900">{p.name}</td>
                        <td className="px-6 py-4 text-ink-700/80">{p.area}</td>
                        <td className="px-6 py-4 font-semibold text-brand-700">{p.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-ink-700/50">*Prices are indicative and exclusive of taxes &amp; charges. Demo data.</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-ink-900">Amenities</h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {amenities.slice(0, 9).map((a) => (
                  <div key={a.name} className="flex items-center gap-3 rounded-xl bg-cream-50 px-4 py-3.5">
                    <Icon name={a.icon} className="h-5 w-5 text-brand-600" />
                    <span className="text-sm text-ink-700">{a.name}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-ink-900">Location</h2>
              <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-ink-900/10">
                <iframe
                  title="map"
                  className="h-80 w-full"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`}
                />
              </div>
            </Reveal>
          </div>

          {/* Sticky enquiry */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-[1.75rem] bg-cream-50 p-7 shadow-xl shadow-ink-900/5 ring-1 ring-ink-900/5">
              <p className="label text-ink-700/50">Starting from</p>
              <p className="font-display text-4xl text-brand-700">{project.priceFrom}</p>
              <p className="mt-1 text-xs text-ink-700/50">RERA: {project.rera}</p>
              <hr className="my-6 border-ink-900/10" />
              <h3 className="font-display text-xl text-ink-900">Enquire about this project</h3>
              <div className="mt-5">
                <EnquiryForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar */}
      {similar.length > 0 && (
        <section className="bg-cream-50 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <h2 className="font-display text-3xl text-ink-900">Similar projects</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <ProjectCard project={p} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
