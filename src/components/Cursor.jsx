import { useEffect, useRef, useState } from 'react'

// Trailing custom cursor (desktop / fine-pointer only).
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }
    let raf

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.x - 3.5}px, ${pos.y - 3.5}px)`
      }
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        ring.current?.style.setProperty('width', '64px')
        ring.current?.style.setProperty('height', '64px')
        ring.current?.style.setProperty('opacity', '0.9')
      } else {
        ring.current?.style.setProperty('width', '36px')
        ring.current?.style.setProperty('height', '36px')
        ring.current?.style.setProperty('opacity', '1')
      }
    }

    const loop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      if (ring.current) {
        const r = ring.current.offsetWidth / 2
        ring.current.style.transform = `translate(${ringPos.x - r}px, ${ringPos.y - r}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
