// Lightweight inline icon set (stroke-based, currentColor).
const paths = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9 21v-6h6v6" />,
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="7" rx="1" />
      <rect x="4" y="13" width="7" height="7" rx="1" />
      <rect x="13" y="13" width="7" height="7" rx="1" />
    </>
  ),
  handshake: <path d="m6 12 3-3 3 3 3-3 3 3M3 10l4-4 5 1 5-1 4 4-5 7-4-3-4 3-5-7Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6l-7-3Z" />,
  star: <path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 17l-5.4 2.7 1.2-6.1L3.3 9.4l6.1-.8L12 3Z" />,
  tag: (
    <>
      <path d="M3 12V4h8l10 10-8 8L3 12Z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  pool: <path d="M3 18c2 0 2-1.5 4-1.5S9 18 11 18s2-1.5 4-1.5 2 1.5 4 1.5M3 14c2 0 2-1.5 4-1.5s2 1.5 4 1.5M7 13V5a2 2 0 0 1 4 0M15 13V5a2 2 0 0 1 4 0" />,
  dumbbell: <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />,
  tree: <path d="M12 21v-5M8 16a4 4 0 0 1-1-7.5A4.5 4.5 0 0 1 16 6a4 4 0 0 1 0 10H8Z" />,
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 9l5 3-5 3V9Z" />
    </>
  ),
  run: <path d="M13 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 21l3-5-2-3 1-4 3 2 2 1M9 13l-2 2M13 12l2 4" />,
  bolt: <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />,
  plug: <path d="M9 3v5M15 3v5M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v5" />,
  drop: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  hall: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />,
  phone: <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="m5 12 5 5 9-11" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  ruler: <path d="M4 16 16 4l4 4L8 20l-4-4Zm3-3 1.5 1.5M10 10l1.5 1.5M13 7l1.5 1.5" />,
  bed: <path d="M3 18v-5h18v5M3 13V8h6v5M21 18v-2M3 18v-2" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M9 3v4M15 3v4" />
    </>
  ),
  quote: <path d="M7 7H4v6h3l-1 4M17 7h-3v6h3l-1 4" />,
}

export default function Icon({ name, className = 'w-6 h-6', strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  )
}
