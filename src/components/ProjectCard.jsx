import { Link } from 'react-router-dom'

const statusDot = {
  Ongoing: 'bg-brand-300',
  Upcoming: 'bg-clay-400',
  Completed: 'bg-cream-200',
}

export default function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      data-hover
      className="group relative block overflow-hidden rounded-[1.75rem] bg-ink-900"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="h-full w-full scale-105 object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-ink-900/10" />
      </div>

      {/* Top meta */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
        <span className="flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-cream-50 backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status] || 'bg-cream-50'}`} />
          {project.status}
        </span>
        {index != null && (
          <span className="font-display text-sm text-cream-50/50">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="label text-clay-300">{project.type}</p>
        <h3 className="mt-2 font-display text-2xl text-cream-50">{project.name}</h3>
        <p className="mt-1 text-sm text-cream-50/70">{project.city}</p>

        <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-wide text-cream-50/50">Starting from</p>
            <p className="font-display text-lg text-clay-300">{project.priceFrom}</p>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-cream-50 text-ink-900 transition-transform duration-300 group-hover:rotate-45">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
