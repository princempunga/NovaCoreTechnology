import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("This is a demo frontend. Form submission would interface with the API.")
  }

  return (
    <motion.div 
      className="min-h-screen bg-[#050507] text-slate-200"
      initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={staggerContainer}
    >
      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_#ff6a001a_0%,_transparent_60%)] rounded-full blur-[60px] pointer-events-none z-0"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">Connect</div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">Let's Work Together</h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              Whether you need a complete enterprise system overhaul or a specialized web application, our team is ready to deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-32 px-6 md:px-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Contact Info */}
          <motion.div 
            className="flex flex-col gap-12"
            variants={fadeUpVariant}
          >
             <div>
               <h2 className="text-3xl font-heading font-bold text-white mb-6">Technical Consultation</h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                 Reach out to us directly or fill out the form, and a technical coordinator will get back to you within 24 hours.
               </p>
             </div>

             <div className="flex flex-col gap-6">
                {[
                  { icon: <FiMail size={24} />, title: 'Email Us', info: 'info@novacoretechnology.com', href: 'mailto:info@novacoretechnology.com', color: 'text-[#00f2fe]' },
                  { icon: <FiPhone size={24} />, title: 'Call Us', info: '+243 000 000 000', href: 'tel:+243000000000', color: 'text-[#ff6a00]' },
                  { icon: <FiMapPin size={24} />, title: 'Visit Us', info: 'Kinshasa, Democratic Republic of Congo', color: 'text-[#00f2fe]' },
                ].map((method, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group">
                    <div className={`w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl bg-white/[0.03] ${method.color} group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold mb-1">{method.title}</h4>
                      {method.href ? (
                        <a href={method.href} className="text-slate-400 hover:text-[#00f2fe] transition-colors">{method.info}</a>
                      ) : (
                        <span className="text-slate-400">{method.info}</span>
                      )}
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="p-10 md:p-14 rounded-[3rem] bg-[#0d0f14cc] backdrop-blur-3xl border border-white/5 shadow-2xl relative"
            variants={fadeUpVariant}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent"></div>
            
            <h3 className="text-2xl font-heading font-bold text-white mb-10">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-display font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    type="text" id="name" required 
                    placeholder="John Doe" 
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-display font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" id="email" required 
                    placeholder="john@company.com" 
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-display font-bold text-slate-500 uppercase tracking-widest ml-1">Subject / Project Type</label>
                <select 
                  id="subject" required
                  className="bg-[#0d0f14] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0d0f14]">Select a subject...</option>
                  <option value="web" className="bg-[#0d0f14]">Web Application</option>
                  <option value="mobile" className="bg-[#0d0f14]">Mobile App</option>
                  <option value="school" className="bg-[#0d0f14]">School Management System</option>
                  <option value="other" className="bg-[#0d0f14]">Other / General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-display font-bold text-slate-500 uppercase tracking-widest ml-1">Project Details</label>
                <textarea 
                  id="message" required 
                  placeholder="Tell us about your requirements..." 
                  rows="4"
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 py-5 rounded-2xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#050507] font-display font-bold shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/30 transition-all mt-4"
              >
                Submit Inquiry <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
