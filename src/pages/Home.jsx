import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCode, FiLayout, FiDatabase, FiShield, FiCheckCircle, FiZap } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaVuejs, FaSwift } from 'react-icons/fa'
import { SiPostgresql, SiGraphql, SiGo, SiFlutter, SiTailwindcss } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import AnimatedCounter from '../components/AnimatedCounter'
import HowWeWork from '../components/HowWeWork'
import Testimonials from '../components/Testimonials'
import TechStack from '../components/TechStack'
import SEO from '../components/SEO'

const TECH_STACK = [
  { name: 'React', icon: <FaReact size={22} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={22} color="#339933" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={22} color="#4169E1" /> },
  { name: 'AWS', icon: <FaAws size={22} color="#FF9900" /> },
  { name: 'Docker', icon: <FaDocker size={22} color="#2496ED" /> },
  { name: 'GraphQL', icon: <SiGraphql size={22} color="#E10098" /> },
  { name: 'Python', icon: <FaPython size={22} color="#3776AB" /> },
  { name: 'Go', icon: <SiGo size={22} color="#00ADD8" /> },
  { name: 'Vue.js', icon: <FaVuejs size={22} color="#4FC08D" /> },
  { name: 'Flutter', icon: <SiFlutter size={22} color="#02569B" /> },
  { name: 'Swift', icon: <FaSwift size={22} color="#F05138" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={22} color="#06B6D4" /> },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
}

const FEATURE_CARDS = [
  { icon: <FiCode size={28} />, titleKey: 'services.service01.title', descKey: 'services.service01.challenge.text', accent: '#00f2fe', glow: 'rgba(0,242,254,0.15)' },
  { icon: <FiLayout size={28} />, titleKey: 'services.service03.title', descKey: 'services.service03.challenge.text', accent: '#ff6a00', glow: 'rgba(255,106,0,0.15)' },
  { icon: <FiDatabase size={28} />, titleKey: 'services.service05.title', descKey: 'services.service05.challenge.text', accent: '#00f2fe', glow: 'rgba(0,242,254,0.15)' },
  { icon: <FiShield size={28} />, titleKey: 'services.service04.title', descKey: 'services.service04.challenge.text', accent: '#ff6a00', glow: 'rgba(255,106,0,0.15)' },
]

const PROCESS_STEPS = [
  { num: '01', titleKey: 'howWeWork.phases.phase01.title', descKey: 'howWeWork.phases.phase01.description', accent: '#00f2fe' },
  { num: '02', titleKey: 'howWeWork.phases.phase03.title', descKey: 'howWeWork.phases.phase03.description', accent: '#ff6a00' },
  { num: '03', titleKey: 'howWeWork.phases.phase05.title', descKey: 'howWeWork.phases.phase05.description', accent: '#00f2fe' },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -120])
  const { t } = useTranslation()

  return (
    <motion.div
      className="min-h-screen bg-[#050507] text-slate-200 overflow-x-hidden selection:bg-[#00f2fe] selection:text-[#050507]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SEO 
        title={t('seo.home.title')} 
        description={t('seo.home.description')} 
      />
      {/* ── HERO ── */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 md:py-40 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Dark overlay to keep text readable */}
        <div className="absolute inset-0 pointer-events-none bg-[#050507]/70" />
        {/* Gradient fade at the bottom so it blends into the rest of the page */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none bg-gradient-to-t from-[#050507] to-transparent" />

        {/* Animated accent orbs on top of image */}
        <motion.div
          className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />

        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-white leading-[1.05] tracking-tight mb-8"
            >
              {t('hero.title1')}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent bg-[length:200%] animate-[shimmer_3s_linear_infinite]">
                  {t('hero.title2')}
                </span>
              </span>{' '}
              {t('hero.title3')} {t('hero.title4')}
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link to="/contact"
                className="group relative flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,242,254,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">{t('hero.cta2')} <FiArrowRight className="group-hover:translate-x-1 transition-transform" /></span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </Link>
              <Link to="/portfolio"
                className="flex justify-center items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-display font-bold hover:bg-white/5 hover:border-white/20 transition-all"
              >
                {t('hero.cta1')}
              </Link>
            </motion.div>

            {/* Stats bar */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col sm:flex-row items-stretch gap-px rounded-2xl overflow-hidden border border-white/5"
            >
              {[
                { val: '10+', label: t('techStack.stats.projects'), color: '#ff6a00' },
                { val: '99%', label: t('techStack.stats.uptime'), color: '#00f2fe' },
                { val: '24/7', label: t('contact.info.supportLabel'), color: '#ffffff' },
              ].map((s, i) => (
                <div key={i} className="flex-1 flex flex-col items-center py-6 bg-[#0d0f14] border-r border-white/5 last:border-r-0 hover:bg-[#161922] transition-colors">
                  <span className="text-3xl font-heading font-bold leading-none mb-2" style={{ color: s.color }}>
                    <AnimatedCounter value={s.val} />
                  </span>
                  <span className="text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-widest text-center px-2">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Abstract Data Nexus Panel */}
          <motion.div
            className="hidden lg:block relative w-full aspect-square max-w-[500px] ml-auto"
            style={{ y: yParallax, willChange: "transform" }}
            initial={{ scale: 0.85, opacity: 0, rotate: -3 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Outer rings & glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,242,254,0.1)_0%,_transparent_70%)] -z-10 rounded-[3rem]" />

            <div className="absolute inset-4 rounded-[3rem] border border-white/5 bg-[#0d0f14] overflow-hidden shadow-2xl flex items-center justify-center p-8">

              {/* Spinning background rings */}
              <motion.div className="absolute w-[120%] h-[120%] border-[1px] border-dashed border-white/5 rounded-full"
                animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div className="absolute w-[80%] h-[80%] border-[2px] border-dotted border-[#00f2fe]/20 rounded-full"
                animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              <div className="relative w-full h-full flex items-center justify-center">
                {/* Central Core */}
                <motion.div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#00f2fe] to-[#4facfe] shadow-[0_0_40px_rgba(0,242,254,0.6)] flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#050507] flex items-center justify-center">
                    <motion.div className="w-6 h-6 rounded-full bg-[#00f2fe]"
                      animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Satellite Nodes */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-full flex justify-center items-start"
                    initial={{ rotate: i * 120 }}
                    animate={{ rotate: i * 120 + 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-[#111318] flex items-center justify-center shadow-lg -translate-y-8">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: i % 2 === 0 ? '#ff6a00' : '#00f2fe' }} />
                    </div>
                    {/* Connection line to center */}
                    <div className="absolute top-8 left-1/2 w-[1px] h-[calc(50%-2rem)] bg-gradient-to-b from-white/10 to-transparent origin-top" />
                  </motion.div>
                ))}
              </div>

              {/* Status overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-[0.6rem] font-display font-bold text-slate-500 uppercase tracking-widest mb-1">Architecture</p>
                  <p className="text-sm font-heading font-medium text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
                    Optimal Performance
                  </p>
                </div>
                {/* Mini animated chart */}
                <div className="flex items-end gap-1 h-8 opacity-60">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i} className="w-1.5 bg-[#00f2fe] rounded-t-sm"
                      animate={{ height: ['40%', '100%', '40%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-2 -right-2 px-3 py-2 rounded-xl bg-[#00f2fe] text-[#050507] text-xs font-display font-bold shadow-lg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              ✓ Production Ready
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-2 px-3 py-2 rounded-xl bg-[#ff6a00] text-white text-xs font-display font-bold shadow-lg"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              ✓ Secure by Design
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <section className="py-16 border-y border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 mb-10 text-center">
          <p className="font-display text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">{t('techStack.badge')}</p>
        </div>
        <div className="relative flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content', willChange: 'transform' }}
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-[#0d0f14] border border-white/5 text-slate-300 font-display font-semibold whitespace-nowrap hover:-translate-y-1 hover:border-[#00f2fe33] hover:text-white hover:shadow-[0_8px_20px_rgba(0,242,254,0.1)] transition-all cursor-pointer">
                {tech.icon} <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURE CARDS ── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24">
          <motion.div
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('services.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{t('services.title')}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURE_CARDS.map((card, i) => (
              <motion.div
                key={i}
                custom={i * 0.1}
                variants={fadeUp}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative p-10 rounded-3xl bg-[#0d0f14] border border-white/5 overflow-hidden cursor-pointer will-change-transform"
                style={{ '--accent': card.accent, '--glow': card.glow }}
              >
                {/* Hover gradient fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${card.glow} 0%, transparent 60%)` }}
                />
                {/* Top border accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)` }}
                />

                <div
                  className="relative w-16 h-16 flex items-center justify-center rounded-2xl mb-8 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${card.accent}15`, color: card.accent, boxShadow: `0 0 0 0 ${card.glow}` }}
                >
                  <motion.div
                    className="group-hover:rotate-12 transition-transform duration-300"
                  >
                    {card.icon}
                  </motion.div>
                </div>

                <h3 className="relative text-2xl font-heading font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {t(card.titleKey)}
                </h3>
                <p className="relative text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {t(card.descKey)}
                </p>

                <div
                  className="relative mt-8 flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: card.accent }}
                >
                  Learn More <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <HowWeWork />

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── TECH STACK ── */}
      <TechStack />

      {/* ── PROCESS / METHODOLOGY ── */}
      <section className="py-24 md:py-32 bg-[#0a0c10] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
        />
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-8">
                {t('howWeWork.badge')}
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{t('howWeWork.title')}</h2>
              <p className="text-lg text-slate-400 mb-12">{t('howWeWork.subtitle')}</p>

              <div className="flex flex-col gap-0">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div
                    key={i}
                    className="relative flex gap-6 pb-10 last:pb-0 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Timeline line */}
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="absolute left-[1.6rem] top-14 bottom-0 w-[1px] bg-gradient-to-b from-white/10 to-transparent" />
                    )}
                    {/* Step number bubble */}
                    <div
                      className="shrink-0 w-[3.2rem] h-[3.2rem] rounded-full flex items-center justify-center font-heading font-bold text-sm border-2 transition-all duration-300 group-hover:scale-110"
                      style={{ borderColor: step.accent, color: step.accent, background: `${step.accent}10` }}
                    >
                      {step.num}
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-[#00f2fe] transition-colors">{t(step.titleKey)}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{t(step.descKey)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-[2.5rem] overflow-hidden aspect-square p-[1.5px]"
              style={{ background: 'linear-gradient(135deg, rgba(0,242,254,0.3), rgba(255,106,0,0.3))' }}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
                alt="Software Engineering"
                className="w-full h-full object-cover rounded-[calc(2.5rem-1.5px)]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#050507]/20 to-[#050507]/40 pointer-events-none rounded-[calc(2.5rem-1.5px)]" />
              {/* Floating stat chip */}
              <motion.div
                className="absolute bottom-8 right-8 px-5 py-3 rounded-2xl bg-[#0d0f14] border border-white/10 flex items-center gap-3"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FiCheckCircle size={18} color="#00f2fe" />
                <div>
                  <p className="text-white font-heading font-bold text-sm">Production Ready</p>
                  <p className="text-slate-400 text-xs">Secure by Design</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24">
          <motion.div
            className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden text-center"
            style={{ background: 'linear-gradient(135deg, #0d0f14 0%, #111318 50%, #0d0f14 100%)' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div className="absolute inset-0 border border-white/5 rounded-[3rem]" />
            <motion.div className="absolute -top-32 -left-32 w-80 h-80 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.1) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 6, repeat: Infinity }} />
            <motion.div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.1) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 7, repeat: Infinity, delay: 1.5 }} />

            {/* Decorative grid lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{t('services.service01.title')}</h2>
              <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">{t('services.service01.challenge.text')}</p>
              <Link to="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,242,254,0.3)] transition-all"
              >
                {t('nav.startProject')}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
