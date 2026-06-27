import { AnimatedHeading } from './motion.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className={`label mb-6 flex items-center gap-3 text-clay-600 ${center ? 'justify-center' : ''}`}>
          <span className="h-px w-10 bg-clay-500" /> {eyebrow}
        </p>
      )}
      <AnimatedHeading
        text={title}
        className={`font-display text-4xl leading-[1.08] sm:text-5xl ${light ? 'text-cream-50' : 'text-ink-900'}`}
      />
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-cream-50/70' : 'text-ink-700/80'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
