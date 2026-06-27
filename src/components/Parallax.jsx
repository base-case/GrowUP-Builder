import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Subtle vertical parallax for images as they pass through the viewport.
export default function Parallax({ src, alt = '', className = '', amount = 60, rounded = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount])

  return (
    <div ref={ref} className={`relative overflow-hidden ${rounded} ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.18 }}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
