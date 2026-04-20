import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiAward, FiTwitter, FiGithub, FiZap, FiFacebook } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import AnimatedCounter from '../components/AnimatedCounter'
import SEO from '../components/SEO'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
}

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Prince Mpunga',
    transKey: 'ceo',
    image: '/team/founder3.jpg',
    accent: '#00ffff',
  },
  {
    id: 2,
    name: 'Jacob Kitambala',
    transKey: 'cto',
    image: '/team/founder2.png',
    accent: '#ff6b35',
  },
  {
    id: 3,
    name: 'Joseph Tshimpanga',
    transKey: 'design',
    image: '/team/founder1.png',
    accent: '#00ffff',
  },
]

const VALUES = [
  { icon: <FiZap size={20} />, label: 'Performance First', accent: '#00f2fe' },
  { icon: <FiTarget size={20} />, label: 'Client-Centered', accent: '#ff6a00' },
  { icon: <FiAward size={20} />, label: 'Excellence Driven', accent: '#00f2fe' },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <motion.div
      className="min-h-screen bg-[#050507] text-slate-200"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title={t('seo.about.title')} 
        description={t('seo.about.description')} 
      />
      {/* Header */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <motion.div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6a0020] border border-[#ff6a0040] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('about.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              {t('about.title')}{' '}
              <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
                {t('about.titleHighlight')}
              </span>
            </h1>
            <p className="text-slate-400 mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy + Mission */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <FiTarget size={24} />,
              title: t('about.philosophy.title'),
              desc1: <>{t('about.philosophy.desc1')}<strong className="text-white">{t('about.philosophy.desc1Bold')}</strong>{t('about.philosophy.desc1Suffix')}</>,
              desc2: t('about.philosophy.desc2'),
              accent: '#00f2fe',
              delay: 0,
            },
            {
              icon: <FiAward size={24} />,
              title: t('about.mission.title'),
              desc1: t('about.mission.desc1'),
              desc2: t('about.mission.desc2'),
              accent: '#ff6a00',
              delay: 0.1,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="group relative p-10 rounded-3xl bg-[#0d0f14] border border-white/5 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: card.delay }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
              />
              {/* Corner glow */}
              <div
                className="absolute top-0 left-0 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${card.accent}15 0%, transparent 70%)` }}
              />

              <div
                className="relative w-14 h-14 flex items-center justify-center rounded-2xl mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${card.accent}15`, color: card.accent }}
              >
                {card.icon}
              </div>
              <h3 className="relative text-2xl font-heading font-bold text-white mb-6">{card.title}</h3>
              <p className="relative text-slate-300 mb-4 leading-relaxed">{card.desc1}</p>
              <p className="relative text-slate-400 leading-relaxed">{card.desc2}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values strip */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            {VALUES.map((v, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-10 py-6"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span style={{ color: v.accent }}>{v.icon}</span>
                <span className="text-sm font-display font-bold text-white">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
          <motion.div
            className="text-center mb-16"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('about.stats.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">{t('about.stats.title')}</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '10+', label: t('about.stats.stat1'), accent: '#00f2fe' },
              { num: '99%', label: t('about.stats.stat2'), accent: '#ff6a00' },
              { num: 'TLS 1.3', label: t('about.stats.stat3'), accent: '#00f2fe' },
              { num: '< 1h', label: t('about.stats.stat4'), accent: '#ffffff' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="group flex flex-col items-center justify-center p-10 rounded-3xl bg-[#0d0f14] border border-white/5 hover:border-white/10 transition-all"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${stat.accent}08 0%, transparent 70%)` }}
                />
                <h3 className="text-5xl md:text-6xl font-heading font-bold leading-none mb-3" style={{ color: stat.accent }}>
                  <AnimatedCounter value={stat.num} />
                </h3>
                <p className="text-slate-500 text-xs font-display font-bold tracking-widest uppercase text-center">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-[#0a0c10]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff6a0020] border border-[#ff6a0040] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('about.team.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{t('about.team.title')}</h2>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg leading-relaxed">{t('about.team.description')}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                className="group relative rounded-3xl overflow-hidden bg-[#0d0f14] border border-white/5 flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{ boxShadow: `inset 0 0 0 1px ${member.accent}40` }}
                />

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image} alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle bottom gradient only to blend the border seamlessly */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d0f14] to-transparent pointer-events-none" />

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 pb-6 px-6"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 0 }}
                    style={{ translateY: 0 }}
                  >
                    {[{ icon: <FaXTwitter />, link: "#" }, { icon: <FiFacebook />, link: "#" }, { icon: <FiGithub />, link: "#" }].map((social, i) => (
                      <a
                        key={i} href={social.link} title={`Visit link ${i + 1}`}
                        className="w-10 h-10 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 hover:bg-[#00f2fe] hover:text-[#050507] hover:border-[#00f2fe] transition-all duration-300"
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </motion.div>
                </div>

                {/* Info */}
                <div
                  className="p-8 border-t border-white/5 relative"
                  style={{ background: 'linear-gradient(to bottom, #111318, #0d0f14)' }}
                >
                  {/* Accent top line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-[1px] opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: member.accent }}
                  />
                  <h4 className="text-xl font-heading font-bold text-white mb-1">{member.name}</h4>
                  <p
                    className="text-xs font-display font-bold uppercase tracking-widest mb-4"
                    style={{ color: member.accent }}
                  >
                    {t(`about.team.roles.${member.transKey}`)}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(`about.team.bios.${member.transKey}`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
