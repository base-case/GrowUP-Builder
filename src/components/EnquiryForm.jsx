import { useState } from 'react'
import { projects } from '../data/projects.js'
import Icon from './Icon.jsx'

const empty = { name: '', email: '', phone: '', interest: '', message: '' }

export default function EnquiryForm({ compact = false }) {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!/^[0-9+\-\s]{8,}$/.test(form.phone)) next.phone = 'Enter a valid phone'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Demo only — no backend. Log the payload and show success.
    console.log('Enquiry submitted (demo):', form)
    setSent(true)
    setForm(empty)
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-brand-50 p-8 text-center ring-1 ring-brand-100">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-brand-900">Thank you!</h3>
        <p className="mt-2 text-sm text-ink-700/80">
          Your enquiry has been received (demo). Our team will reach out within 24 hours.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-brand-600 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  const field =
    'w-full rounded-xl border border-ink-900/10 bg-cream-50 px-4 py-3.5 text-sm text-ink-900 outline-none transition placeholder:text-ink-700/40 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className={compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}>
        <div>
          <input name="name" value={form.name} onChange={update} placeholder="Full name *" className={field} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input name="phone" value={form.phone} onChange={update} placeholder="Phone number *" className={field} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <input name="email" value={form.email} onChange={update} placeholder="Email address *" className={field} />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>
      <div>
        <select name="interest" value={form.interest} onChange={update} className={field}>
          <option value="">I'm interested in…</option>
          {projects.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name} — {p.type}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>
      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          rows={compact ? 3 : 4}
          placeholder="Your message (optional)"
          className={field}
        />
      </div>
      <button
        type="submit"
        data-hover
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-brand-800 px-6 py-4 text-sm font-semibold text-cream-50 transition hover:bg-brand-700"
      >
        Submit Enquiry
        <span className="grid h-5 w-5 place-items-center rounded-full bg-clay-500 transition-transform group-hover:rotate-45">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <p className="text-center text-xs text-ink-700/50">
        Demo form — submissions are logged to the console, not stored.
      </p>
    </form>
  )
}
