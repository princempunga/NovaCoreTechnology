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

const LegalSection = ({ title, children, index }) => (
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

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mb-8">
              How we collect, use, and protect your personal information.
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
          <LegalSection title="1. Introduction">
            <p className="mb-4">
              Welcome to NovaCore Technology ('we', 'our', or 'us'). We are a software engineering company headquartered in Kampala, Uganda, providing enterprise web applications, mobile apps, school management systems, cybersecurity services, and data analytics solutions to clients across Africa and internationally.
            </p>
            <p className="mb-4">
              We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at novacoretechnology.com or when you engage our services.
            </p>
            <p>
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We Collect">
            <p className="mb-4">
              We collect information that you voluntarily provide to us when you fill out our contact form, request a project estimate, or communicate with us directly.
            </p>
            <p className="font-bold text-white mb-2 font-heading">Personal Information you may provide includes:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Full name and professional title</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Email address and phone number</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Company or organization name</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Project requirements and business details</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Any other information you choose to share</span>
              </li>
            </ul>

            <p className="font-bold text-white mb-2 font-heading">Technical Information collected automatically:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>IP address and browser type</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Pages visited and time spent on each page</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Referring website or source</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Device type and operating system</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Geographic location (country/city level only)</span>
              </li>
            </ul>
            <p>
              We collect this technical data using standard web analytics tools to improve our website performance and user experience. We do NOT collect payment information directly — all financial transactions are processed through secure third-party payment providers.
            </p>
          </LegalSection>

          <LegalSection title="3. How We Use Your Information">
            <p className="mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>To respond to your inquiries and project requests within 24 hours as promised</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>To prepare and deliver project proposals, quotes, and technical assessments</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>To communicate project updates, milestones, and deliverables to active clients</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>To improve our website content, services, and user experience</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>To send relevant updates about our services (only with your explicit consent)</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>To comply with legal obligations and resolve any disputes that may arise</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>To protect the security and integrity of our systems and services</span>
              </li>
            </ul>
            <p>
              We will never sell, rent, or trade your personal information to third parties for marketing purposes. Period.
            </p>
          </LegalSection>

          <LegalSection title="4. How We Share Your Information">
            <p className="mb-4">
              We do not share your personal information with third parties except in the following limited circumstances:
            </p>
            <p className="mb-4"><strong className="text-white">Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and delivering our services, such as:</p>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>EmailJS (email delivery service)</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Cloud hosting providers (AWS, Netlify, Vercel)</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Analytics platforms (used in aggregate, anonymized form only)</span>
              </li>
            </ul>
            <p className="mb-6">
              These providers are contractually bound to keep your information confidential and may only use it to perform services on our behalf.
            </p>
            <p className="mb-6"><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect the rights, property, or safety of NovaCore Technology, our clients, or the public.</p>
            <p><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our website before your information becomes subject to a different privacy policy.</p>
          </LegalSection>

          <LegalSection title="5. Data Security">
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="font-bold text-white mb-2 font-heading">Our security measures include:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>TLS 1.3 encryption for all data transmitted between your browser and our servers</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>AES-256 encryption for sensitive data stored in our systems</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Strict role-based access controls limiting who can access client information</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Secure, access-controlled cloud infrastructure</span>
              </li>
            </ul>
            <p className="mb-4">
              However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
            <p>
              In the unlikely event of a data breach that affects your personal information, we will notify you within 72 hours of becoming aware of the breach, in accordance with applicable data protection regulations.
            </p>
          </LegalSection>

          <LegalSection title="6. Data Retention">
            <p className="mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            <p className="font-bold text-white mb-2 font-heading">Specifically:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Contact form inquiries: retained for 2 years from the date of last communication</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Active client project data: retained for the duration of the project plus 3 years</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Financial and invoicing records: retained for 7 years as required by Ugandan tax law</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Website analytics data: retained for 13 months in aggregate, anonymized form</span>
              </li>
            </ul>
            <p>
              When your information is no longer needed, we will securely delete or anonymize it. Upon request, we can delete your personal data within 30 days, subject to any legal retention obligations.
            </p>
          </LegalSection>

          <LegalSection title="7. Your Rights">
            <p className="mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>Right to Correction:</strong> Request that we correct inaccurate or incomplete information</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>Right to Deletion:</strong> Request that we delete your personal information ('right to be forgotten')</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>Right to Restriction:</strong> Request that we restrict the processing of your information</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>Right to Portability:</strong> Request your data in a structured, machine-readable format</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>Right to Object:</strong> Object to our processing of your personal information</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</span>
              </li>
            </ul>
            
            <div className="bg-white/[0.03] border-l-4 border-cyan-400 p-6 rounded-r-xl">
              <p className="mb-2">To exercise any of these rights, please contact us at:</p>
              <p className="font-bold text-white text-lg tracking-wide">princempunga5@gmail.com</p>
              <p className="mt-4 text-sm text-slate-500 italic">
                We will respond to all legitimate requests within 30 days. We may need to verify your identity before processing your request.
              </p>
            </div>
          </LegalSection>

          <LegalSection title="8. Cookies">
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. For detailed information about the cookies we use and your choices regarding cookies, please see our <a href="/cookie-policy" className="text-cyan-400 hover:underline">Cookie Policy</a>.
            </p>
          </LegalSection>

          <LegalSection title="9. Third-Party Links">
            <p className="mb-4">
              Our website may contain links to third-party websites, including our portfolio project references and technology partner sites. We have no control over the content or privacy practices of these sites and are not responsible for their privacy policies.
            </p>
            <p>
              We encourage you to review the privacy policy of every site you visit.
            </p>
          </LegalSection>

          <LegalSection title="10. Children's Privacy">
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <span className="text-white">princempunga5@gmail.com</span> and we will take steps to delete such information.
            </p>
          </LegalSection>

          <LegalSection title="11. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make material changes, we will update the 'Last Updated' date at the top of this page and notify active clients via email. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact Us">
            <div className="bg-white/[0.03] border-l-4 border-cyan-400 p-8 rounded-r-xl">
              <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="space-y-1">
                <p className="text-white font-bold">NovaCore Technology</p>
                <p>Kampala, Uganda — East Africa</p>
                <p className="text-cyan-400 font-medium">Email: princempunga5@gmail.com</p>
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
