import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'EduSphere Admin Portal',
    category: 'Web Application',
    desc: 'A comprehensive school management system handling 50,000+ active students records with real-time grading, attendance, and fee processing.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop',
    color: 'text-[#00f2fe]'
  },
  {
    id: 2,
    title: 'FinCore Dashboard',
    category: 'Enterprise Software',
    desc: 'High-performance interactive financial dashboard providing deep analytics and real-time transaction monitoring for corporate clients.',
    tags: ['Vue', 'Python', 'GraphQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    color: 'text-[#ff6a00]'
  },
  {
    id: 3,
    title: 'HealthLink Mobile',
    category: 'Mobile App',
    desc: 'Cross-platform telemedicine application facilitating secure patient-doctor consultations, e-prescriptions, and continuous health tracking.',
    tags: ['React Native', 'Firebase', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    color: 'text-[#00f2fe]'
  },
  {
    id: 4,
    title: 'EcoLogistics Platform',
    category: 'System Architecture',
    desc: 'IoT integrated supply chain tracker for eco-friendly logistics optimization, reducing carbon footprint through smart route planning.',
    tags: ['Next.js', 'Go', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    color: 'text-[#ff6a00]'
  }
]

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function Portfolio() {
  return (
    <motion.div 
      className="min-h-screen bg-[#050507] text-slate-200"
      initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={staggerContainer}
    >
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,106,0,0.1)_0%,_transparent_60%)] rounded-full blur-[60px] pointer-events-none z-0"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">Our Work</div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">Selected Projects</h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              Explore how we've helped institutions and enterprises achieve their digital transformation goals through tailored software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6 md:px-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                className="group relative flex flex-col rounded-[2.5rem] bg-[#0d0f14cc] border border-white/5 overflow-hidden hover:border-white/10 transition-all shadow-2xl"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUpVariant}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy" />
                  
                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-[#050507cc] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                    <a href="#" className="w-14 h-14 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center text-white hover:bg-[#00f2fe] hover:text-[#050507] hover:border-[#00f2fe] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
                      <FiExternalLink size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center text-white hover:bg-[#ff6a00] hover:text-white hover:border-[#ff6a00] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-150">
                      <FiGithub size={24} />
                    </a>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-10 flex flex-col gap-5 flex-grow">
                  <div className={`${item.color} font-display font-bold text-xs uppercase tracking-widest`}>{item.category}</div>
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-[#00f2fe] transition-colors">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                  
                  {/* Tags */}
                  <div className="mt-auto pt-6 flex flex-wrap gap-2 border-t border-white/5">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-wider group-hover:border-white/10 group-hover:text-slate-300 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
