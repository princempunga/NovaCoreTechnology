import React from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiCheckCircle } from 'react-icons/fi'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function Features() {
  return (
    <motion.div 
      className="min-h-screen bg-[#050507] text-slate-200"
      initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={staggerContainer}
    >
      {/* Header */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_#00f2fe1a_0%,_transparent_60%)] rounded-full blur-[60px] pointer-events-none z-0"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6a001a] border border-[#ff6a0033] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">Live Demo</div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">System Demo & Features</h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              Take a closer look at our flagship school management dashboard and experience the power of Novacore systems firsthand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="pb-24 px-6 md:px-24">
        <div className="max-w-[1000px] mx-auto">
          <motion.div 
            className="group relative rounded-[3rem] bg-[#0d0f14] border border-white/10 overflow-hidden shadow-2xl transition-all hover:border-[#00f2fe33] aspect-video"
            variants={fadeUpVariant}
          >
            {/* Simulation Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[radial-gradient(circle_at_center,_#050507_0%,_#0d0f14_100%)]">
              <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              
              <div className="relative w-24 h-24 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center group-hover:bg-[#00f2fe] group-hover:text-[#050507] group-hover:border-[#00f2fe] group-hover:scale-110 transition-all duration-500 shadow-xl mb-8 group-hover:shadow-[0_0_40px_rgba(0,242,254,0.3)] cursor-pointer">
                <FiPlay size={36} className="ml-1" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10 transition-colors group-hover:text-[#00f2fe]">Interactive Admin Dashboard Trailer</h3>
              <p className="text-slate-500 font-display font-medium relative z-10">Click to play demo (Simulation)</p>
            </div>
            
            {/* Animated Borders */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          </motion.div>
        </div>
      </section>

      {/* Deep Feature List */}
      <section className="py-24 px-6 md:px-24 bg-white/[0.01] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">Inside the System</div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">Features That Empower Administration</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Our platform replaces disjointed tools with a unified suite that automates workflows and provides actionable insights.
            </p>
            
            <ul className="flex flex-col gap-6">
              {[
                { title: 'Role-Based Access Control', desc: 'Secure boundaries between admins, teachers, and students.' },
                { title: 'Real-time Analytics', desc: 'Graphical dashboards detailing enrollment, performance, and revenue.' },
                { title: 'Automated Communications', desc: 'Bulk SMS and email integrations for vital announcements.' },
                { title: 'Financial Integration', desc: 'Seamless fee tracking, invoicing, and mobile money hookups.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <FiCheckCircle className="text-[#00f2fe] shrink-0 mt-1" size={22} />
                  <span className="text-slate-300">
                    <strong className="text-white">{item.title}:</strong> {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="relative flex flex-col md:flex-row gap-6 p-8 rounded-[3rem]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Visual Mini-Chart Card 1 */}
            <div className="flex-1 p-10 rounded-[2.5rem] bg-[#0d0f14cc] backdrop-blur-xl border border-white/5 shadow-2xl hover:border-[#ff6a0033] transition-all group lg:translate-y-8">
              <h4 className="text-sm font-display font-bold text-slate-500 uppercase tracking-widest mb-10">Revenue Growth</h4>
              <div className="flex items-end gap-3 h-32">
                <div className="w-full bg-white/5 rounded-t-md group-hover:bg-white/10 transition-colors" style={{ height: '40%' }}></div>
                <div className="w-full bg-white/5 rounded-t-md group-hover:bg-white/10 transition-colors" style={{ height: '60%' }}></div>
                <div className="w-full bg-[#00f2fe] rounded-t-lg shadow-[0_0_20px_rgba(0,242,254,0.3)] group-hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all" style={{ height: '90%' }}></div>
                <div className="w-full bg-white/5 rounded-t-md group-hover:bg-white/10 transition-colors" style={{ height: '70%' }}></div>
              </div>
            </div>
            
            {/* Visual Mini-Chart Card 2 */}
            <div className="flex-1 p-10 rounded-[2.5rem] bg-[#0d0f14cc] backdrop-blur-xl border border-white/5 shadow-2xl hover:border-[#00f2fe33] transition-all group">
               <h4 className="text-sm font-display font-bold text-slate-500 uppercase tracking-widest mb-6">Active Users</h4>
               <p className="text-[#ff6a00] text-5xl font-heading font-bold mb-2 drop-shadow-[0_0_15px_rgba(255,106,0,0.2)] leading-none text-nowrap tracking-tight">1,204</p>
               <p className="text-emerald-500 text-xs font-display font-bold">+14% this month</p>
               
               <div className="mt-10 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-[#ff6a00] to-orange-400 w-3/4 shadow-[0_0_10px_#ff6a0066]"></div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
