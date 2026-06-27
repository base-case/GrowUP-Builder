import { Link } from 'react-router-dom'
import { company } from '../data/site.js'
import Icon from './Icon.jsx'
import Magnetic from './Magnetic.jsx'
import { AnimatedHeading } from './motion.jsx'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-cream-50/70">
      {/* Big CTA strip */}
      <div className="border-b border-cream-50/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 lg:flex-row lg:items-center lg:px-8">
          <AnimatedHeading
            text="Let's build your next chapter."
            className="max-w-xl font-display text-4xl leading-[1.05] text-cream-50 sm:text-5xl"
          />
          <Magnetic>
            <Link
              to="/contact"
              data-hover
              className="group flex items-center gap-3 rounded-full bg-clay-500 px-8 py-4 font-semibold text-cream-50 transition hover:bg-clay-400"
            >
              Get in touch
              <span className="grid h-6 w-6 place-items-center rounded-full bg-cream-50 text-ink-900 transition-transform group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Magnetic>
        </div>
      </div>

      {/* Columns */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5" data-hover>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-clay-500 font-display text-lg text-cream-50">G</span>
            <span className="font-display text-2xl text-cream-50">Grow<span className="italic">UP</span></span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-50/55">
            {company.subTagline}
          </p>
          <div className="mt-6 flex gap-2">
            {[['Fb', company.social.facebook], ['Ig', company.social.instagram], ['In', company.social.linkedin]].map(
              ([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-hover
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream-50/15 text-xs font-semibold text-cream-50 transition hover:border-clay-400 hover:bg-clay-500"
                >
                  {label}
                </a>
              ),
            )}
          </div>
        </div>

        <div>
          <p className="label mb-5 text-cream-50/40">Explore</p>
          <ul className="space-y-3 text-sm">
            {[['Home', '/'], ['Projects', '/projects'], ['About Us', '/about'], ['Contact', '/contact']].map(
              ([label, to]) => (
                <li key={to}>
                  <Link to={to} data-hover className="transition hover:text-clay-300">{label}</Link>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <p className="label mb-5 text-cream-50/40">Get in touch</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 text-clay-400" />
              <a href={`tel:${company.phoneHref}`} data-hover className="hover:text-clay-300">{company.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 text-clay-400" />
              <a href={`mailto:${company.email}`} data-hover className="hover:text-clay-300">{company.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="label mb-5 text-cream-50/40">Offices</p>
          <ul className="space-y-4 text-sm">
            {company.offices.map((o) => (
              <li key={o.label}>
                <p className="font-medium text-cream-50/90">{o.label}</p>
                <p className="text-cream-50/55">{o.lines.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-50/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream-50/40 lg:flex-row lg:px-8">
          <p>© 2026 {company.name}. All rights reserved.</p>
          <p>RERA Reg. No. {company.rera}</p>
        </div>
      </div>
    </footer>
  )
}
