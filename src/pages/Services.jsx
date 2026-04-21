import React from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiDatabase, FiLock, FiArrowRight, FiCheck, FiBarChart2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TechStack from '../components/TechStack'
import FAQ from '../components/FAQ'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
}

const SERVICES_FULL = [
  {
    id: 'enterprise-web',
    transKey: 'web',
    icon: <FiMonitor size={32} />,
    accent: '#00f2fe',
    glow: 'rgba(0,242,254,0.12)',
    tags: ['REACT', 'NEXT.JS', 'NODE.JS', 'POSTGRESQL'],
    clientType: 'Startups & Corporate Enterprises'
  },
  {
    id: 'school-systems',
    transKey: 'school',
    icon: <FiDatabase size={32} />,
    accent: '#ff6a00',
    glow: 'rgba(255,106,0,0.12)',
    tags: ['LARAVEL', 'MYSQL', 'REST API', 'SMS GATEWAY'],
    clientType: 'Schools, Universities & Training Institutes'
  },
  {
    id: 'mobile-dev',
    transKey: 'mobile',
    icon: <FiSmartphone size={32} />,
    accent: '#00f2fe',
    glow: 'rgba(0,242,254,0.12)',
    tags: ['FLUTTER', 'REACT NATIVE', 'KOTLIN', 'SWIFT'],
    clientType: 'Businesses Targeting Mobile-First Users'
  },
  {
    id: 'cybersecurity',
    transKey: 'cyber',
    icon: <FiLock size={32} />,
    accent: '#ff6a00',
    glow: 'rgba(255,106,0,0.12)',
    tags: ['OAUTH2', 'AES-256', 'ZERO TRUST', 'PENETRATION TESTING'],
    clientType: 'Fintech, Healthcare & Government Institutions'
  },
  {
    id: 'data-analytics',
    transKey: 'data',
    icon: <FiBarChart2 size={32} />,
    accent: '#00f2fe',
    glow: 'rgba(0,242,254,0.12)',
    tags: ['REACT', 'PYTHON', 'GRAPHQL', 'AWS'],
    clientType: 'Executives, Finance Teams & Operations Managers'
  }
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <motion.div
      className="min-h-screen bg-[#050507] text-slate-200"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title={t('seo.services.title')} 
        description={t('seo.services.description')} 
      />
      {/* Header */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <motion.div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6a0020] border border-[#ff6a0040] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('services.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              {t('services.title')}
            </h1>
            <p className="text-slate-400 mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 flex flex-col gap-8">
          {SERVICES_FULL.map((srv, idx) => (
            <motion.div
              key={srv.id}
              id={`service-0${idx + 1}`}
              className={`group relative rounded-3xl overflow-hidden bg-[#0d0f14] ${idx === 0 ? 'border border-[#00f2fe60] shadow-[0_0_30px_rgba(0,242,254,0.1)]' : 'border border-white/5'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              {/* Animated top border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${srv.accent}, transparent)` }}
              />
              {/* Corner glow */}
              <div
                className="absolute top-0 left-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${srv.glow} 0%, transparent 70%)` }}
              />

              {idx === 0 && (
                <div className="absolute top-6 right-6 border border-[#00f2fe40] bg-[#00f2fe15] text-[#00f2fe] px-3 py-1 rounded-full text-[0.65rem] font-display font-bold tracking-widest uppercase hidden md:flex items-center shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                  Core Service
                </div>
              )}

              <div className="relative p-10 md:p-14">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-10 pb-10 border-b border-white/5">
                  <motion.div
                    className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${srv.accent}15`, color: srv.accent }}
                  >
                    {srv.icon}
                  </motion.div>
                  <div>
                    <div
                      className="text-xs font-display font-bold uppercase tracking-widest mb-1"
                      style={{ color: srv.accent }}
                    >
                      {t(`services.service0${idx + 1}.tagline`)}
                    </div>
                    <div className="text-[10px] font-display font-bold text-slate-500 uppercase tracking-widest mb-3">
                      {t(`services.service0${idx + 1}.for`)}
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white">
                      {t(`services.service0${idx + 1}.title`)}
                    </h2>
                  </div>
                  <span
                    className="hidden sm:flex ml-auto text-xs font-display font-bold uppercase tracking-widest items-center gap-2 px-4 py-2 rounded-full border opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ borderColor: `${srv.accent}40`, color: srv.accent }}
                  >
                    {t(`services.service0${idx + 1}.number`)}
                  </span>
                </div>

                {/* Details grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-display font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-slate-600 inline-block" />
                      {t(`services.service0${idx + 1}.challenge.title`)}
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-sm">{t(`services.service0${idx + 1}.challenge.text`)}</p>
                  </div>

                  {/* Architecture */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-display font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-4 h-[1px] bg-slate-600 inline-block" />
                      {t(`services.service0${idx + 1}.architecture.title`)}
                    </h4>
                    <p className="text-slate-400 leading-relaxed text-sm">{t(`services.service0${idx + 1}.architecture.text`)}</p>
                  </div>

                  {/* Outcome */}
                  <div
                    className="flex flex-col gap-3 p-6 rounded-2xl border"
                    style={{ backgroundColor: `${srv.accent}08`, borderColor: `${srv.accent}20` }}
                  >
                    <h4 className="text-xs font-display font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: srv.accent }}>
                      <FiCheck size={14} />
                      {t(`services.service0${idx + 1}.outcome.title`)}
                    </h4>
                    <p className="text-slate-300 leading-relaxed text-sm italic">
                      "{t(`services.service0${idx + 1}.outcome.text`)}"
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {srv.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[0.65rem] font-display font-bold text-slate-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* TECH STACK */}
      <TechStack />

      {/* CTA */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
          <motion.div
            className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden text-center"
            style={{ background: 'linear-gradient(135deg, #0d0f14 0%, #111318 50%, #0d0f14 100%)' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div className="absolute inset-0 border border-white/5 rounded-[3rem]" />
            <motion.div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.15) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.15) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{t('services.cta.title')}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-2">{t('services.cta.subtitle')}</p>
              <p className="text-white max-w-2xl mx-auto text-lg font-medium mb-12">{t('services.cta.body')}</p>
              <Link to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,242,254,0.3)] transition-all"
              >
                {t('services.cta.button')}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
