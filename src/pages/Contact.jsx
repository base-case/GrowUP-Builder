import { company } from '../data/site.js'
import PageHero from '../components/PageHero.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import Icon from '../components/Icon.jsx'
import { Reveal, AnimatedHeading } from '../components/motion.jsx'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact Us"
        crumb="Contact"
        subtitle="We'd love to help you find your next home or investment. Reach out — we respond within 24 hours."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="bg-cream-100 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-5 lg:px-8">
          {/* Info */}
          <div className="lg:col-span-2">
            <Reveal>
              <p className="label mb-6 flex items-center gap-3 text-clay-600">
                <span className="h-px w-10 bg-clay-500" /> Get in touch
              </p>
            </Reveal>
            <AnimatedHeading
              text="Talk to the GrowUP team"
              className="font-display text-4xl leading-[1.05] text-ink-900 sm:text-5xl"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg text-ink-700/80">
                Whether you're booking a site visit, exploring an investment or partnering on a joint venture — we're here to help.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              <Reveal>
                <a href={`tel:${company.phoneHref}`} data-hover className="flex items-center gap-4 rounded-2xl bg-cream-50 p-5 ring-1 ring-ink-900/5 transition hover:ring-brand-400">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-800 text-clay-300">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="label text-ink-700/50">Call us</p>
                    <p className="font-semibold text-ink-900">{company.phone}</p>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={0.08}>
                <a href={`mailto:${company.email}`} data-hover className="flex items-center gap-4 rounded-2xl bg-cream-50 p-5 ring-1 ring-ink-900/5 transition hover:ring-brand-400">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-800 text-clay-300">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="label text-ink-700/50">Email us</p>
                    <p className="font-semibold text-ink-900">{company.email}</p>
                  </div>
                </a>
              </Reveal>
              {company.offices.map((o, i) => (
                <Reveal key={o.label} delay={0.12 + i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl bg-cream-50 p-5 ring-1 ring-ink-900/5">
                    <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-brand-800 text-clay-300">
                      <Icon name="pin" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="label text-ink-700/50">{o.label}</p>
                      <p className="font-medium text-ink-700">{o.lines.join(', ')}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] bg-cream-50 p-7 shadow-xl shadow-ink-900/5 ring-1 ring-ink-900/5 sm:p-10">
                <h3 className="font-display text-3xl text-ink-900">Send us a message</h3>
                <p className="mt-2 text-ink-700/70">Fill in the form and we'll be in touch shortly.</p>
                <div className="mt-7">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream-100 pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-ink-900/10">
            <iframe
              title="GrowUP corporate office"
              className="h-96 w-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=SG%20Highway%2C%20Ahmedabad%2C%20Gujarat&output=embed"
            />
          </div>
        </div>
      </section>
    </>
  )
}
