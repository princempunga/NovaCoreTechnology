import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCode, FiLayout, FiDatabase, FiShield, FiCheckCircle } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaVuejs, FaSwift } from 'react-icons/fa'
import { SiPostgresql, SiGraphql, SiGo, SiFlutter, SiTailwindcss } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import AnimatedCounter from '../components/AnimatedCounter'

const TECH_STACK = [
  { name: 'React', icon: <FaReact size={24} color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={24} color="#339933" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={24} color="#4169E1" /> },
  { name: 'AWS', icon: <FaAws size={24} color="#FF9900" /> },
  { name: 'Docker', icon: <FaDocker size={24} color="#2496ED" /> },
  { name: 'GraphQL', icon: <SiGraphql size={24} color="#E10098" /> },
  { name: 'Python', icon: <FaPython size={24} color="#3776AB" /> },
  { name: 'Go', icon: <SiGo size={24} color="#00ADD8" /> },
  { name: 'Vue.js', icon: <FaVuejs size={24} color="#4FC08D" /> },
  { name: 'Flutter', icon: <SiFlutter size={24} color="#02569B" /> },
  { name: 'Swift', icon: <FaSwift size={24} color="#F05138" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} color="#06B6D4" /> },
]

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100])
  const { t } = useTranslation()

  return (
    <motion.div 
      className="min-h-screen bg-[#050507] text-slate-200 overflow-x-hidden selection:bg-[#00f2fe] selection:text-[#050507]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:py-40 bg-[radial-gradient(circle_at_center,_rgba(0,242,254,0.05)_0%,_transparent_60%)]">
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden" animate="visible"
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6a0026] border border-[#ff6a0033] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] shadow-[0_0_8px_#ff6a00]"></span>
              {t('home.heroLabel')}
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-8">
              {t('home.heroTitle1')} <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">{t('home.heroTitleHighlight')}</span> {t('home.heroTitle2')}
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {t('home.heroDesc')}
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
              <Link to="/contact" className="w-full sm:w-max flex justify-center items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/25 transition-all">
                {t('home.btnDeploy')} <FiArrowRight />
              </Link>
              <Link to="/portfolio" className="w-full sm:w-max flex justify-center items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-display font-bold hover:bg-white/5 transition-all">
                {t('home.btnCase')}
              </Link>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-12 p-8 rounded-[2rem] bg-[#0d0f14cc] backdrop-blur-3xl border border-white/5 shadow-2xl">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-3xl font-heading font-bold text-[#ff6a00] leading-none"><AnimatedCounter value="200+" /></span>
                <span className="text-[0.7rem] font-display font-bold text-slate-500 uppercase tracking-widest">{t('home.stat1')}</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/5"></div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-3xl font-heading font-bold text-[#00f2fe] leading-none"><AnimatedCounter value="99.9%" /></span>
                <span className="text-[0.7rem] font-display font-bold text-slate-500 uppercase tracking-widest">{t('home.stat2')}</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/5"></div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <span className="text-3xl font-heading font-bold text-white leading-none"><AnimatedCounter value="24/7" /></span>
                <span className="text-[0.7rem] font-display font-bold text-slate-500 uppercase tracking-widest">{t('home.stat3')}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:block relative" 
            style={{ y: yParallax }}
          >
            <motion.div 
              className="p-1 rounded-[2rem] bg-gradient-to-br from-[#00f2fe] via-transparent to-[#ff6a00] shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="bg-[#050507e6] rounded-[calc(2rem-4px)] p-8 font-mono text-sm leading-relaxed overflow-hidden backdrop-blur-xl">
                 <div className="flex items-center gap-6 mb-8 pb-4 border-b border-white/5">
                   <div className="flex gap-2">
                     <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
                     <span className="w-3 h-3 rounded-full bg-[#ff6a0080]"></span>
                     <span className="w-3 h-3 rounded-full bg-emerald-500/50"></span>
                   </div>
                   <div className="text-[0.7rem] text-slate-500 font-display">novacore/deployment.js</div>
                 </div>
                 <pre className="text-slate-300">
                   <code>
                     <span className="text-fuchsia-400 italic">import</span> &#123; CloudArchitecture, Security &#125; <span className="text-fuchsia-400 italic">from</span> <span className="text-[#00f2fe]">'@novacore/core'</span>;<br/><br/>
                     <span className="text-fuchsia-400 italic">async function</span> <span className="text-[#38bdf8]">initializeSystem</span>() &#123;<br/>
                     &nbsp;&nbsp;<span className="text-fuchsia-400 italic">const</span> cluster = <span className="text-fuchsia-400 italic">await</span> CloudArchitecture.<span className="text-[#38bdf8]">provision</span>(&#123;<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;scale: <span className="text-[#00f2fe]">'infinite'</span>,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;latency: <span className="text-[#00f2fe]">'&lt; 10ms'</span>,<br/>
                     &nbsp;&nbsp;&nbsp;&nbsp;redundancy: <span className="text-[#00f2fe]">'active-active'</span><br/>
                     &nbsp;&nbsp;&#125;);<br/><br/>
                     &nbsp;&nbsp;<span className="text-fuchsia-400 italic">await</span> Security.<span className="text-[#38bdf8]">enforceZeroTrust</span>(cluster);<br/>
                     &nbsp;&nbsp;<span className="text-fuchsia-400 italic">return</span> cluster.<span className="text-[#38bdf8]">ready</span>();<br/>
                     &#125;
                   </code>
                 </pre>
              </div>
            </motion.div>
            
            {/* Glow effect */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle,_#00f2fe26_0%,_transparent_60%)] blur-[40px] -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-[1280px] mx-auto px-6 mb-12">
          <p className="text-center font-display text-slate-500 text-xs font-bold tracking-[0.2em] uppercase">{t('home.techBanner')}</p>
        </div>
        <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 px-8 w-max animate-[slide-marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
              <div key={`${tech.name}-${idx}`} className="flex items-center gap-3 px-6 py-3 rounded-lg bg-[#0d0f14] border border-white/5 text-slate-300 font-display font-semibold whitespace-nowrap hover:-translate-y-1 hover:border-[#00f2fe33] hover:shadow-[0_5px_15px_rgba(0,242,254,0.15)] hover:text-white transition-all cursor-pointer">
                {tech.icon} <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24">
          <motion.div className="text-center mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('home.capLabel')}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{t('home.capTitle')}</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t('home.capDesc')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: <FiCode size={30} />, title: t('home.card1Title'), desc: t('home.card1Desc'), color: 'text-[#00f2fe]' },
              { icon: <FiLayout size={30} />, title: t('home.card2Title'), desc: t('home.card2Desc'), color: 'text-[#ff6a00]' },
              { icon: <FiLayout size={30} />, title: t('home.card3Title'), desc: t('home.card3Desc'), color: 'text-[#00f2fe]' },
              { icon: <FiShield size={30} />, title: t('home.card4Title'), desc: t('home.card4Desc'), color: 'text-[#ff6a00]' },
            ].map((card, i) => (
              <motion.div 
                key={i}
                className="p-10 rounded-[2.5rem] bg-[#0d0f14cc] backdrop-blur-xl border border-white/5 hover:-translate-y-2 hover:border-[#ff6a0033] hover:shadow-2xl transition-all group"
                initial="hidden" whileInView="visible" viewport={{ once: true }} 
                variants={fadeUpVariant} transition={{ delay: i * 0.1 }}
              >
                <div className={`w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-white/[0.02] border border-white/5 mb-8 ${card.color}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 md:py-32 bg-[#0d0f14]">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">{t('home.methLabel')}</div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">{t('home.methTitle')}</h2>
              <p className="text-lg text-slate-400 mb-10">{t('home.methDesc')}</p>
              
              <ul className="flex flex-col gap-8">
                {[
                  { icon: <FiCheckCircle size={24} />, title: t('home.meth1Title'), desc: t('home.meth1Desc'), color: 'text-[#00f2fe]' },
                  { icon: <FiCheckCircle size={24} />, title: t('home.meth2Title'), desc: t('home.meth2Desc'), color: 'text-[#ff6a00]' },
                  { icon: <FiCheckCircle size={24} />, title: t('home.meth3Title'), desc: t('home.meth3Desc'), color: 'text-[#00f2fe]' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6">
                    <div className={`mt-1 flex-shrink-0 ${item.color}`}>{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
               className="relative rounded-[2.5rem] overflow-hidden aspect-square p-1 bg-gradient-to-br from-[#00f2fe33] to-[#ff6a0033]"
               initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            >
               <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop" alt="Software Engineering" className="w-full h-full object-cover rounded-[calc(2.5rem-4px)]" />
               <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe1a] to-[#ff6a001a] mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 md:px-24">
          <div className="relative group p-12 md:p-24 rounded-[3rem] bg-[#0d0f14cc] backdrop-blur-2xl border border-white/5 text-center overflow-hidden">
            {/* Animated Blobs */}
            <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-[#00f2fe1a] blur-[100px] animate-pulse"></div>
            <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-[#ff6a001a] blur-[100px] animate-pulse delay-1000"></div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight relative z-10">{t('home.ctaTitle')}</h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12 relative z-10 leading-relaxed">
              {t('home.ctaDesc')}
            </p>
            <div className="relative z-10">
              <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold text-lg shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/30 transition-all">
                {t('home.ctaBtn')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
