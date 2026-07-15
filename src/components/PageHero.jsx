import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, image, crumb }) {
  return <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink-900 pt-28 text-cream-50">
    <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.25, ease: [0.16,1,.3,1] }} className="absolute inset-0"><img src={image} alt="" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-ink-900/25"/></motion.div>
    <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-9 sm:px-8 sm:pb-12"><motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="label mb-10 flex items-center gap-3 text-cream-50/65"><Link to="/" data-hover>Home</Link><span className="h-px w-6 bg-acid"/><span>{crumb || title}</span></motion.nav><div className="grid gap-8 lg:grid-cols-12"><motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .9, ease: [0.16,1,.3,1], delay:.1 }} className="font-display text-[17vw] leading-[.78] tracking-[-.075em] sm:text-8xl lg:col-span-8 lg:text-[9rem]">{title}</motion.h1>{subtitle && <motion.p initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration:.7, ease:[.16,1,.3,1], delay:.4 }} className="max-w-md self-end text-base leading-relaxed text-cream-50/75 lg:col-span-3 lg:col-start-10">{subtitle}</motion.p>}</div></div>
  </section>
}
