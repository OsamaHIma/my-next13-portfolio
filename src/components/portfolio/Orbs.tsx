import { motion } from 'motion/react'

export default function Orbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Gold orb – top right */}
      <motion.div
        className="absolute -top-32 -right-32 size-96 rounded-full opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #C8973A 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Teal orb – bottom left */}
      <motion.div
        className="absolute -bottom-32 -left-32 size-96 rounded-full opacity-10 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #4FB8B2 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>
  )
}
