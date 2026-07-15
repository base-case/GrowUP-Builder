import { motion } from 'framer-motion'

export default function LoadingScreen({ ready }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={ready ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-ink-900 px-5 py-6 text-cream-50 sm:px-8 sm:py-8"
    >
      <div className="flex items-center justify-between label text-cream-50/60"><span>GrowUP / Estates</span><span>Ahmedabad, IN</span></div>
      <div>
        <div className="overflow-hidden"><motion.p initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: .8, ease: [0.16,1,.3,1] }} className="font-display text-[17vw] leading-[.75] tracking-[-.08em] sm:text-[12vw]">Grow<span className="italic text-acid">UP</span></motion.p></div>
        <div className="mt-8 h-px w-full overflow-hidden bg-cream-50/20"><motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 1.2, ease: [0.16,1,.3,1], delay: .25 }} className="h-full bg-acid" /></div>
      </div>
      <p className="label text-right text-cream-50/60">Building a life in full</p>
    </motion.div>
  )
}
