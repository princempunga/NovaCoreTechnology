import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronDown, FiSearch, FiX, FiInfo, FiTag, FiCpu, FiClock, FiShield } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="overflow-hidden transition-all duration-300"
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        borderLeft: isOpen ? '4px solid #00ffff' : '4px solid transparent',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left transition-all duration-200 group"
        style={{ backgroundColor: isOpen ? 'rgba(0,255,255,0.05)' : '#111111' }}
        onMouseEnter={e => { if (!isOpen) e.currentTarget.style.backgroundColor = 'rgba(0,255,255,0.03)' }}
        onMouseLeave={e => { if (!isOpen) e.currentTarget.style.backgroundColor = '#111111' }}
      >
        <span
          className="font-medium text-sm md:text-base transition-colors duration-200 pr-4"
          style={{ color: isOpen ? '#00ffff' : 'white' }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="shrink-0"
          style={{ color: isOpen ? '#00ffff' : '#6b7280' }}
        >
          <FiChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-slate-400 text-sm leading-relaxed px-6 pb-6 pt-1">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('general')
  const [openId, setOpenId] = useState(null)
  const [search, setSearch] = useState('')

  const CATEGORIES = [
    { id: 'general', label: t('faq.categories.general'), icon: <FiInfo size={18} /> },
    { id: 'pricing', label: t('faq.categories.pricing'), icon: <FiTag size={18} /> },
    { id: 'technical', label: t('faq.categories.technical'), icon: <FiCpu size={18} /> },
    { id: 'timeline', label: t('faq.categories.timeline'), icon: <FiClock size={18} /> },
    { id: 'legal', label: t('faq.categories.legal'), icon: <FiShield size={18} /> },
  ]

  const FAQS = useMemo(() => [
    // General
    { id: 1, cat: 'general', q: t('faq.questions.general.q1.q'), a: t('faq.questions.general.q1.a') },
    { id: 2, cat: 'general', q: t('faq.questions.general.q2.q'), a: t('faq.questions.general.q2.a') },
    { id: 3, cat: 'general', q: t('faq.questions.general.q3.q'), a: t('faq.questions.general.q3.a') },
    { id: 4, cat: 'general', q: t('faq.questions.general.q4.q'), a: t('faq.questions.general.q4.a') },
    { id: 5, cat: 'general', q: t('faq.questions.general.q5.q'), a: t('faq.questions.general.q5.a') },
    // Pricing
    { id: 6, cat: 'pricing', q: t('faq.questions.pricing.q1.q'), a: t('faq.questions.pricing.q1.a') },
    { id: 7, cat: 'pricing', q: t('faq.questions.pricing.q2.q'), a: t('faq.questions.pricing.q2.a') },
    { id: 8, cat: 'pricing', q: t('faq.questions.pricing.q3.q'), a: t('faq.questions.pricing.q3.a') },
    { id: 9, cat: 'pricing', q: t('faq.questions.pricing.q4.q'), a: t('faq.questions.pricing.q4.a') },
    // Technical
    { id: 10, cat: 'technical', q: t('faq.questions.technical.q1.q'), a: t('faq.questions.technical.q1.a') },
    { id: 11, cat: 'technical', q: t('faq.questions.technical.q2.q'), a: t('faq.questions.technical.q2.a') },
    { id: 12, cat: 'technical', q: t('faq.questions.technical.q3.q'), a: t('faq.questions.technical.q3.a') },
    { id: 13, cat: 'technical', q: t('faq.questions.technical.q4.q'), a: t('faq.questions.technical.q4.a') },
    { id: 14, cat: 'technical', q: t('faq.questions.technical.q5.q'), a: t('faq.questions.technical.q5.a') },
    // Timeline
    { id: 15, cat: 'timeline', q: t('faq.questions.timeline.q1.q'), a: t('faq.questions.timeline.q1.a') },
    { id: 16, cat: 'timeline', q: t('faq.questions.timeline.q2.q'), a: t('faq.questions.timeline.q2.a') },
    { id: 17, cat: 'timeline', q: t('faq.questions.timeline.q3.q'), a: t('faq.questions.timeline.q3.a') },
    { id: 18, cat: 'timeline', q: t('faq.questions.timeline.q4.q'), a: t('faq.questions.timeline.q4.a') },
    // Legal
    { id: 19, cat: 'legal', q: t('faq.questions.legal.q1.q'), a: t('faq.questions.legal.q1.a') },
    { id: 20, cat: 'legal', q: t('faq.questions.legal.q2.q'), a: t('faq.questions.legal.q2.a') },
    { id: 21, cat: 'legal', q: t('faq.questions.legal.q3.q'), a: t('faq.questions.legal.q3.a') },
  ], [t])

  const filteredFaqs = useMemo(() => {
    const inCategory = search
      ? FAQS
      : FAQS.filter(f => f.cat === activeCategory)

    if (!search) return inCategory
    const q = search.toLowerCase()
    return FAQS.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q))
  }, [activeCategory, search, FAQS])

  const handleToggle = (id) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId)
    setOpenId(null)
    setSearch('')
  }

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
            {t('faq.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            {t('faq.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        {/* Body: Sidebar + Accordion */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Sidebar — desktop sticky, mobile horizontal scroll */}
          <motion.div
            className="lg:sticky lg:top-28 lg:w-[260px] shrink-0 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Mobile: horizontal scroll */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible">
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat.id && !search
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl font-display font-semibold text-sm whitespace-nowrap shrink-0 lg:w-full transition-all duration-300"
                    style={{
                      backgroundColor: isActive ? 'rgba(0,255,255,0.12)' : '#111111',
                      border: isActive ? '1px solid rgba(0,255,255,0.4)' : '1px solid rgba(255,255,255,0.07)',
                      color: isActive ? '#00ffff' : '#94a3b8',
                      boxShadow: isActive ? '0 0 20px rgba(0,255,255,0.15)' : 'none',
                    }}
                  >
                    <span className="shrink-0">{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Search + Accordion */}
          <motion.div
            className="flex-1 w-full min-w-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Search bar */}
            <div className="relative mb-5">
              <FiSearch
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
              />
              <input
                type="text"
                value={search}
                onChange={e => { setSearch(e.target.value); setOpenId(null) }}
                placeholder={t('faq.search')}
                className="w-full bg-[#111111] border border-white/10 rounded-xl pl-11 pr-10 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all"
                style={{}}
                onFocus={e => {
                  e.target.style.borderColor = 'rgba(0,255,255,0.5)'
                  e.target.style.boxShadow = '0 0 0 3px rgba(0,242,254,0.08)'
                }}
                onBlur={e => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.target.style.boxShadow = 'none'
                }}
              />
              <AnimatePresence>
                {search && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={() => { setSearch(''); setOpenId(null) }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                  >
                    <FiX size={16} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion list */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {filteredFaqs.length === 0 ? (
                <div className="py-16 text-center" style={{ backgroundColor: '#111111' }}>
                  <p className="text-slate-500 text-sm">
                    {t('faq.noResults')}{' '}
                    <span className="text-[#00ffff]">"{search}"</span>
                  </p>
                </div>
              ) : (
                filteredFaqs.map(item => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openId === item.id}
                    onToggle={() => handleToggle(item.id)}
                  />
                ))
              )}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-slate-400 mb-5 text-base">{t('faq.cta.text')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-[#050507] transition-all hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #00f2fe, #4facfe)',
                  boxShadow: '0 0 20px rgba(0,242,254,0.3)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(0,242,254,0.55)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,242,254,0.3)'}
              >
                {t('faq.cta.button')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
