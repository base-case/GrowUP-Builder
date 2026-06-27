import { Link } from 'react-router-dom'
import Magnetic from '../components/Magnetic.jsx'

export default function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-brand-950 px-5 pt-20 text-cream-50">
      <div className="text-center">
        <p className="font-display text-[28vw] leading-none text-clay-400 sm:text-[12rem]">404</p>
        <h1 className="mt-2 font-display text-3xl text-cream-50">Page not found</h1>
        <p className="mt-3 text-cream-50/60">The page you're looking for doesn't exist or has moved.</p>
        <Magnetic className="mt-8 inline-block">
          <Link
            to="/"
            data-hover
            className="inline-block rounded-full bg-clay-500 px-8 py-4 text-sm font-semibold text-cream-50 transition hover:bg-clay-400"
          >
            Back to Home
          </Link>
        </Magnetic>
      </div>
    </section>
  )
}
