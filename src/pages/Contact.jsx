import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiLoader } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
}

export default function Contact() {
  const { t } = useTranslation()
  const location = useLocation()
  const presetSubject = location.state?.prefilledSubject || ''

  const CONTACT_METHODS = [
    {
      icon: <FiMail size={22} />,
      title: t('contact.info.email.title'),
      info: t('contact.info.email.value'),
      href: `mailto:${t('contact.info.email.value')}`,
      accent: '#00f2fe',
      sub: t('contact.info.email.note'),
    },
    {
      icon: <FiPhone size={22} />,
      title: t('contact.info.phone.title'),
      info: '+256 784630448',
      href: 'tel:+256784630448',
      accent: '#ff6a00',
      sub: t('contact.info.phone.note'),
    },
    {
      icon: <FiMapPin size={22} />,
      title: t('contact.info.location.title'),
      info: t('contact.info.location.value'),
      accent: '#00f2fe',
      sub: t('contact.info.location.note'),
    },
  ]

  // Fix 1: State Variables
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [projectType, setProjectType] = useState(presetSubject)
  const [message, setMessage] = useState('')

  const [focused, setFocused] = useState(null)
  const [formErrors, setFormErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Fix 4: Validation
    const errors = {}
    if (!fullName.trim()) errors.fullName = true
    if (!email.trim()) errors.email = true
    if (!projectType) errors.projectType = true
    if (!message.trim()) errors.message = true

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsLoading(true)
    setStatusMsg(null)

    // Fix 2: EmailJS Send
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: fullName,
        from_email: email,
        project_type: projectType,
        message: message,
        to_email: t('contact.info.email.value')
      }
    ).then(() => {
      // Fix 3: Form Reset after success
      setFullName('')
      setEmail('')
      setProjectType('')
      setMessage('')
      setFormErrors({})
      setIsLoading(false)
      setStatusMsg({
        type: 'success',
        text: t('contact.form.success')
      })
    }).catch((err) => {
      console.error(err)
      setIsLoading(false)
      setStatusMsg({
        type: 'error',
        text: t('contact.form.error')
      })
    })
  }

  return (
    <motion.div
      className="min-h-screen bg-[#050507] text-slate-200"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <motion.div
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.07) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
              {t('contact.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              {t('contact.title1')}{' '}
              <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
                {t('contact.title2')}
              </span>
            </h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="pb-32 px-6 md:px-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: Info */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden" animate="visible" variants={fadeUp}
          >
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">{t('contact.consultation.title')}</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t('contact.consultation.subtitle')}
              </p>
            </div>

            {/* Contact method cards */}
            <div className="flex flex-col gap-4">
              {CONTACT_METHODS.map((method, i) => (
                <motion.div
                  key={i}
                  className="group flex items-center gap-5 p-6 rounded-2xl bg-[#0d0f14] border border-white/5 hover:border-white/10 transition-all overflow-hidden relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: method.accent }}
                  />
                  <div
                    className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${method.accent}15`, color: method.accent }}
                  >
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-bold mb-0.5">{method.title}</h4>
                    {method.href ? (
                      <a href={method.href} className="text-slate-400 hover:text-[#00f2fe] transition-colors text-sm">{method.info}</a>
                    ) : (
                      <span className="text-slate-400 text-sm">{method.info}</span>
                    )}
                    <p className="text-slate-600 text-xs mt-1">{method.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="relative p-10 md:p-14 rounded-3xl bg-[#0d0f14] border border-white/5 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top glow line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent" />
            {/* BG orb */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.2) 0%, transparent 70%)' }}
            />

            <h3 className="relative text-2xl font-heading font-bold text-white mb-10">{t('contact.form.title')}</h3>

            <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: 'fullName', label: t('contact.form.fullName'), type: 'text', placeholder: t('contact.form.fullNamePlaceholder'), value: fullName, setter: setFullName },
                    { id: 'email', label: t('contact.form.email'), type: 'email', placeholder: t('contact.form.emailPlaceholder'), value: email, setter: setEmail },
                  ].map(field => (
                    <div key={field.id} className="flex flex-col gap-2">
                      <label htmlFor={`contact-${field.id}`} className="text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-widest ml-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={`contact-${field.id}`}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => {
                          field.setter(e.target.value)
                          if (formErrors[field.id]) {
                            setFormErrors(prev => ({ ...prev, [field.id]: null }))
                          }
                        }}
                        onFocus={() => setFocused(field.id)}
                        onBlur={() => setFocused(null)}
                        className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all"
                        style={{
                          borderColor: focused === field.id ? '#00f2fe60' : undefined,
                          boxShadow: focused === field.id ? '0 0 0 3px rgba(0,242,254,0.08)' : 'none',
                        }}
                      />
                      <AnimatePresence>
                        {formErrors[field.id] && (
                          <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[0.7rem] font-medium px-1 mt-[-2px]">
                            {t('contact.form.required')}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className="text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-widest ml-1">
                  {t('contact.form.projectType')}
                </label>
                <select
                  id="contact-subject"
                  value={projectType}
                  onChange={(e) => {
                    setProjectType(e.target.value)
                    if (formErrors.projectType) {
                      setFormErrors(prev => ({ ...prev, projectType: null }))
                    }
                  }}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  className="bg-[#0d0f14] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                  style={{
                    borderColor: focused === 'subject' ? '#00f2fe60' : undefined,
                    boxShadow: focused === 'subject' ? '0 0 0 3px rgba(0,242,254,0.08)' : 'none',
                  }}
                >
                  <option value="" disabled className="bg-[#0d0f14]">
                    Select a project type...
                  </option>
                  <option value="Enterprise Web Applications" className="bg-[#0d0f14]">
                    Enterprise Web Applications
                  </option>
                  <option value="School Management Ecosystems" className="bg-[#0d0f14]">
                    School Management Ecosystems
                  </option>
                  <option value="Native & Hybrid Mobile Apps" className="bg-[#0d0f14]">
                    Native & Hybrid Mobile Apps
                  </option>
                  <option value="Data & Analytics Dashboards" className="bg-[#0d0f14]">
                    Data & Analytics Dashboards
                  </option>
                  <option value="Cybersecurity & Auditing" className="bg-[#0d0f14]">
                    Cybersecurity & Auditing
                  </option>
                  <option value="General" className="bg-[#0d0f14]">
                    General
                  </option>
                </select>
                <AnimatePresence>
                  {formErrors.projectType && (
                    <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[0.7rem] font-medium px-1 mt-[-2px]">
                      Please select a project type
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-widest ml-1">
                  {t('contact.form.projectDetails')}
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                    if (formErrors.message) {
                      setFormErrors(prev => ({ ...prev, message: null }))
                    }
                  }}
                  placeholder={t('contact.form.projectTypePlaceholder')}
                  rows={5}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white text-sm placeholder:text-slate-600 focus:outline-none transition-all resize-none"
                  style={{
                    borderColor: focused === 'message' ? '#00f2fe60' : undefined,
                    boxShadow: focused === 'message' ? '0 0 0 3px rgba(0,242,254,0.08)' : 'none',
                  }}
                />
                <AnimatePresence>
                  {formErrors.message && (
                    <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[0.7rem] font-medium px-1 mt-[-2px]">
                      {t('contact.form.required')}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {statusMsg && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`mt-2 p-4 rounded-xl border text-sm font-medium ${statusMsg.type === 'success'
                      ? 'bg-[#00f2fe0a] border-[#00f2fe40] text-[#00f2fe]'
                      : 'bg-red-500/10 border-red-500/40 text-red-400'
                      }`}
                  >
                    {statusMsg.text}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl text-[#050507] font-display font-bold shadow-xl mt-2 transition-all ${isLoading
                  ? 'bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-80 cursor-not-allowed pointer-events-none'
                  : 'bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(0,242,254,0.3)] hover:scale-[0.99] active:scale-95'
                  }`}
              >
                {isLoading ? (
                  <>
                    <FiLoader size={16} className="animate-spin" /> {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.form.submit')} <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
