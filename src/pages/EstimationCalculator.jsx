import React, { useState, useEffect, useRef } from 'react'
import { motion, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGlobe, FiSmartphone, FiMonitor, FiBarChart2, FiLock, FiCheck, FiZap, FiActivity, FiCalendar } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function AnimatedPriceRange({ total }) {
  const { t } = useTranslation()
  const minRef = useRef(null)
  const maxRef = useRef(null)
  const prevTotal = useRef(total)

  useEffect(() => {
    const minFrom = prevTotal.current * 0.85
    const maxFrom = prevTotal.current * 1.15
    const minTo = total * 0.85
    const maxTo = total * 1.15

    const controls = animate(0, 1, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate(p) {
        if (minRef.current) minRef.current.textContent = Math.round(minFrom + (minTo - minFrom) * p).toLocaleString()
        if (maxRef.current) maxRef.current.textContent = Math.round(maxFrom + (maxTo - maxFrom) * p).toLocaleString()
      }
    })

    prevTotal.current = total
    return () => controls.stop()
  }, [total])

  const label = t('estimate.price.est')

  return (
    <div className="text-3xl md:text-5xl font-heading font-bold text-[#00f2fe] tracking-tight selection:bg-transparent">
      {label}<span ref={minRef}>{Math.round(total * 0.85).toLocaleString()}</span> — $<span ref={maxRef}>{Math.round(total * 1.15).toLocaleString()}</span>
    </div>
  )
}

export default function EstimationCalculator() {
  const { t } = useTranslation()

  const PROJECT_TYPES = [
    { id: 'web', title: t('estimate.types.web'), icon: <FiGlobe size={24} />, basePrice: 1500 },
    { id: 'mobile', title: t('estimate.types.mobile'), icon: <FiSmartphone size={24} />, basePrice: 2000 },
    { id: 'enterprise', title: t('estimate.types.enterprise'), icon: <FiMonitor size={24} />, basePrice: 3500 },
    { id: 'analytics', title: t('estimate.types.analytics'), icon: <FiBarChart2 size={24} />, basePrice: 1200 },
    { id: 'cyber', title: t('estimate.types.cyber'), icon: <FiLock size={24} />, basePrice: 800 },
  ]

  const FEATURES = [
    { id: 'auth', title: t('estimate.features.auth'), cost: 300 },
    { id: 'payment', title: t('estimate.features.payment'), cost: 500 },
    { id: 'admin', title: t('estimate.features.admin'), cost: 400 },
    { id: 'mm', title: t('estimate.features.mm'), cost: 350 },
    { id: 'sms', title: t('estimate.features.sms'), cost: 200 },
    { id: 'i18n', title: t('estimate.features.i18n'), cost: 250 },
    { id: 'api', title: t('estimate.features.api'), cost: 400 },
    { id: 'realtime', title: t('estimate.features.realtime'), cost: 450 },
    { id: 'offline', title: t('estimate.features.offline'), cost: 300 },
    { id: 'reports', title: t('estimate.features.reports'), cost: 350 }
  ]

  const TIMELINES = [
    { id: 'rush', title: t('estimate.timelines.rush'), icon: <FiZap size={20} />, multiplier: 1.4 },
    { id: 'standard', title: t('estimate.timelines.standard'), icon: <FiActivity size={20} />, multiplier: 1.0 },
    { id: 'flexible', title: t('estimate.timelines.flexible'), icon: <FiCalendar size={20} />, multiplier: 0.9 }
  ]

  const [project, setProject] = useState(PROJECT_TYPES[0])
  const [features, setFeatures] = useState(new Set())
  const [timeline, setTimeline] = useState(TIMELINES[1])

  const toggleFeature = (id) => {
    setFeatures(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const featuresTotalCost = Array.from(features).reduce((sum, id) => {
    const f = FEATURES.find(feat => feat.id === id)
    return sum + (f ? f.cost : 0)
  }, 0)

  const totalCalculated = (project.basePrice + featuresTotalCost) * timeline.multiplier

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
    })
  }

  return (
    <motion.div
      className="min-h-screen bg-[#0a0a0a] text-slate-200 pt-40 pb-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        {/* Header */}
        <motion.div className="text-center" variants={fadeUp} initial="hidden" animate="visible">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mb-4 shadow-[0_0_20px_rgba(0,242,254,0.1)] inline-block">
            {t('estimate.title')}
          </h1>
          <p className="text-slate-400 text-lg">{t('estimate.subtitle')}</p>
        </motion.div>

        {/* Step 1: Project Type */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#00f2fe15] text-[#00f2fe] flex items-center justify-center text-sm">1</span>
            {t('estimate.step1.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROJECT_TYPES.map((pt, i) => (
              <motion.button
                key={pt.id}
                onClick={() => setProject(pt)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col items-center justify-center text-center p-6 rounded-2xl border transition-all duration-300 ${project.id === pt.id
                    ? 'border-[#00ffff] bg-[#00ffff]/10 shadow-[0_0_20px_rgba(0,255,255,0.2)]'
                    : 'border-white/10 bg-[#0d0f14] hover:bg-[#00ffff]/[0.05] hover:border-white/20'
                  }`}
              >
                <div className={`mb-3 transition-colors duration-300 ${project.id === pt.id ? 'text-[#00ffff]' : 'text-slate-400'}`}>
                  {pt.icon}
                </div>
                <h3 className={`font-bold font-display text-sm tracking-wide ${project.id === pt.id ? 'text-white' : 'text-slate-300'}`}>
                  {pt.title}
                </h3>
                <span className={`text-xs mt-1 font-medium ${project.id === pt.id ? 'text-[#00ffff]' : 'text-slate-500'}`}>
                  {t('estimate.startingAt')} ${pt.basePrice.toLocaleString()}
                </span>
                {project.id === pt.id && (
                  <motion.div layoutId="pt-active" className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#00ffff] text-black flex items-center justify-center">
                    <FiCheck size={14} />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Step 2: Features */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#00f2fe15] text-[#00f2fe] flex items-center justify-center text-sm">2</span>
            {t('estimate.step2.title')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {FEATURES.map((feat, i) => {
              const isSelected = features.has(feat.id)
              return (
                <motion.button
                  key={feat.id}
                  onClick={() => toggleFeature(feat.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 ${isSelected
                      ? 'border-[#00ffff] bg-[#00ffff]/10 text-white shadow-[0_0_15px_rgba(0,255,255,0.2)]'
                      : 'border-white/10 bg-[#0a0a0a] text-slate-400 hover:bg-[#00ffff]/10 hover:text-slate-200'
                    }`}
                >
                  {feat.title} <span className="opacity-50 ml-1">+${feat.cost}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.section>

        {/* Step 3: Timeline */}
        <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
          <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#00f2fe15] text-[#00f2fe] flex items-center justify-center text-sm">3</span>
            {t('estimate.step3.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TIMELINES.map((t_item) => (
              <motion.button
                key={t_item.id}
                onClick={() => setTimeline(t_item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`p-5 rounded-2xl border text-left flex flex-col gap-1 transition-all duration-300 ${timeline.id === t_item.id
                    ? 'border-[#00ffff] bg-[#00ffff]/10 shadow-[0_0_20px_rgba(0,255,255,0.2)]'
                    : 'border-white/10 bg-[#0d0f14] hover:bg-[#00ffff]/[0.05] hover:border-white/20'
                  }`}
              >
                <span className={`font-bold font-heading text-lg flex items-center gap-3 ${timeline.id === t_item.id ? 'text-white' : 'text-slate-300'}`}>
                  <span className={`${timeline.id === t_item.id ? 'text-[#00ffff]' : 'text-slate-500'}`}>
                    {t_item.icon}
                  </span>
                  {t_item.title}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Tracker - Inline */}
        <motion.div
          className="w-full mt-4 bg-[#00ffff05] border border-[#00ffff33] rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,255,255,0.08)]"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">

            <div className="flex flex-col text-center md:text-left flex-1 w-full">
              <span className="text-[#00ffff] text-sm font-display font-bold uppercase tracking-widest mb-3 opacity-80">{t('estimate.price.title')}</span>
              <AnimatedPriceRange total={totalCalculated} />
              <span className="text-slate-500 text-xs mt-4 max-w-md">{t('estimate.price.note')}</span>
            </div>

            <Link
              to="/contact"
              state={{ prefilledSubject: project.id }}
              className="w-full md:w-auto text-center shrink-0 group px-10 py-5 rounded-2xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold text-lg shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,242,254,0.4)] transition-all flex items-center justify-center gap-2"
            >
              {t('estimate.cta')} →
            </Link>

          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}
