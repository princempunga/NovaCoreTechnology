import React from 'react'
import { motion } from 'framer-motion'
import { FiMonitor, FiSmartphone, FiDatabase, FiLock, FiCheck, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const SERVICES_FULL = [
  {
    id: "enterprise-web",
    transKey: "web",
    icon: <FiMonitor size={36} />,
    color: 'text-[#00f2fe]',
    bg: 'bg-[#00f2fe1a]',
    border: 'border-[#00f2fe33]'
  },
  {
    id: "school-systems",
    transKey: "school",
    icon: <FiDatabase size={36} />,
    color: 'text-[#ff6a00]',
    bg: 'bg-[#ff6a001a]',
    border: 'border-[#ff6a0033]'
  },
  {
    id: "mobile-dev",
    transKey: "mobile",
    icon: <FiSmartphone size={36} />,
    color: 'text-[#00f2fe]',
    bg: 'bg-[#00f2fe1a]',
    border: 'border-[#00f2fe33]'
  },
  {
    id: "cybersecurity",
    transKey: "cyber",
    icon: <FiLock size={36} />,
    color: 'text-[#ff6a00]',
    bg: 'bg-[#ff6a001a]',
    border: 'border-[#ff6a0033]'
  }
]

export default function Services() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className="min-h-screen bg-[#050507] text-slate-200"
      initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={staggerContainer}
    >
      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_#00f2fe1a_0%,_transparent_60%)] rounded-full blur-[60px] pointer-events-none z-0"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6a001a] border border-[#ff6a0033] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('services.headerLabel')}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {t('services.headerTitle')}
            </h1>
            <p className="text-slate-400 mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
              {t('services.headerDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
          <div className="flex flex-col gap-12">
            {SERVICES_FULL.map((srv) => (
              <motion.div 
                key={srv.id}
                className="p-10 md:p-16 rounded-[3rem] bg-[#0d0f14cc] backdrop-blur-3xl border border-white/5 hover:border-white/10 transition-all shadow-xl group"
                initial="hidden" whileInView="visible" viewport={{ once:true, margin: "-100px" }}
                variants={fadeUpVariant}
              >
                {/* Service Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 border-b border-white/5 pb-12">
                  <div className={`w-20 h-20 shrink-0 flex items-center justify-center rounded-2xl bg-white/[0.02] border border-white/5 ${srv.color} group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all`}>
                    {srv.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-heading font-bold text-white mb-2">{t(`services.items.${srv.transKey}.title`)}</h2>
                    <p className={`${srv.color} font-display font-bold tracking-[0.2em] uppercase text-xs`}>
                      {t(`services.items.${srv.transKey}.tagline`)}
                    </p>
                  </div>
                </div>

                {/* Service Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      {t(`services.items.${srv.transKey}.challengeLabel`)}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">{t(`services.items.${srv.transKey}.challengeDesc`)}</p>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      {t(`services.items.${srv.transKey}.archLabel`)}
                    </h4>
                    <p className="text-slate-400 leading-relaxed">{t(`services.items.${srv.transKey}.archDesc`)}</p>
                  </div>

                  <div className="flex flex-col gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                    <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${srv.color.replace('text', 'bg')}`}></span>
                      {t(`services.items.${srv.transKey}.outcomeLabel`)}
                    </h4>
                    <p className="text-slate-300 leading-relaxed italic">"{t(`services.items.${srv.transKey}.outcomeDesc`)}"</p>
                    <div className={`mt-2 ${srv.color}`}>
                      <FiCheck size={28} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
           <div className="relative p-12 md:p-24 rounded-[3.5rem] bg-gradient-to-br from-[#0d0f14] via-[#050507] to-[#0d0f14] border border-white/5 text-center overflow-hidden">
             {/* Glow spheres */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-[#00f2fe0a] blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff6a000a] blur-[100px]"></div>
             
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 relative z-10">{t('services.ctaTitle')}</h2>
             <p className="text-slate-400 mx-auto max-w-2xl text-lg mb-12 relative z-10">
               {t('services.ctaDesc')}
             </p>
             <div className="relative z-10">
               <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/30 transition-all">
                 {t('services.ctaBtn')} <FiArrowRight />
               </Link>
             </div>
           </div>
        </div>
      </section>
    </motion.div>
  )
}
