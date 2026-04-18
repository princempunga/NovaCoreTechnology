import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'

const CATEGORIES = ['All', 'Web Application', 'Enterprise Software', 'Mobile App', 'System Architecture']

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'EduSphere Admin Portal',
    category: 'Web Application',
    desc: 'A comprehensive school management system handling 50,000+ active student records with real-time grading, attendance, and fee processing.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2024',
  },
  {
    id: 2,
    title: 'FinCore Dashboard',
    category: 'Enterprise Software',
    desc: 'High-performance interactive financial dashboard providing deep analytics and real-time transaction monitoring for corporate clients.',
    tags: ['Vue', 'Python', 'GraphQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 3,
    title: 'HealthLink Mobile',
    category: 'Mobile App',
    desc: 'Cross-platform telemedicine application facilitating secure patient-doctor consultations, e-prescriptions, and health tracking.',
    tags: ['React Native', 'Firebase', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 4,
    title: 'EcoLogistics Platform',
    category: 'System Architecture',
    desc: 'IoT integrated supply chain tracker for eco-friendly logistics optimization, reducing carbon footprint through smart route planning.',
    tags: ['Next.js', 'Go', 'MongoDB', 'Docker'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2023',
  },
  {
    id: 5,
    title: 'MediBook Pro',
    category: 'Web Application',
    desc: 'Online appointment booking system for hospitals with doctor scheduling and patient records.',
    tags: ['React', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 6,
    title: 'LegalTrack',
    category: 'Web Application',
    desc: 'Case management platform for law firms with document storage and court date reminders.',
    tags: ['Vue', 'Django', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 7,
    title: 'RecruitFlow',
    category: 'Web Application',
    desc: 'ATS (Applicant Tracking System) with pipeline visualization and interview scheduling.',
    tags: ['React', 'Node.js', 'Elasticsearch'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 8,
    title: 'HotelNest PMS',
    category: 'Web Application',
    desc: 'Property management system for hotels with room booking, housekeeping and billing.',
    tags: ['Next.js', 'GraphQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 9,
    title: 'AgroLink Marketplace',
    category: 'Web Application',
    desc: 'B2B agricultural trading platform connecting farmers to buyers with price tracking.',
    tags: ['Angular', 'Spring Boot', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1595841696650-f1cc23f2f5fd?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 10,
    title: 'FleetCommand',
    category: 'Enterprise Software',
    desc: 'Vehicle fleet management system with GPS tracking, fuel logs, and maintenance alerts.',
    tags: ['React', 'Go', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 11,
    title: 'AssetGuard ERP',
    category: 'Enterprise Software',
    desc: 'Enterprise resource planning for inventory, procurement, and supplier management.',
    tags: ['Vue.js', 'Python', 'Redis'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 12,
    title: 'PayrollEdge',
    category: 'Enterprise Software',
    desc: 'Automated payroll processing system with tax computation and payslip generation.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 13,
    title: 'ComplianceIQ',
    category: 'Enterprise Software',
    desc: 'Regulatory compliance tracking tool for financial institutions with audit trail reports.',
    tags: ['Next.js', 'Django', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 14,
    title: 'PulseHealth',
    category: 'Mobile App',
    desc: 'Personalized health and fitness tracking application for real-time vitals monitoring.',
    tags: ['Flutter', 'Firebase', 'HealthKit'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 15,
    title: 'CashLens',
    category: 'Mobile App',
    desc: 'Personal finance app with receipt scanning, budget tracking, and spending insights.',
    tags: ['React Native', 'Node.js', 'AWS Textract'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 16,
    title: 'TripNest',
    category: 'Mobile App',
    desc: 'Travel planning app with itinerary builder, offline maps, and hotel bookings.',
    tags: ['Swift', 'Kotlin', 'Google Maps API'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 17,
    title: 'VendorGo',
    category: 'Mobile App',
    desc: 'Mobile marketplace for street vendors and SMEs to manage orders and payments.',
    tags: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 18,
    title: 'StudyPulse',
    category: 'Mobile App',
    desc: 'Student productivity app with timetables, assignment reminders, and grade tracking.',
    tags: ['Flutter', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 19,
    title: 'DataBridge API Gateway',
    category: 'System Architecture',
    desc: 'Microservices API gateway with rate limiting, auth, and traffic analytics.',
    tags: ['Go', 'Redis', 'Kubernetes'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 20,
    title: 'CloudVault',
    category: 'System Architecture',
    desc: 'Secure cloud storage architecture with end-to-end encryption and role-based access.',
    tags: ['AWS S3', 'Python', 'KMS'],
    image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  },
  {
    id: 21,
    title: 'StreamSync',
    category: 'System Architecture',
    desc: 'Real-time event streaming infrastructure using Kafka for high-volume transaction processing.',
    tags: ['Apache Kafka', 'Java', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    accent: '#00f2fe',
    year: '2023',
  },
  {
    id: 22,
    title: 'SecureEdge Zero Trust',
    category: 'System Architecture',
    desc: 'Zero-trust network architecture for enterprise security with identity verification.',
    tags: ['Terraform', 'Azure', 'C#'],
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1000&auto=format&fit=crop',
    accent: '#ff6a00',
    year: '2024',
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }
  })
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(p => p.category === activeFilter)

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
          style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 9, repeat: Infinity }}
        />
        <div className="max-w-[1280px] mx-auto px-6 md:px-24 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
              Our Work
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">Selected Projects</h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              Explore how we've helped institutions and enterprises achieve their digital transformation goals through tailored software solutions.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-5 py-2 rounded-full text-xs font-display font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? 'text-[#050507] bg-[#00f2fe] shadow-[0_0_20px_rgba(0,242,254,0.4)]'
                    : 'text-slate-400 bg-white/[0.03] border border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-32 px-6 md:px-24">
        <div className="max-w-[1280px] mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="group relative flex flex-col rounded-3xl bg-[#0d0f14cc] border border-white/5 overflow-hidden shadow-2xl"
                >
                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `inset 0 0 0 1px ${item.accent}30` }}
                  />

                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image} alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-[#0d0f1460] to-transparent" />

                    {/* Category + Year badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-[0.6rem] font-display font-bold uppercase tracking-widest"
                        style={{ backgroundColor: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}40` }}
                      >
                        {item.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#050507] text-slate-400 text-[0.6rem] font-display font-bold border border-white/10">
                        {item.year}
                      </span>
                    </div>

                    {/* Actions overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      {[
                        { icon: <FiExternalLink size={20} />, hoverColor: item.accent },
                        { icon: <FiGithub size={20} />, hoverColor: '#ffffff' },
                      ].map((btn, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          className="w-12 h-12 rounded-full bg-[#050507] border border-white/10 flex items-center justify-center text-white transition-all duration-300"
                          whileHover={{ scale: 1.15, backgroundColor: btn.hoverColor, color: '#050507' }}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {btn.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col gap-4 flex-grow">
                    <h3
                      className="text-2xl font-heading font-bold text-white group-hover:transition-colors duration-300"
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>

                    {/* Tags */}
                    <div className="mt-auto pt-5 flex flex-wrap gap-2 border-t border-white/5">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-[0.65rem] font-display font-bold text-slate-500 uppercase tracking-wider group-hover:border-white/10 group-hover:text-slate-300 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View project link */}
                    <motion.div
                      className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: item.accent }}
                    >
                      View Case Study <FiArrowRight size={13} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
