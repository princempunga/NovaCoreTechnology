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

export default function PrivacyPolicy() {
  const { t } = useTranslation()

  const sections = [
    {
      title: "1. Introduction",
      content: "NovaCore Technology ('we', 'us', 'our') is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect data submitted through our website novacoretechnology.com"
    },
    {
      title: "2. Information We Collect",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Full name and email address (via contact form)</li>
          <li>Project description you provide</li>
          <li>General location (country/city level only)</li>
          <li>We do NOT collect payment information</li>
          <li>We do NOT use tracking cookies</li>
        </ul>
      )
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>To respond to your project inquiry</li>
          <li>To send you project-related communications</li>
          <li>We never sell your data to third parties</li>
          <li>We never share your data without your consent</li>
        </ul>
      )
    },
    {
      title: "4. Data Storage",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Form submissions are processed via EmailJS</li>
          <li>We do not store form data on our own servers</li>
          <li>Emails are stored in our Gmail inbox only</li>
          <li>You may request deletion at any time by emailing: novacoretechnology37@gmail.com</li>
        </ul>
      )
    },
    {
      title: "5. Your Rights",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Right to access your data</li>
          <li>Right to correct your data</li>
          <li>Right to delete your data</li>
          <li>Right to withdraw consent at any time</li>
          <li>Contact us at: novacoretechnology37@gmail.com</li>
        </ul>
      )
    },
    {
      title: "6. Cookies",
      content: (
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Our website uses minimal cookies only</li>
          <li>We use localStorage only to remember your language preference (EN/FR)</li>
          <li>We do not use advertising or tracking cookies</li>
        </ul>
      )
    },
    {
      title: "7. Contact",
      content: (
        <div className="flex flex-col gap-1">
          <p>For any privacy-related questions, contact us:</p>
          <p>Email: <a href="mailto:novacoretechnology37@gmail.com" className="text-[#00f2fe] hover:underline">novacoretechnology37@gmail.com</a></p>
          <p>Location: Kampala, Uganda</p>
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Privacy Policy</h1>
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
