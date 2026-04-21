import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const LegalSection = ({ title, children }) => (
  <motion.section 
    className="py-10 border-b border-white/5 last:border-0"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeUp}
  >
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-heading font-bold text-white border-l-4 border-cyan-400 pl-4">
        {title}
      </h2>
      <div className="text-slate-300 leading-relaxed text-base">
        {children}
      </div>
    </div>
  </motion.section>
)

export default function TermsOfService() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className="min-h-screen bg-[#050507]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 font-display text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
              LEGAL
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mb-8">
              The rules and agreements that govern your use of our services.
            </p>
            <div className="px-4 py-1.5 rounded-full bg-[#ff6b351a] border border-[#ff6b3533] text-[#ff6b35] font-display text-xs font-medium">
              Last Updated: April 20, 2026
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex flex-col">
          <LegalSection title="1. Acceptance of Terms">
            <p className="mb-4">
              By accessing our website at novacoretechnology.com or engaging any of our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site or services.
            </p>
            <p>
              These Terms of Service apply to all visitors, users, and clients of NovaCore Technology. We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </LegalSection>

          <LegalSection title="2. Our Services">
            <p className="mb-4">
              NovaCore Technology provides professional software engineering services including but not limited to:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Enterprise Web Application Development</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>School Management System Development</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Native and Hybrid Mobile App Development</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Cybersecurity Auditing and Implementation</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Data Analytics Dashboard Development</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>API Development and Integration</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Cloud Architecture and DevOps</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>UI/UX Design and Prototyping</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Post-launch Maintenance and Support</span>
              </li>
            </ul>
            <p>
              All services are subject to a separate written project agreement (contract) signed by both parties before work commences. These Terms of Service govern the general relationship between NovaCore Technology and its clients and website visitors.
            </p>
          </LegalSection>

          <LegalSection title="3. Project Agreements & Contracts">
            <p className="mb-4">
              For all client engagements, a formal Project Agreement will be provided outlining:
            </p>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Detailed scope of work and deliverables</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Project timeline and milestones</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Payment schedule and amounts</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Intellectual property ownership terms</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Confidentiality obligations</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Warranty and support terms</span>
              </li>
            </ul>
            <p>
              The Project Agreement takes precedence over these Terms of Service in the event of any conflict regarding a specific project.
            </p>
          </LegalSection>

          <LegalSection title="4. Payment Terms">
            <p className="mb-4">Our standard payment structure is milestone-based:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>40% upfront deposit</strong> before work begins</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>40% upon design approval</strong> and core development milestone</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>20% upon final delivery</strong> and client approval</span>
              </li>
            </ul>
            
            <p className="font-bold text-white mb-2 font-heading">Accepted payment methods:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Bank transfer (Uganda and international)</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Mobile Money (MTN Uganda, Airtel Uganda)</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>International wire transfer</span></li>
            </ul>

            <p className="mb-4">
              Payment is due within 7 business days of each milestone invoice. Late payments beyond 14 days may result in work suspension until the outstanding balance is settled.
            </p>
            <p className="text-sm text-slate-500 italic">
              All prices are quoted in USD unless otherwise agreed. Applicable taxes are the responsibility of the client in their jurisdiction.
            </p>
          </LegalSection>

          <LegalSection title="5. Intellectual Property">
            <p className="mb-4">
              Upon receipt of full and final payment, NovaCore Technology transfers complete ownership of all custom code, designs, and deliverables created specifically for the client's project.
            </p>
            <p className="font-bold text-white mb-2 font-heading">This includes:</p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              <li className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Full source code with commit history</span>
              </li>
              <li className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Design files and assets</span>
              </li>
              <li className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Documentation and deployment guides</span>
              </li>
              <li className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex gap-3">
                <span className="text-cyan-400">✓</span>
                <span>Database schemas and architecture documents</span>
              </li>
            </ul>
            <p className="mb-4 font-bold text-white">NovaCore Technology retains the right to:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Display the project in our portfolio (unless the client requests confidentiality in writing)</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Reference the project in marketing materials with client permission</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Reuse non-project-specific code patterns, libraries, and architectural approaches</span></li>
            </ul>
            <p className="text-sm text-slate-500">
              Third-party libraries, frameworks, and tools used in the project remain subject to their respective open-source licenses.
            </p>
          </LegalSection>

          <LegalSection title="6. Confidentiality & NDAs">
            <p className="mb-4">
              NovaCore Technology treats all client information as strictly confidential. We do not disclose business processes, system architecture, data structures, or any proprietary information shared by clients to third parties without explicit written consent.
            </p>
            <p className="mb-4">
              We sign Non-Disclosure Agreements (NDAs) as standard practice for all client engagements involving sensitive business information. NDAs are available upon request before any detailed project discussions begin.
            </p>
            <p>
              Our team members are bound by confidentiality obligations that survive the termination of their engagement with NovaCore Technology.
            </p>
          </LegalSection>

          <LegalSection title="7. Client Responsibilities">
            <p className="mb-4">To ensure successful project delivery, clients are responsible for:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Providing accurate, complete, and timely information required for the project</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Reviewing and approving deliverables within agreed timeframes (typically 5 business days per review cycle)</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Ensuring all content provided (text, images, data) does not infringe on third-party intellectual property rights</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Making payments according to the agreed schedule</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Providing access to necessary third-party systems, APIs, and credentials required for the project</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Designating a single point of contact for project communication</span></li>
            </ul>
            <p className="text-orange-400/80 italic text-sm">
              Delays caused by late client feedback, missing information, or delayed payments may result in project timeline adjustments.
            </p>
          </LegalSection>

          <LegalSection title="8. Warranties & Post-Launch Support">
            <p className="mb-4 font-bold text-white font-heading text-lg">NovaCore Technology warrants that all deliverables will:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Function as specified in the agreed project scope</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Be free from critical bugs at the time of delivery</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Be built using current, industry-standard technologies and best practices</span></li>
            </ul>

            <div className="bg-white/[0.03] border-l-4 border-cyan-400 p-6 rounded-r-xl">
              <p className="font-bold text-white mb-2 font-display uppercase tracking-widest text-xs">Post-launch warranty period:</p>
              <ul className="space-y-2">
                <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>30 days of free bug fixes for issues directly related to our work</span></li>
                <li className="flex gap-3 items-baseline"><span className="text-red-400">•</span><span className="text-slate-500">Excludes issues caused by client modifications, third-party service changes, or user error</span></li>
              </ul>
              <p className="mt-6 text-sm">
                After the warranty period, ongoing support is available through our monthly maintenance retainer packages.
              </p>
            </div>
          </LegalSection>

          <LegalSection title="9. Limitation of Liability">
            <p className="mb-4">To the maximum extent permitted by applicable law, NovaCore Technology shall not be liable for:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-baseline"><span className="text-red-400/50">•</span><span>Any indirect, incidental, special, or consequential damages arising from the use of our services</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-red-400/50">•</span><span>Loss of profits, data, or business opportunities</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-red-400/50">•</span><span>Damages arising from third-party service failures (hosting providers, payment gateways, SMS services, etc.)</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-red-400/50">•</span><span>Security breaches caused by client-side vulnerabilities or unauthorized access due to client negligence</span></li>
            </ul>
            <p className="mb-4">
              Our total liability for any claim related to a specific project shall not exceed the total fees paid by the client for that specific project.
            </p>
            <p className="text-sm italic text-slate-500">
              Nothing in these terms limits our liability for fraud, gross negligence, or intentional misconduct.
            </p>
          </LegalSection>

          <LegalSection title="10. Termination">
            <p className="mb-6">Either party may terminate a project agreement with 14 days written notice.</p>
            
            <p className="font-bold text-white mb-4">In the event of termination:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Client pays for all work completed up to the termination date</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>NovaCore Technology delivers all completed work and source code produced up to that point</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Any unpaid invoices become immediately due and payable</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Confidentiality obligations remain in effect after termination</span></li>
            </ul>
            
            <p className="text-red-400/80 text-sm">
              NovaCore Technology reserves the right to terminate services immediately without notice if the client engages in illegal activities, abusive behavior toward our team, or persistent non-payment.
            </p>
          </LegalSection>

          <LegalSection title="11. Governing Law">
            <p className="mb-4">
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of Uganda. Any disputes arising from these terms or our services shall first be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to mediation before pursuing legal action.
            </p>
            <p>
              The courts of Kampala, Uganda shall have jurisdiction over any disputes that cannot be resolved through mediation.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact Us">
            <div className="bg-white/[0.03] border-l-4 border-cyan-400 p-8 rounded-r-xl">
              <p className="mb-4">For questions about these Terms of Service or to request an NDA, please contact:</p>
              <div className="space-y-1">
                <p className="text-white font-bold">NovaCore Technology</p>
                <p>Kampala, Uganda — East Africa</p>
                <p className="text-[#ff6b35] font-medium">Email: {t('contact.info.email.value')}</p>
                <p>Phone: +256 784630448</p>
                <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest font-bold">Response time: Within 24 hours</p>
              </div>
            </div>
          </LegalSection>
        </div>
      </div>
    </motion.div>
  )
}
