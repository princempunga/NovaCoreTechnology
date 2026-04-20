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

export default function CookiePolicy() {
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
              Cookie Policy
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mb-8">
              How we use cookies and similar technologies on our website.
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
          <LegalSection title="1. What Are Cookies?">
            <p className="mb-4">
              Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners about how their site is being used.
            </p>
            <p>
              Cookies cannot carry viruses or install malware on your device. They simply store small amounts of data that help improve your browsing experience.
            </p>
          </LegalSection>

          <LegalSection title="2. Cookies We Use">
            <p className="mb-6">
              We use the following categories of cookies on novacoretechnology.com:
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  ESSENTIAL COOKIES (Always Active)
                </h3>
                <p className="text-sm text-slate-500 mb-4 ml-4">These cookies are necessary for our website to function properly and cannot be disabled.</p>
                <ul className="space-y-2 ml-8">
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span><strong>Session cookies:</strong> Maintain your session as you navigate between pages</span></li>
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span><strong>Security cookies:</strong> Help protect against cross-site request forgery (CSRF) attacks</span></li>
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span><strong>Language preference:</strong> Remember your selected language (EN or FR)</span></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  ANALYTICS COOKIES (Optional)
                </h3>
                <p className="text-sm text-slate-500 mb-4 ml-4">These cookies help us understand how visitors interact with our website.</p>
                <ul className="space-y-2 ml-8 mb-4">
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Page visit tracking: Which pages are most visited</span></li>
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Traffic sources: How visitors find our website</span></li>
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Session duration: How long visitors spend on the site</span></li>
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Device and browser information: To optimize for different devices</span></li>
                </ul>
                <p className="text-sm italic ml-4">
                  All analytics data is collected in aggregate, anonymized form. We cannot identify individual visitors from this data.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  PREFERENCE COOKIES (Optional)
                </h3>
                <ul className="space-y-2 ml-8">
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Language selection (EN/FR) persisted across sessions via localStorage</span></li>
                  <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Theme preferences if applicable</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-xl bg-red-400/5 border border-red-400/20">
              <p className="font-bold text-white mb-2">We do NOT use:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                <li className="flex gap-2"><span>❌</span><span className="text-slate-500">Advertising or retargeting cookies</span></li>
                <li className="flex gap-2"><span>❌</span><span className="text-slate-500">Social media tracking cookies</span></li>
                <li className="flex gap-2"><span>❌</span><span className="text-slate-500">Cross-site tracking cookies</span></li>
                <li className="flex gap-2"><span>❌</span><span className="text-slate-500">Third-party marketing cookies</span></li>
              </ul>
            </div>
          </LegalSection>

          <LegalSection title="3. Third-Party Cookies">
            <p className="mb-4">
              Our website uses a small number of third-party services that may set their own cookies:
            </p>
            <div className="bg-white/[0.03] p-6 rounded-xl border border-white/5">
              <h4 className="text-white font-bold mb-2">EmailJS (contact form delivery):</h4>
              <ul className="space-y-1 text-sm mb-4">
                <li><span className="text-slate-500">Purpose:</span> Enables our contact form to send emails without a backend server</li>
                <li><span className="text-slate-500">Data collected:</span> Form submission data only (name, email, message)</li>
              </ul>
              <a href="https://www.emailjs.com/legal/privacy-policy" target="_blank" rel="noreferrer" className="text-cyan-400 text-xs hover:underline">
                View EmailJS Privacy Policy →
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500 italic">
              These third-party services are carefully selected and are bound by their own privacy policies. We do not use Google Analytics, Facebook Pixel, or any advertising networks.
            </p>
          </LegalSection>

          <LegalSection title="4. Managing Your Cookie Preferences">
            <p className="mb-6">
              You have full control over cookies on your device. Here is how to manage them in major browsers:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                { name: 'Google Chrome', path: 'Settings → Privacy and Security → Cookies and other site data' },
                { name: 'Mozilla Firefox', path: 'Settings → Privacy & Security → Cookies and Site Data' },
                { name: 'Microsoft Edge', path: 'Settings → Cookies and site permissions → Cookies and site data' },
                { name: 'Safari (Mac)', path: 'Preferences → Privacy → Manage Website Data' },
                { name: 'Safari (iOS)', path: 'Settings → Safari → Clear History and Website Data' }
              ].map((browser) => (
                <div key={browser.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <p className="font-bold text-white text-sm mb-2">{browser.name}</p>
                  <p className="text-[11px] text-slate-500 leading-tight">{browser.path}</p>
                </div>
              ))}
            </div>
            <p className="text-orange-400/80 text-xs flex gap-2">
              <span>⚠️</span>
              <span>Please note: Disabling essential cookies may affect the functionality of our website, such as the language switcher and contact form.</span>
            </p>
          </LegalSection>

          <LegalSection title="5. localStorage and Session Storage">
            <p className="mb-4">
              In addition to cookies, our website uses browser localStorage to store:
            </p>
            <ul className="space-y-2 mb-6 ml-4">
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>Your language preference (EN or FR) so it persists across browser sessions</span>
              </li>
              <li className="flex gap-3 items-baseline">
                <span className="text-cyan-400">•</span>
                <span>No personal information is stored in localStorage</span>
              </li>
            </ul>
            <p>
              localStorage data is stored only on your device and is never transmitted to our servers. You can clear localStorage data through your browser's developer tools or by clearing your browser's site data.
            </p>
          </LegalSection>

          <LegalSection title="6. Cookie Consent">
            <p className="mb-4">
              By continuing to use our website, you consent to our use of essential cookies as described in this policy.
            </p>
            <p className="mb-4">
              For optional analytics cookies, we rely on your continued use of the site as implied consent, given that:
            </p>
            <ul className="space-y-2 mb-8 ml-4">
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>We do not use advertising cookies</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>All analytics data is anonymized</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>No personal profiles are created</span></li>
              <li className="flex gap-3 items-baseline"><span className="text-cyan-400">•</span><span>Data is used only to improve our website</span></li>
            </ul>
            <p>
              You can withdraw consent at any time by clearing your cookies and localStorage in your browser settings.
            </p>
          </LegalSection>

          <LegalSection title="7. Updates to This Cookie Policy">
            <p>
              We may update this Cookie Policy periodically to reflect changes in the cookies we use or for operational, legal, or regulatory reasons. When we make significant changes, we will update the 'Last Updated' date at the top of this page. We encourage you to check this page occasionally for any changes.
            </p>
          </LegalSection>

          <LegalSection title="8. Contact Us">
            <div className="bg-white/[0.03] border-l-4 border-cyan-400 p-8 rounded-r-xl">
              <p className="mb-4">If you have questions about our use of cookies or this Cookie Policy, please contact us:</p>
              <div className="space-y-1 text-base">
                <p className="text-white font-bold">NovaCore Technology</p>
                <p className="text-slate-400">Kampala, Uganda — East Africa</p>
                <p className="text-cyan-400 font-medium tracking-wide">Email: princempunga5@gmail.com</p>
                <p className="text-slate-400">Phone: +256 784630448</p>
                <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest font-bold">Response time: Within 24 hours</p>
              </div>
            </div>
          </LegalSection>
        </div>
      </div>
    </motion.div>
  )
}
