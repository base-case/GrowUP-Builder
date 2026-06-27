import { Link } from 'react-router-dom'
import { company, stats, team, milestones } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Counter from '../components/Counter.jsx'
import Parallax from '../components/Parallax.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { Reveal, Stagger, StaggerItem, AnimatedHeading } from '../components/motion.jsx'
import Icon from '../components/Icon.jsx'

export default function About() {
  return (
    <>
      <PageHero
        title="About GrowUP"
        crumb="About"
        subtitle="Nearly two decades of building homes, landmarks and lasting trust."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Story */}
      <section className="bg-cream-100 py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Parallax
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
                alt="GrowUP leadership"
                rounded="rounded-[2rem]"
                className="aspect-[4/5]"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label mb-6 flex items-center gap-3 text-clay-600">
                <span className="h-px w-10 bg-clay-500" /> Our story
              </p>
            </Reveal>
            <AnimatedHeading
              text="Founded on a simple belief — people deserve better spaces."
              className="font-display text-4xl leading-[1.1] text-ink-900 sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-7 text-lg leading-relaxed text-ink-700/80">
                What began in 2008 with a single residential tower in Ahmedabad has grown into one of Gujarat's most trusted development houses. Across 42+ projects we have stayed loyal to one idea: that great real estate should help people's lives grow up — not just give them four walls.
              </p>
              <p className="mt-4 text-ink-700/75">
                Today {company.name} spans residential, commercial, plotted and joint-venture developments, but our promise has never changed — honest pricing, uncompromising quality and possession on time, every time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-brand-950 py-20 text-cream-50">
        <Stagger className="mx-auto grid max-w-7xl grid-cols-2 gap-y-12 px-5 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="font-display text-5xl text-clay-400 lg:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm text-cream-50/70">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-cream-100 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { t: 'Our Mission', d: 'To create thoughtfully-designed spaces that enhance everyday life, delivered with absolute transparency and on-time precision.', icon: 'home' },
              { t: 'Our Vision', d: 'To be the most trusted name in real estate across western India — known for integrity, quality and customer delight.', icon: 'star' },
              { t: 'Our Values', d: 'Honesty, craftsmanship, sustainability and a relentless customer-first mindset guide every decision we make.', icon: 'shield' },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="h-full rounded-[1.75rem] border border-ink-900/5 bg-cream-50 p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-brand-800 text-clay-300">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-ink-900">{c.t}</h3>
                  <p className="mt-3 leading-relaxed text-ink-700/80">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream-50 py-24 lg:py-36">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading center eyebrow="Our journey" title="Milestones along the way" />
          <div className="mt-16 space-y-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-brand-800 font-display text-sm text-clay-300">
                      {m.year}
                    </span>
                    {i < milestones.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-brand-200" />}
                  </div>
                  <p className="pb-2 pt-4 text-lg text-ink-700/85">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream-100 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center eyebrow="Leadership" title="The people behind GrowUP" />
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                    <img src={m.img} alt={m.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink-900">{m.name}</h3>
                  <p className="text-sm font-medium text-clay-600">{m.role}</p>
                  <p className="mt-2 text-sm text-ink-700/70">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-950 py-20 text-cream-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:text-left lg:px-8">
          <AnimatedHeading
            text="Let's build your next chapter together."
            className="max-w-xl font-display text-4xl leading-[1.05] sm:text-5xl"
          />
          <div className="flex flex-shrink-0 flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                to="/projects"
                data-hover
                className="group inline-flex items-center gap-2 rounded-full bg-clay-500 py-3 pl-7 pr-3 text-sm font-semibold text-cream-50 transition hover:bg-clay-400"
              >
                View Projects
                <span className="grid h-7 w-7 place-items-center rounded-full bg-cream-50 text-ink-900 transition-transform group-hover:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/contact"
                data-hover
                className="inline-flex items-center rounded-full border border-cream-50/30 px-7 py-3.5 text-sm font-semibold text-cream-50 transition hover:border-cream-50/60 hover:bg-cream-50/10"
              >
                Contact Us
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </>
  )
}
