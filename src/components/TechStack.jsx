import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaVuejs
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFlutter, SiRedux, SiGraphql, SiLaravel,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiFirebase,
  SiNginx, SiGithub, SiVercel, SiNetlify,
  SiKubernetes, SiCloudflare, SiSupabase, SiPrisma, SiGo
} from 'react-icons/si'
import {
  FiSmartphone, FiRefreshCw, FiServer, FiShield, FiZap, FiDatabase
} from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

// ─── CARD ──────────────────────────────────────────────────────────────────
function TechCard({ tech }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '160px',
        minWidth: '160px',
        backgroundColor: hovered ? 'rgba(255,255,255,0.04)' : '#111111',
        border: `1px solid ${hovered ? tech.color : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '12px',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        cursor: 'default',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        boxShadow: hovered ? `0 0 18px ${tech.color}30` : 'none',
      }}
    >
      {/* Icon */}
      <div
        style={{
          fontSize: '36px',
          color: hovered ? tech.color : '#6b7280',
          filter: hovered ? `drop-shadow(0 0 8px ${tech.color})` : 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '40px',
          width: '40px',
        }}
      >
        {tech.icon}
      </div>

      {/* Name */}
      <span style={{
        color: hovered ? '#ffffff' : '#e2e8f0',
        fontWeight: 700,
        fontSize: '13px',
        textAlign: 'center',
        transition: 'color 0.3s ease',
        lineHeight: 1.2,
      }}>
        {tech.name}
      </span>

      {/* Tag */}
      <span style={{
        fontSize: '9px',
        fontWeight: 700,
        letterSpacing: '0.12em',
        color: 'rgba(0,255,255,0.6)',
        backgroundColor: 'rgba(0,255,255,0.08)',
        padding: '2px 8px',
        borderRadius: '999px',
        textTransform: 'uppercase',
      }}>
        {tech.tag}
      </span>
    </div>
  )
}

// ─── MARQUEE ROW ───────────────────────────────────────────────────────────
function MarqueeRow({ techs, direction = 'left', duration = '40s' }) {
  const doubled = [...techs, ...techs]
  const animClass = direction === 'left' ? 'ts-scroll-left' : 'ts-scroll-right'

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      }}
    >
      <div
        className={animClass}
        style={{ display: 'flex', gap: '16px', width: 'max-content', animationDuration: duration }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {doubled.map((tech, i) => (
          <TechCard key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  )
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────────────
export default function TechStack() {
  const { t } = useTranslation()

  const ROW1 = [
    { name: 'React', icon: <FaReact />, color: '#61dafb', tag: t('techStack.tags.frontend') },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', tag: t('techStack.tags.frontend') },
    { name: 'Vue.js', icon: <FaVuejs />, color: '#42b883', tag: t('techStack.tags.frontend') },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6', tag: t('techStack.tags.language') },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8', tag: t('techStack.tags.styling') },
    { name: 'Framer Motion', icon: <FiZap />, color: '#ff0055', tag: t('techStack.tags.animation') },
    { name: 'React Native', icon: <FiSmartphone />, color: '#61dafb', tag: t('techStack.tags.mobile') },
    { name: 'Flutter', icon: <SiFlutter />, color: '#54c5f8', tag: t('techStack.tags.mobile') },
    { name: 'Redux', icon: <SiRedux />, color: '#764abc', tag: t('techStack.tags.state') },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#e535ab', tag: t('techStack.tags.api') },
  ]

  const ROW2 = [
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68a063', tag: t('techStack.tags.backend') },
    { name: 'Laravel', icon: <SiLaravel />, color: '#ff2d20', tag: t('techStack.tags.backend') },
    { name: 'Python', icon: <FaPython />, color: '#3776ab', tag: t('techStack.tags.backend') },
    { name: 'Express.js', icon: <FiServer />, color: '#ffffff', tag: t('techStack.tags.backend') },
    { name: 'Go', icon: <SiGo />, color: '#00add8', tag: t('techStack.tags.backend') },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791', tag: t('techStack.tags.database') },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479a1', tag: t('techStack.tags.database') },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248', tag: t('techStack.tags.database') },
    { name: 'Redis', icon: <SiRedis />, color: '#ff4438', tag: t('techStack.tags.database') },
    { name: 'Prisma', icon: <SiPrisma />, color: '#5a67d8', tag: t('techStack.tags.orm') },
  ]

  const ROW3 = [
    { name: 'AWS', icon: <FaAws />, color: '#ff9900', tag: t('techStack.tags.cloud') },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ed', tag: t('techStack.tags.devops') },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326ce5', tag: t('techStack.tags.devops') },
    { name: 'Cloudflare', icon: <SiCloudflare />, color: '#f38020', tag: t('techStack.tags.cdn') },
    { name: 'Vercel', icon: <SiVercel />, color: '#ffffff', tag: t('techStack.tags.hosting') },
    { name: 'Netlify', icon: <SiNetlify />, color: '#00c7b7', tag: t('techStack.tags.hosting') },
    { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', tag: t('techStack.tags.baas') },
    { name: 'Supabase', icon: <SiSupabase />, color: '#3ecf8e', tag: t('techStack.tags.baas') },
    { name: 'Nginx', icon: <SiNginx />, color: '#009900', tag: t('techStack.tags.server') },
    { name: 'GitHub', icon: <SiGithub />, color: '#ffffff', tag: t('techStack.tags.vcs') },
  ]

  return (
    <>
      <style>{`
        @keyframes tsScrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes tsScrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ts-scroll-left  { animation: tsScrollLeft  40s linear infinite; }
        .ts-scroll-right { animation: tsScrollRight 40s linear infinite; }
      `}</style>

      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/3 w-[500px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.06) 0%, transparent 70%)' }}
        />

        {/* Header */}
        <motion.div
          className="text-center mb-14 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
            {t('techStack.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            {t('techStack.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('techStack.subtitle')}
          </p>
        </motion.div>

        {/* Three scrolling rows */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Row labels */}
          <div className="px-6 sm:px-12 md:px-24 mb-1">
            <span className="text-[10px] font-display font-bold tracking-widest text-slate-600 uppercase">
              {t('techStack.rows.frontend')}
            </span>
          </div>
          <MarqueeRow techs={ROW1} direction="left" duration="35s" />

          <div className="px-6 sm:px-12 md:px-24 mt-3 mb-1">
            <span className="text-[10px] font-display font-bold tracking-widest text-slate-600 uppercase">
              {t('techStack.rows.backend')}
            </span>
          </div>
          <MarqueeRow techs={ROW2} direction="right" duration="45s" />

          <div className="px-6 sm:px-12 md:px-24 mt-3 mb-1">
            <span className="text-[10px] font-display font-bold tracking-widest text-slate-600 uppercase">
              {t('techStack.rows.devops')}
            </span>
          </div>
          <MarqueeRow techs={ROW3} direction="left" duration="40s" />
        </motion.div>
      </section>
    </>
  )
}
