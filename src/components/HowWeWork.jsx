import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  FiSearch, FiPenTool, FiCode, FiShield, FiUploadCloud, FiHeadphones
} from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function PhaseCard({ phase, index }) {
  const isLeft = phase.side === 'left'

  return (
    <div className={`relative flex items-start gap-0 w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'} md:w-[calc(50%-28px)] ${isLeft ? 'md:ml-0 md:mr-auto md:pr-14' : 'md:ml-auto md:mr-0 md:pl-14'}`}>
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="group relative p-7 rounded-2xl bg-[#0d0f14] border border-white/5 hover:border-white/10 transition-all duration-300 w-full"
        style={{ boxShadow: '0 4px 40px rgba(0,0,0,0.4)' }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
      >
        {/* Top accent line on hover */}
        <div
          className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${phase.accent}, transparent)` }}
        />

        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${phase.accent}18`, color: phase.accent }}
          >
            {phase.icon}
          </div>
          <span
            className="text-xs font-display font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
            style={{ color: phase.accent, borderColor: `${phase.accent}30`, backgroundColor: `${phase.accent}0d` }}
          >
            {phase.duration}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-white transition-colors leading-snug">
          {phase.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 group-hover:text-slate-300 transition-colors">
          {phase.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {phase.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-display font-bold tracking-widest px-2.5 py-1 rounded-md"
              style={{ color: `${phase.accent}cc`, backgroundColor: `${phase.accent}12` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function HowWeWork() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)

  const PHASES = [
    {
      num: '01',
      title: t('howWeWork.phases.phase1.title'),
      icon: <FiSearch size={22} />,
      duration: t('howWeWork.phases.phase1.duration'),
      side: 'left',
      accent: '#00f2fe',
      description: t('howWeWork.phases.phase1.desc'),
      tags: t('howWeWork.phases.phase1.tags', { returnObjects: true }),
    },
    {
      num: '02',
      title: t('howWeWork.phases.phase2.title'),
      icon: <FiPenTool size={22} />,
      duration: t('howWeWork.phases.phase2.duration'),
      side: 'right',
      accent: '#ff6a00',
      description: t('howWeWork.phases.phase2.desc'),
      tags: t('howWeWork.phases.phase2.tags', { returnObjects: true }),
    },
    {
      num: '03',
      title: t('howWeWork.phases.phase3.title'),
      icon: <FiCode size={22} />,
      duration: t('howWeWork.phases.phase3.duration'),
      side: 'left',
      accent: '#00f2fe',
      description: t('howWeWork.phases.phase3.desc'),
      tags: t('howWeWork.phases.phase3.tags', { returnObjects: true }),
    },
    {
      num: '04',
      title: t('howWeWork.phases.phase4.title'),
      icon: <FiShield size={22} />,
      duration: t('howWeWork.phases.phase4.duration'),
      side: 'right',
      accent: '#ff6a00',
      description: t('howWeWork.phases.phase4.desc'),
      tags: t('howWeWork.phases.phase4.tags', { returnObjects: true }),
    },
    {
      num: '05',
      title: t('howWeWork.phases.phase5.title'),
      icon: <FiUploadCloud size={22} />,
      duration: t('howWeWork.phases.phase5.duration'),
      side: 'left',
      accent: '#00f2fe',
      description: t('howWeWork.phases.phase5.desc'),
      tags: t('howWeWork.phases.phase5.tags', { returnObjects: true }),
    },
    {
      num: '06',
      title: t('howWeWork.phases.phase6.title'),
      icon: <FiHeadphones size={22} />,
      duration: t('howWeWork.phases.phase6.duration'),
      side: 'right',
      accent: '#ff6a00',
      description: t('howWeWork.phases.phase6.desc'),
      tags: t('howWeWork.phases.phase6.tags', { returnObjects: true }),
    },
  ]

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section ref={sectionRef} className="py-28 md:py-40 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.05) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
            {t('howWeWork.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            {t('howWeWork.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('howWeWork.subtitle')}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Center vertical line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-white/[0.07] rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full"
              style={{
                height: lineHeight,
                background: 'linear-gradient(to bottom, #00f2fe, #4facfe)',
                boxShadow: '0 0 12px #00f2fe, 0 0 24px rgba(0,242,254,0.4)',
              }}
            />
          </div>

          {/* Mobile vertical line (left side) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-[2px] bg-white/[0.07] rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 rounded-full"
              style={{
                height: lineHeight,
                background: 'linear-gradient(to bottom, #00f2fe, #4facfe)',
                boxShadow: '0 0 10px #00f2fe',
              }}
            />
          </div>

          {/* Phases */}
          <div className="flex flex-col gap-16 md:gap-12">
            {PHASES.map((phase, index) => (
              <div key={phase.num} className="relative flex items-start">

                {/* Center node - desktop */}
                <motion.div
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10 border-2 font-heading font-bold text-sm shrink-0"
                  style={{
                    borderColor: phase.accent,
                    color: phase.accent,
                    backgroundColor: '#0a0a0a',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
                  whileHover={{
                    boxShadow: `0 0 20px ${phase.accent}, 0 0 40px ${phase.accent}60`,
                    transition: { duration: 0.2 }
                  }}
                >
                  {phase.num}
                </motion.div>

                {/* Mobile node */}
                <motion.div
                  className="md:hidden flex absolute left-5 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 border-2 font-heading font-bold text-xs shrink-0"
                  style={{ borderColor: phase.accent, color: phase.accent, backgroundColor: '#0a0a0a' }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  {phase.num}
                </motion.div>

                {/* Mobile card (always right of the line) */}
                <div className="md:hidden w-full pl-14">
                  <motion.div
                    className="group relative p-6 rounded-2xl bg-[#0d0f14] border border-white/5 hover:border-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${phase.accent}18`, color: phase.accent }}
                      >
                        {phase.icon}
                      </div>
                      <span
                        className="text-[10px] font-display font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                        style={{ color: phase.accent, borderColor: `${phase.accent}30`, backgroundColor: `${phase.accent}0d` }}
                      >
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-base font-heading font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {phase.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-display font-bold tracking-widest px-2 py-1 rounded-md"
                          style={{ color: `${phase.accent}cc`, backgroundColor: `${phase.accent}12` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Desktop card layout (alternating) */}
                <div className="hidden md:flex w-full">
                  <PhaseCard phase={phase} index={index} />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
