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

export default function TermsOfService() {
  const { t } = useTranslation()

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing novacoretechnology.com, you agree to these Terms of Service. If you disagree, please do not use our website."
    },
    {
      title: "2. Services",
      content: "NovaCore Technology provides custom software development services including web applications, mobile apps, and digital infrastructure. All project terms are defined in individual client contracts."
    },
    {
      title: "3. Intellectual Property",
      content: "Upon full payment, clients receive complete ownership of all custom code developed for their project. NovaCore Technology retains the right to display completed projects in our portfolio unless otherwise agreed."
    },
    {
      title: "4. Limitation of Liability",
      content: "NovaCore Technology is not liable for indirect damages arising from use of delivered software. Our liability is limited to the contract value of the specific project."
    },
    {
      title: "5. Governing Law",
      content: "These terms are governed by the laws of the Republic of Uganda."
    },
    {
      title: "6. Contact",
      content: (
        <div className="flex flex-col gap-1">
          <p>Questions about these terms:</p>
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Terms of Service</h1>
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
