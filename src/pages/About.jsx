import React from 'react'
import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiAward, FiCode, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import AnimatedCounter from '../components/AnimatedCounter'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Elijah Osei",
    transKey: "ceo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Amara Ndiaye",
    transKey: "cto",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    transKey: "design",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
  }
]

export default function About() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className="min-h-screen bg-[#050507] text-slate-200"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={staggerContainer}
    >
      {/* Page Header */}
      <section className="relative pt-40 pb-20 md:pb-32 overflow-hidden">
        {/* Glow Sphere */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,242,254,0.15)_0%,_transparent_60%)] rounded-full blur-[60px] pointer-events-none z-0"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6a001a] border border-[#ff6a0033] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('about.headerLabel')}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {t('about.headerTitle1')} <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">{t('about.headerTitleHighlight')}</span>
            </h1>
            <p className="text-slate-400 mx-auto max-w-3xl text-lg md:text-xl leading-relaxed">
              {t('about.headerDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Mission */}
      <section className="pb-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="p-12 rounded-[2.5rem] bg-[#0d0f14cc] backdrop-blur-3xl border border-white/5 border-t-[#00f2fe] border-t-2 hover:-translate-y-2 transition-all group"
            initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUpVariant}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00f2fe1a] text-[#00f2fe] mb-8 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all">
              <FiTarget size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">{t('about.philTitle')}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {t('about.philDesc1_1')}<strong className="text-white">{t('about.philDesc1_bold')}</strong>{t('about.philDesc1_2')}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {t('about.philDesc2')}
            </p>
          </motion.div>
          
          <motion.div 
            className="p-12 rounded-[2.5rem] bg-[#0d0f14cc] backdrop-blur-3xl border border-white/5 border-t-[#ff6a00] border-t-2 hover:-translate-y-2 transition-all group lg:mt-12"
            initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUpVariant} transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#ff6a001a] text-[#ff6a00] mb-8 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.3)] transition-all">
              <FiAward size={28} />
            </div>
            <h3 className="text-2xl font-heading font-bold text-white mb-6">{t('about.missionTitle')}</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {t('about.missionDesc1')}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {t('about.missionDesc2')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 border-y border-white/5 bg-white/[0.01]">
         <div className="max-w-[1280px] mx-auto px-6 md:px-24">
           <motion.div className="text-center" variants={fadeUpVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
               {t('about.statsLabel')}
             </div>
             <h2 className="text-4xl font-heading font-bold text-white mb-16">{t('about.statsTitle')}</h2>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { num: t('about.stat1Num'), label: t('about.stat1Label'), color: 'text-[#00f2fe]' },
                  { num: t('about.stat2Num'), label: t('about.stat2Label'), color: 'text-[#ff6a00]' },
                  { num: t('about.stat3Num'), label: t('about.stat3Label'), color: 'text-[#00f2fe]' },
                  { num: t('about.stat4Num'), label: t('about.stat4Label'), color: 'text-white' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-8 relative after:hidden lg:after:block lg:after:absolute lg:after:right-[-1rem] lg:after:top-1/4 lg:after:bottom-1/4 lg:after:w-[1px] lg:after:bg-white/10 last:after:hidden">
                     <h3 className={`${stat.color} text-5xl md:text-6xl font-heading font-bold leading-none mb-3`}>
                       <AnimatedCounter value={stat.num} />
                     </h3>
                     <p className="text-slate-500 text-xs font-display font-bold tracking-widest uppercase">{stat.label}</p>
                  </div>
                ))}
             </div>
           </motion.div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 relative">
        <div className="max-w-[1280px] mx-auto px-6 md:px-24">
          <motion.div 
            className="text-center mb-20"
            initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUpVariant}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6a001a] border border-[#ff6a0033] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('about.teamLabel')}
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">{t('about.teamTitle')}</h2>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg leading-relaxed">
              {t('about.teamDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div 
                key={member.id}
                className="group relative rounded-[2rem] overflow-hidden bg-[#0d0f14] border border-white/5 hover:border-white/10 transition-all shadow-xl flex flex-col h-full"
                initial="hidden" whileInView="visible" viewport={{ once:true }} 
                variants={fadeUpVariant}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[80%] contrast-[1.1] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" loading="lazy" />
                  
                  {/* Social Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507e6] via-transparent to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-end justify-center pb-8 gap-4 px-6">
                    {[<FiLinkedin />, <FiTwitter />, <FiGithub />].map((icon, i) => (
                      <a key={i} href="#" className="w-11 h-11 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center text-white hover:bg-[#00f2fe] hover:text-[#050507] hover:border-[#00f2fe] transition-all duration-300">
                        {React.cloneElement(icon, { size: 20 })}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 border-t border-white/5 bg-white/[0.02] flex-grow">
                  <h4 className="text-2xl font-heading font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-[#00f2fe] text-xs font-display font-bold uppercase tracking-widest mb-4">{t(`about.roles.${member.transKey}`)}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(`about.bios.${member.transKey}`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
