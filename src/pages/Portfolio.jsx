import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import SEO from '../components/SEO'

export default function Portfolio() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('All')

  const CATEGORIES = [
    { key: 'all', label: t('portfolio.filters.all') },
    { key: 'web', label: t('portfolio.filters.web') },
    { key: 'enterprise', label: t('portfolio.filters.enterprise') },
    { key: 'mobile', label: t('portfolio.filters.mobile') },
    { key: 'architecture', label: t('portfolio.filters.architecture') },
  ]

  const PORTFOLIO_ITEMS = [
    {
      id: 1,
      transKey: 'item1',
      category: 'Web Application',
      categoryKey: 'web',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop',
      accent: '#00f2fe',
      year: '2024',
    },
    {
      id: 2,
      transKey: 'item2',
      category: 'Enterprise Software',
      categoryKey: 'enterprise',
      tags: ['Vue', 'Python', 'GraphQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      accent: '#ff6a00',
      year: '2024',
    },
    {
      id: 3,
      transKey: 'item3',
      category: 'Mobile App',
      categoryKey: 'mobile',
      tags: ['React Native', 'Firebase', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
      accent: '#00f2fe',
      year: '2023',
    },
    {
      id: 4,
      transKey: 'item4',
      category: 'System Architecture',
      categoryKey: 'architecture',
      tags: ['Next.js', 'Go', 'MongoDB', 'Docker'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      accent: '#ff6a00',
      year: '2023',
    },
    // Adding few more items with generic translations if specific ones aren't in JSON yet
    {
      id: 5,
      transKey: 'item1', // fallback
      category: 'Web Application',
      categoryKey: 'web',
      tags: ['React', 'Express', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop',
      accent: '#00f2fe',
      year: '2023',
    },
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }
    })
  }

  const filtered = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.categoryKey === activeFilter.toLowerCase())

  return (
    <motion.div
      className="min-h-screen bg-[#050507] text-slate-200"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title={t('seo.portfolio.title')} 
        description={t('seo.portfolio.description')} 
      />
      {/* Header */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <motion.div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 9, repeat: Infinity }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('portfolio.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">{t('portfolio.title')}</h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key === 'all' ? 'All' : cat.key)}
                className={`relative px-5 py-2 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 ${(activeFilter === 'All' && cat.key === 'all') || (activeFilter.toLowerCase() === cat.key)
                    ? 'text-[#050507] bg-[#00f2fe] shadow-[0_0_20px_rgba(0,242,254,0.4)]'
                    : 'text-slate-400 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:text-white'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-32 px-6 md:px-24">
        <div className="max-w-[1280px] mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative flex flex-col rounded-3xl bg-[#0d0f14cc] border border-white/5 overflow-hidden shadow-2xl"
                >
                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${item.accent}30` }}
                  />

                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image} alt={t(`portfolio.projects.${item.transKey}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f1460] to-transparent" />

                    {/* Category + Year badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-[0.6rem] font-display font-bold uppercase tracking-widest"
                        style={{ backgroundColor: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}40` }}
                      >
                        {t(`portfolio.filters.${item.categoryKey}`)}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#050507] text-slate-400 text-[0.6rem] font-display font-bold border border-white/10">
                        {item.year}
                      </span>
                    </div>

                    {/* Actions overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      {[
                        { icon: <FiExternalLink size={20} />, hoverColor: item.accent },
                        { icon: <FiGithub size={20} />, hoverColor: '#ffffff' },
                      ].map((btn, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          className="w-12 h-12 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center text-white transition-all duration-300"
                          whileHover={{ scale: 1.15, backgroundColor: btn.hoverColor, color: '#050507' }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {btn.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col gap-4 flex-grow">
                    <h3
                      className="text-2xl font-heading font-bold text-white group-hover:transition-colors duration-300"
                    >
                      {t(`portfolio.projects.${item.transKey}.title`)}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{t(`portfolio.projects.${item.transKey}.desc`)}</p>

                    {/* Tags */}
                    <div className="mt-auto pt-5 flex flex-wrap gap-2 border-t border-white/5">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-wider group-hover:border-white/10 group-hover:text-slate-300 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View project link */}
                    <motion.div
                      className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: item.accent }}
                    >
                      {t(`portfolio.projects.${item.transKey}.caseStudy`)} <FiArrowRight size={13} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
