import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AnimatedHeading } from './motion.jsx'

export default function PageHero({ title, subtitle, image, crumb }) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-28">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/55 to-ink-900/30" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="label mb-6 flex items-center gap-3 text-cream-50/70"
        >
          <Link to="/" className="transition hover:text-clay-300" data-hover>Home</Link>
          <span className="h-px w-6 bg-clay-400" />
          <span className="text-cream-50">{crumb || title}</span>
        </motion.nav>
        <AnimatedHeading
          text={title}
          className="font-display text-5xl leading-[1.02] text-cream-50 sm:text-6xl lg:text-7xl"
          delay={0.2}
        />
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 max-w-2xl text-lg text-cream-50/80"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
