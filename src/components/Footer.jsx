import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin 
} from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { HiLockClosed, HiCheckCircle } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

const QUICK_LINKS = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/services', key: 'services' },
  { to: '/portfolio', key: 'portfolio' },
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
              <Link to="/contact" className="text-[#00ffff] hover:text-[#ff6b35] transition-all duration-200">
                {t('footer.cta.link')}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/princempunga' },
                { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/princempunga' },
                { icon: <FaXTwitter />, label: 'X', href: 'https://x.com/princempunga' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-slate-400 text-xl hover:text-[#ff6b35] hover:border-[#ff6b35] hover:shadow-[0_0_15px_rgba(255,107,53,0.4)] transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* SSL Badge */}
            <div className="mt-4 flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#00f2fe]/10 bg-[#00f2fe]/[0.02] transition-all hover:bg-[#00f2fe]/[0.05]">
                <HiLockClosed className="text-[#fbbf24] text-sm" />
                <span className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-widest">{t('footer.ssl')}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/10 bg-emerald-500/[0.02] transition-all hover:bg-emerald-500/[0.05]">
                <HiCheckCircle className="text-emerald-500 text-sm" />
                <span className="text-slate-400 text-[10px] uppercase tracking-widest">{t('footer.dataProtected')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-widest mb-8">{t('footer.quickLinks')}</h4>
            <ul className="flex flex-col gap-4">
              {QUICK_LINKS.map(({ to, key }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 text-sm hover:text-[#ff6b35] hover:translate-x-1 transition-all duration-200 inline-block">
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
                  <Link to={`/services#service-${svc.id}`} className="text-slate-400 text-sm hover:text-[#ff6b35] hover:translate-x-1 transition-all duration-200 inline-block">
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
                <a href={`mailto:${t('contact.info.email.value')}`} className="text-slate-400 text-sm hover:text-[#ff6b35] transition-all duration-200">
                  {t('contact.info.email.value')}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-[#ff6a00] mt-1 shrink-0" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+256784630448" className="text-slate-400 text-sm hover:text-[#ff6b35] transition-all duration-200">
                    +256 784630448
                  </a>
                  <a href="tel:+256775267911" className="text-slate-400 text-sm hover:text-[#ff6b35] transition-all duration-200">
                    +256 775267911
                  </a>
                  <a href="tel:+256705507066" className="text-slate-400 text-sm hover:text-[#ff6b35] transition-all duration-200">
                    +256 705507066
                  </a>
                </div>
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
        <div className="py-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          <p className="text-slate-500 text-xs order-2 lg:order-1">
            {t('footer.copyright')}
          </p>
          
          <div className="flex items-center gap-4 text-slate-500 text-[10px] sm:text-xs order-1 lg:order-2 flex-wrap justify-center font-medium uppercase tracking-wider">
            <Link to="/privacy-policy" className="hover:text-[#ff6b35] transition-all duration-200">{t('footer.privacy')}</Link>
            <span className="opacity-20">·</span>
            <Link to="/terms-of-service" className="hover:text-[#ff6b35] transition-all duration-200">{t('footer.terms')}</Link>
            <span className="opacity-20">·</span>
            <Link to="/cookie-policy" className="hover:text-[#ff6b35] transition-all duration-200">{t('footer.cookies')}</Link>
          </div>

          <p className="text-slate-500 text-[10px] sm:text-xs italic order-3">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}
