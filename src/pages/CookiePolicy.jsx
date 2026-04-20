import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

export default function CookiePolicy() {
  const { t } = useTranslation()

  const sections = [
    {
      title: "1. What Are Cookies",
      content: "Cookies are small text files stored on your device when you visit a website."
    },
    {
      title: "2. Cookies We Use",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li><strong>Language preference (i18nextLng):</strong> stores your chosen language (EN or FR) so the site remembers your preference on your next visit. This is not a tracking cookie.</li>
        </ul>
      )
    },
    {
      title: "3. Cookies We Do NOT Use",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Advertising cookies</li>
          <li>Analytics tracking cookies (Google Analytics, etc.)</li>
          <li>Social media tracking pixels</li>
          <li>Third-party marketing cookies</li>
        </ul>
      )
    },
    {
      title: "4. Managing Cookies",
      content: "You can clear your browser cookies at any time in your browser settings. This will reset your language preference to English."
    },
    {
      title: "5. Contact",
      content: (
        <div className="flex flex-col gap-1">
          <p>Email: <a href="mailto:novacoretechnology37@gmail.com" className="text-[#00f2fe] hover:underline">novacoretechnology37@gmail.com</a></p>
        </div>
      )
    }
  ]

  return (
    <motion.div 
      className="min-h-screen bg-[#050507] pt-40 pb-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            LEGAL
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-slate-500 text-sm">Last updated: April 2026</p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {sections.map((section, idx) => (
            <motion.section 
              key={idx}
              className="pl-6 border-l-2 border-[#00f2fe22] hover:border-[#00f2fe] transition-colors duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="text-xl font-heading font-bold text-white mb-4">{section.title}</h2>
              <div className="text-slate-400 leading-relaxed text-base">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
