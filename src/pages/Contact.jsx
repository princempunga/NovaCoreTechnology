// EMAILJS & NETLIFY SETUP:
// 1. Go to your Netlify dashboard
// 2. Site Settings → Environment Variables
// 3. Add these 3 variables with their real values:
//    VITE_EMAILJS_PUBLIC_KEY
//    VITE_EMAILJS_SERVICE_ID  
//    VITE_EMAILJS_TEMPLATE_ID
// 4. Redeploy the site after adding them

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiLoader } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
  })
}

const CONTACT_METHODS = [
  {
    icon: <FiMail size={22} />,
    title: 'Email Us',
    info: 'princempunga5@gmail.com',
    href: 'mailto:princempunga5@gmail.com',
    accent: '#00f2fe',
    sub: 'Responses within 24h',
  },
  {
    icon: <FiPhone size={22} />,
    title: 'Call Us',
    info: '+256 784630448',
    href: 'tel:+256784630448',
    accent: '#ff6a00',
    sub: 'Mon–Fri, 8am–6pm EAT',
  },
  {
    icon: <FiMapPin size={22} />,
    title: 'Visit Us',
    info: 'Kampala, Uganda',
    accent: '#00f2fe',
    sub: 'East Africa',
  },
]

export default function Contact() {
  const [focused, setFocused] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [formErrors, setFormErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [statusMsg, setStatusMsg] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: null }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate all fields manually to show inline custom messages
    const errors = {}
    if (!formData.name.trim()) errors.name = true
    if (!formData.email.trim()) errors.email = true
    if (!formData.subject) errors.subject = true
    if (!formData.message.trim()) errors.message = true
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsLoading(true)
    setStatusMsg(null)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.subject,
        message: formData.message,
        to_email: "princempunga5@gmail.com"
      }
    ).then(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsLoading(false)
      setStatusMsg({
        type: 'success',
        text: "✓ Your message was sent successfully! We'll get back to you within 24 hours."
      })
    }).catch((err) => {
      console.error(err)
      setIsLoading(false)
      setStatusMsg({
        type: 'error',
        text: "✗ Something went wrong. Please try again or email us directly at princempunga5@gmail.com"
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
              Connect
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Let's Work{' '}
              <span className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              Whether you need a complete enterprise system overhaul or a specialized web application, our team is ready to deliver.
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
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Technical Consultation</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Reach out to us directly or fill out the form, and a technical coordinator will get back to you within 24 hours.
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

            <h3 className="relative text-2xl font-heading font-bold text-white mb-10">Send a Message</h3>

            <form onSubmit={handleSubmit} noValidate className="relative flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
                ].map(field => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label htmlFor={`contact-${field.id}`} className="text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-widest ml-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={`contact-${field.id}`}
                      placeholder={field.placeholder}
                      value={formData[field.id]}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
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
                          This field is required
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-subject" className="text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Project Type
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  className="bg-[#0d0f14] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
                  style={{
                    borderColor: focused === 'subject' ? '#00f2fe60' : undefined,
                    boxShadow: focused === 'subject' ? '0 0 0 3px rgba(0,242,254,0.08)' : 'none',
                  }}
                >
                  <option value="" className="bg-[#0d0f14]">Select a project type...</option>
                  <option value="web" className="bg-[#0d0f14]">Web Application</option>
                  <option value="mobile" className="bg-[#0d0f14]">Mobile App</option>
                  <option value="school" className="bg-[#0d0f14]">School Management System</option>
                  <option value="other" className="bg-[#0d0f14]">Other / General Inquiry</option>
                </select>
                <AnimatePresence>
                  {formErrors.subject && (
                    <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[0.7rem] font-medium px-1 mt-[-2px]">
                      This field is required
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-widest ml-1">
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your requirements..."
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
                      This field is required
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
                    className={`mt-2 p-4 rounded-xl border text-sm font-medium ${
                      statusMsg.type === 'success' 
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
                className={`w-full flex items-center justify-center gap-3 py-5 rounded-xl text-[#050507] font-display font-bold shadow-xl mt-2 transition-all ${
                  isLoading 
                    ? 'bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-80 cursor-not-allowed pointer-events-none' 
                    : 'bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:-translate-y-[2px] hover:shadow-[0_20px_40px_rgba(0,242,254,0.3)] hover:scale-[0.99] active:scale-95'
                }`}
              >
                {isLoading ? (
                  <>
                    <FiLoader size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Submit Inquiry <FiSend size={16} />
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
