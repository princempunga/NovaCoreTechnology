import React from 'react'
import { Link } from 'react-router-dom'
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin
} from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const QUICK_LINKS = [
  { to: '/',          key: 'home' },
  { to: '/about',     key: 'about' },
  { to: '/services',  key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/features',  key: 'demo' },
  { to: '/contact',   key: 'contact' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-24">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 w-fit group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center font-heading font-black text-white text-sm shadow-[0_0_15px_rgba(0,242,254,0.3)] group-hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all">
                N
              </div>
              <span className="font-heading text-lg font-bold text-white">
                Nova<span className="text-[#00f2fe]">core</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <FiGithub />, label: 'GitHub' },
                { icon: <FiLinkedin />, label: 'LinkedIn' },
                { icon: <FiTwitter />, label: 'Twitter' },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#00f2fe] hover:bg-[#00f2fe1a] transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-8">{t('footer.quickLinks')}</h4>
            <ul className="flex flex-col gap-4">
              {QUICK_LINKS.map(({ to, key }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 text-sm hover:text-[#00f2fe] hover:translate-x-1 transition-all inline-block">
                    {t(`navbar.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-8">{t('footer.services')}</h4>
            <ul className="flex flex-col gap-4">
              {[
                { key: 'app' }, { key: 'school' }, { key: 'dash' }, 
                { key: 'db' }, { key: 'api' }, { key: 'maint' }
              ].map((svc) => (
                <li key={svc.key}>
                  <Link to="/services" className="text-slate-400 text-sm hover:text-[#00f2fe] hover:translate-x-1 transition-all inline-block">
                    {t(`footer.servicesList.${svc.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-8">{t('footer.contact')}</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <FiMail className="text-[#00f2fe] mt-1 shrink-0" />
                <a href="mailto:info@novacoretechnology.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                  info@novacoretechnology.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#ff6a00] mt-1 shrink-0" />
                <a href="tel:+243000000000" className="text-slate-400 text-sm hover:text-white transition-colors">
                  +243 000 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#00f2fe] mt-1 shrink-0" />
                <span className="text-slate-400 text-sm">
                  Kinshasa, DR Congo
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Novacoretechnology. {t('footer.rights')}
          </p>
          <p className="text-slate-500 text-xs italic">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}
