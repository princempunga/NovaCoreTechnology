import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const NAV_KEYS = [
  { to: '/',          key: 'home' },
  { to: '/about',     key: 'about' },
  { to: '/services',  key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/features',  key: 'demo' },
  { to: '/contact',   key: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(nextLang)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 md:px-24 py-4 transition-all duration-300 ${
          scrolled ? 'bg-[#0d0f14db] backdrop-blur-xl border-b border-white/10 shadow-lg py-3' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex justify-between items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
            <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center font-heading font-black text-[1.1rem] text-white shadow-[0_0_15px_rgba(0,242,254,0.4)]">
              <span>N</span>
            </div>
            <span className="font-heading text-[1.1rem] font-bold text-white tracking-tight">
              Nova<span className="text-[#00f2fe]">core</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ml-auto" aria-label="Main navigation">
            {NAV_KEYS.map(({ to, key }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive ? 'text-[#00f2fe] bg-[#00f2fe14]' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {t(`navbar.${key}`)}
              </NavLink>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-4 ml-auto lg:ml-0">
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-slate-300 font-display text-xs font-semibold hover:bg-white/5 transition-colors"
              aria-label="Toggle language"
            >
              <FiGlobe /> {i18n.language.toUpperCase()}
            </button>

            {/* Hidden on mobile header, shown in hamburger menu */}
            <Link to="/contact" className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold text-sm shadow-[0_4px_20px_rgba(0,242,254,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,242,254,0.5)] transition-all">
              {t('navbar.cta')}
            </Link>

            {/* Menu Toggle */}
            <button
              className="lg:hidden p-2 text-white hover:text-[#00f2fe] transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[1100] bg-[#0d0f14cc] backdrop-blur-md lg:hidden flex flex-col p-10 pt-24"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col gap-2">
              {NAV_KEYS.map(({ to, key }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-5 py-4 rounded-xl text-lg font-semibold transition-all ${
                      isActive ? 'text-[#00f2fe] bg-[#00f2fe14]' : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`navbar.${key}`)}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <Link
                to="/contact"
                className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold text-lg shadow-lg hover:brightness-110 active:scale-95 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {t('navbar.cta')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-[1050] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
