import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FiArrowLeft, FiCheckCircle, FiCpu, FiTarget, FiZap, FiLayout } from 'react-icons/fi'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const study = t(`portfolio.caseStudies.${slug}`, { returnObjects: true })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!study || typeof study === 'string') {
    return (
      <div className="min-h-screen bg-[#050507] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Case Study Not Found</h1>
          <Link to="/portfolio" className="text-[#00f2fe] hover:underline flex items-center gap-2 justify-center">
            <FiArrowLeft /> Back to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  const icons = [<FiTarget />, <FiCpu />, <FiZap />, <FiLayout />]

  return (
    <motion.div 
      className="min-h-screen bg-[#050507] text-slate-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SEO 
        title={`${study.title}`} 
        description={study.description} 
      />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ 
            background: 'radial-gradient(circle at 50% 20%, rgba(0,242,254,0.15) 0%, transparent 70%)' 
          }}
        />
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#00f2fe] transition-colors mb-8 text-sm font-display font-bold uppercase tracking-widest">
              <FiArrowLeft /> {t('nav.portfolio')}
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-[#00f2fe10] border border-[#00f2fe20] text-[#00f2fe] text-[0.65rem] font-display font-bold uppercase tracking-widest mb-6">
                  {study.category} • {study.year}
                </div>
                <h1 className="text-5xl md:text-8xl font-heading font-bold text-white mb-8 leading-[0.9] tracking-tight">
                  {study.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl">
                  {study.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── METRICS BAR ── */}
      <section className="py-12 border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {study.impact && study.impact.map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="flex flex-col"
              >
                <span className="text-4xl md:text-6xl font-heading font-bold text-white mb-2">{stat.value}</span>
                <span className="text-xs font-display font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHALLENGE & SOLUTION ── */}
      <section className="py-32 px-6 md:px-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-24">
          {/* Challenge */}
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                <FiTarget size={24} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-white">{study.challenge.title}</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {study.challenge.content}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div 
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500">
                <FiCpu size={24} />
              </div>
              <h2 className="text-3xl font-heading font-bold text-white">{study.solution.title}</h2>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">
              {study.solution.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5 px-6 md:px-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">Core Functionalities</h2>
            <div className="w-20 h-1 bg-[#00f2fe] mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {study.features && study.features.map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
                className="p-8 rounded-3xl bg-[#0d0f14cc] border border-white/5 flex flex-col gap-6 group hover:border-[#00f2fe30] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#00f2fe] transition-colors">
                  {icons[i % icons.length]}
                </div>
                <p className="font-heading font-bold text-white text-lg leading-tight">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-40 px-6 md:px-24 text-center overflow-hidden relative">
        <motion.div 
          className="max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-10">
            Have a project <br /> 
            <span className="text-[#00f2fe]">in mind?</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#00f2fe] text-[#050507] font-display font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all"
          >
            {t('nav.startProject')} <FiArrowLeft className="rotate-180" />
          </Link>
        </motion.div>
      </section>
    </motion.div>
  )
}
