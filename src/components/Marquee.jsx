// Infinite horizontal marquee. Renders the children twice for a seamless loop.
export default function Marquee({ items, className = '', duration = 28, separator = '✦' }) {
  const Row = () => (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="mx-8 whitespace-nowrap">{item}</span>
          <span className="text-clay-500/70">{separator}</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className={`marquee-paused overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee" style={{ '--marquee-duration': `${duration}s` }}>
        <Row />
        <Row />
      </div>
    </div>
  )
}
