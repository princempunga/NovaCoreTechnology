import React from 'react'
import { Link } from 'react-router-dom'
import {
  FiGithub, FiLinkedin, FiTwitter, FiMail, FiPhone, FiMapPin
} from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const QUICK_LINKS = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/services', key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
  { to: '/estimate', key: 'estimate' },
  { to: '/features', key: 'demo' },
  { to: '/contact', key: 'contact' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full bg-[#050507] border-t border-[#00f2fe26] pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 w-fit group">
              <div className="w-[42px] h-[42px] rounded-[10px] overflow-hidden shadow-[0_0_15px_rgba(0,242,254,0.4)] border border-[#00f2fe]/20 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.6)] transition-all">
                <img src="/logo.png" alt="NovaCore Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                NovaCore<span className="text-[#00f2fe]">Technology</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
              {t('footer.description')}
            </p>

            <div className="mt-2 mb-2 flex items-center gap-2 text-sm">
              <span className="text-slate-400">{t('footer.cta.text')}</span>
              <Link to="/contact" className="text-[#00ffff] hover:underline transition-all">
                {t('footer.cta.link')}
              </Link>
            </div>

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
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 text-xl hover:text-[#00ffff] hover:border-[#00ffff] hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300"
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
                    {t(`nav.${key}`)}
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
                { id: '01' },
                { id: '02' },
                { id: '03' },
                { id: '04' },
                { id: '05' }
              ].map((svc) => (
                <li key={svc.id}>
                  <Link to={`/services#service-${svc.id}`} className="text-slate-400 text-sm hover:text-[#00f2fe] hover:translate-x-1 transition-all inline-block">
                    {t(`services.service${svc.id}.title`)}
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
                <a href="mailto:princempunga5@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors">
                  {t('contact.info.email.value')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#ff6a00] mt-1 shrink-0" />
                <a href="tel:+256784630448" className="text-slate-400 text-sm hover:text-white transition-colors">
                  +256 784630448
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-[#00f2fe] mt-1 shrink-0" />
                <span className="text-slate-400 text-sm">
                  {t('contact.info.location.value')}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            {t('footer.copyright')}
          </p>
          <p className="text-slate-500 text-xs italic">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}
