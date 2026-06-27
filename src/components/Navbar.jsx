import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-4 lg:px-6"
      >
        <nav className="mx-auto max-w-7xl">
          {/* Liquid-glass dock */}
          <div
            className={`relative flex items-center justify-between gap-3 overflow-hidden rounded-full  px-3.5 py-3 shadow-[0_10px_50px_-10px_rgba(10,36,26,0.4)] backdrop-blur-3xl backdrop-saturate-200 transition-colors duration-500 ${
              scrolled
                ? 'bg-gradient-to-br from-white/45 to-white/25'
                : 'bg-gradient-to-br from-white/30 to-white/10'
            }`}
          >
            {/* Subtle glass edges — uniform frost, no white cap */}
            <span className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <span className="pointer-events-none absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />

            {/* Logo */}
            <Link to="/" className="relative flex items-center gap-2.5 pl-1" data-hover>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-800 font-display text-lg text-cream-50">
                G
              </span>
              <span className="font-display text-xl tracking-tight text-brand-900">
                Grow<span className="italic">UP</span>
              </span>
            </Link>

            {/* Center links */}
            <div className="relative hidden items-center md:flex">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} end={l.to === '/'} data-hover>
                  {({ isActive }) => (
                    <span className="relative block rounded-full px-4 py-2 text-sm font-semibold text-ink-900">
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-brand-800 shadow-sm"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className={`relative transition-colors ${isActive ? 'text-cream-50' : ''}`}>
                        {l.label}
                      </span>
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              data-hover
              className="group relative hidden items-center gap-2 rounded-full bg-brand-800 py-2.5 pl-5 pr-2.5 text-sm font-semibold text-cream-50 transition hover:bg-brand-700 md:flex"
            >
              Enquire
              <span className="grid h-6 w-6 place-items-center rounded-full bg-clay-500 transition-transform group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative grid h-10 w-10 place-items-center rounded-full bg-brand-800 text-cream-50 md:hidden"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-950 md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className="block border-b border-white/10 py-5 font-display text-4xl text-cream-50"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-clay-500 px-8 py-4 text-base font-semibold text-cream-50"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
