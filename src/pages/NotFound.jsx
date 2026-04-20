import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.floor(Math.random() * 5) + 4,
  left: `${Math.floor(Math.random() * 96) + 2}%`,
  delay: `${(Math.random() * 6).toFixed(1)}s`,
  duration: `${(Math.random() * 8 + 6).toFixed(1)}s`,
}))

const fadeSlideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

function TerminalLog() {
  const { t } = useTranslation()
  const [visibleLines, setVisibleLines] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  const TERMINAL_LINES = [
    { text: t('notfound.terminal.scan'), color: '#6b7280' },
    { text: t('notfound.terminal.error1'), color: '#ef4444' },
    { text: t('notfound.terminal.check'), color: '#6b7280' },
    { text: t('notfound.terminal.error2'), color: '#ef4444' },
    { text: t('notfound.terminal.suggest'), color: '#00ffff' },
  ]

  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const t_timer = setTimeout(() => setVisibleLines(v => v + 1), 400)
      return () => clearTimeout(t_timer)
    }
  }, [visibleLines, TERMINAL_LINES.length])

  useEffect(() => {
    const t_cursor = setInterval(() => setCursorVisible(v => !v), 500)
    return () => clearInterval(t_cursor)
  }, [])

  return (
    <div
      className="w-full max-w-sm mx-auto rounded-lg p-4 font-mono text-sm text-left"
      style={{
        backgroundColor: '#0d0d0d',
        border: '1px solid rgba(0,255,255,0.2)',
      }}
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-70" />
        <span className="text-slate-600 text-xs ml-2">novacore_router.log</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.p>
        ))}
        {visibleLines >= TERMINAL_LINES.length && (
          <span
            className="text-[#00ffff]"
            style={{ opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s' }}
          >
            _
          </span>
        )}
      </div>
    </div>
  )
}

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <style>{`
        @keyframes glitch {
          0%   { transform: translate(0); text-shadow: none; }
          20%  { transform: translate(-3px, 3px); text-shadow: 3px 0 #ff0000, -3px 0 #0000ff; }
          40%  { transform: translate(3px, -3px); text-shadow: -3px 0 #ff0000, 3px 0 #0000ff; }
          60%  { transform: translate(-3px, 0); text-shadow: 2px 0 #ff6b35; }
          80%  { transform: translate(3px, 0); text-shadow: -2px 0 #00ffff; }
          100% { transform: translate(0); text-shadow: none; }
        }
        .glitch-text {
          animation: glitch 3s infinite;
        }
        @keyframes floatUp {
          0%   { transform: translateY(0); opacity: 0.4; }
          80%  { opacity: 0.15; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
        .particle {
          animation: floatUp linear infinite;
        }
      `}</style>

      <div
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#0a0a0a' }}
      >
        {/* Floating particles */}
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="particle absolute bottom-0 rounded-full pointer-events-none"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              backgroundColor: 'rgba(0,255,255,0.3)',
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* Giant background "404" watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            fontSize: '30vw',
            fontWeight: 900,
            color: 'rgba(0,255,255,0.03)',
            letterSpacing: '-0.05em',
            lineHeight: 1,
          }}
        >
          404
        </div>

        {/* Ambient orb top-left */}
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)' }}
        />
        {/* Ambient orb bottom-right */}
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)' }}
        />

        {/* Center content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center px-6 gap-6 max-w-xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Glitch 404 */}
          <motion.h1
            className="glitch-text font-heading text-8xl md:text-[10rem] font-black leading-none"
            style={{ color: '#00ffff' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 18 }}
          >
            404
          </motion.h1>

          {/* Status badge */}
          <motion.div {...fadeSlideUp(0.15)}>
            <span
              className="inline-block font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(255,107,53,0.15)',
                border: '1px solid rgba(255,107,53,0.4)',
                color: '#ff6b35',
              }}
            >
              ERROR_CODE: 404 | ROUTE_NOT_FOUND
            </span>
          </motion.div>

          {/* Message */}
          <motion.div {...fadeSlideUp(0.3)} className="flex flex-col gap-3">
            <h2 className="text-2xl font-heading font-bold text-white">
              {t('notfound.title')}
            </h2>
            <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
              {t('notfound.subtitle')}
            </p>
          </motion.div>

          {/* Terminal */}
          <motion.div {...fadeSlideUp(0.45)} className="w-full">
            <TerminalLog />
          </motion.div>

          {/* Action buttons */}
          <motion.div {...fadeSlideUp(0.6)} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-[#050507] transition-all hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #00f2fe, #4facfe)',
                boxShadow: '0 0 20px rgba(0,242,254,0.35)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(0,242,254,0.6)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(0,242,254,0.35)'}
            >
              {t('notfound.cta1')} →
            </Link>

            <Link
              to="/services"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold transition-all hover:-translate-y-1"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid rgba(0,255,255,0.5)',
                color: '#00ffff',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(0,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.8)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.5)'
              }}
            >
              {t('notfound.cta2')}
            </Link>
          </motion.div>

          {/* Bottom hint */}
          <motion.p {...fadeSlideUp(0.75)} className="text-slate-500 text-sm">
            {t('notfound.hint')}{' '}
            <a
              href="mailto:princempunga5@gmail.com"
              className="text-[#00ffff] hover:underline transition-colors"
            >
              princempunga5@gmail.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </>
  )
}
