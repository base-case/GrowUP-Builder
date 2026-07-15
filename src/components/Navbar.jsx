import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const links = [{ to: '/', label: 'Home', number: '01' }, { to: '/projects', label: 'Projects', number: '02' }, { to: '/about', label: 'About Us', number: '03' }, { to: '/contact', label: 'Contact', number: '04' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  return <>
    <header className="site-header fixed inset-x-0 top-0 z-[90] px-5 py-5 text-cream-50 sm:px-8">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2" aria-label="GrowUP home"><span className="font-display text-3xl leading-none tracking-[-.08em]">Grow<span className="italic text-acid">UP</span></span><span className="label hidden text-[.55rem] text-cream-50/70 sm:inline">Estates</span></Link>
        <button onClick={() => setOpen(true)} className="flex items-center gap-3 rounded-full border border-cream-50/30 bg-ink-900/25 px-4 py-2 text-cream-50 shadow-[0_8px_26px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-300 hover:border-cream-50/60 hover:bg-ink-900/45" aria-expanded={open} aria-controls="site-menu"><span className="label">Menu</span><span className="relative block h-5 w-6"><i className="absolute left-0 top-[7px] block h-px w-full bg-current"/><i className="absolute left-0 top-[13px] block h-px w-full bg-current"/></span></button>
      </nav>
    </header>
    <AnimatePresence>{open && <motion.aside id="site-menu" role="dialog" aria-modal="true" aria-label="Site navigation" initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }} animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 3rem)' }} exit={{ clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }} transition={{ duration: .72, ease: [0.76,0,.24,1] }} className="fixed inset-0 z-[100] flex bg-acid p-5 pt-24 text-ink-900 sm:p-8 sm:pt-28 lg:left-auto lg:w-[32vw] lg:min-w-[440px]"><button onClick={() => setOpen(false)} className="absolute right-5 top-5 flex items-center gap-3 sm:right-8 sm:top-8" aria-label="Close menu"><span className="label">Close</span><span className="relative block h-6 w-6"><i className="absolute left-0 top-[12px] block h-px w-full rotate-45 bg-current"/><i className="absolute left-0 top-[12px] block h-px w-full -rotate-45 bg-current"/></span></button><div className="flex w-full flex-col"><div className="label flex items-center justify-between border-b border-ink-900/20 pb-5"><span>Navigation</span><span>GrowUP / 2026</span></div><div className="mt-8">{links.map((link, i) => <motion.div key={link.to} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .14 + i * .055 }}><NavLink to={link.to} end={link.to === '/'} className={({isActive}) => `flex items-end justify-between border-b border-ink-900/20 py-3 font-display text-5xl leading-none tracking-[-.055em] ${isActive ? 'italic' : ''}`}><span>{link.label}</span><span className="mb-1 label text-xs">{link.number}</span></NavLink></motion.div>)}</div><div className="mt-auto border-t border-ink-900/20 pt-5"><p className="label">Private enquiries</p><a href="tel:+919876543210" className="mt-3 block font-display text-3xl tracking-[-.04em]">+91 98765 43210</a><Link to="/contact" className="mt-8 flex items-center justify-between label">Begin a conversation <span className="text-xl">↗</span></Link></div></div></motion.aside>}</AnimatePresence>
  </>
}
