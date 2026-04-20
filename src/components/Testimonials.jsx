import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#fbbf24] text-lg">★</span>
      ))}
    </div>
  )
}

function TestimonialCard({ card }) {
  return (
    <div
      className="testimonial-card shrink-0 p-6 rounded-xl border transition-all duration-300 cursor-default"
      style={{
        width: '380px',
        minWidth: '300px',
        maxWidth: '380px',
        backgroundColor: '#111111',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0,255,255,0.4)'
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <StarRating />

      <p className="text-white text-sm leading-relaxed italic mb-5">
        "{card.quote}"
      </p>

      <div className="h-px bg-white/[0.06] mb-5" />

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-heading font-bold text-white text-sm"
          style={{ backgroundColor: card.avatarColor }}
        >
          {card.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-heading font-bold text-sm truncate">{card.name}</p>
          <p className="text-slate-400 text-xs truncate">{card.title} · {card.company}</p>
        </div>
        <span
          className="shrink-0 text-[10px] font-display font-bold tracking-widest px-2.5 py-1 rounded-full"
          style={{ backgroundColor: 'rgba(0,255,255,0.1)', color: '#00ffff' }}
        >
          {card.badge}
        </span>
      </div>
    </div>
  )
}

function MarqueeRow({ cards, direction = 'left' }) {
  const doubled = [...cards, ...cards]
  const animClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div
        className={`flex gap-6 w-max ${animClass} hover:[animation-play-state:paused]`}
      >
        {doubled.map((card, i) => (
          <TestimonialCard key={i} card={card} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()

  const ROW1 = [
    {
      quote: t('testimonials.clients.row1.item1.quote'),
      name: t('testimonials.clients.row1.item1.name'),
      title: t('testimonials.clients.row1.item1.title'),
      company: t('testimonials.clients.row1.item1.company'),
      badge: t('testimonials.clients.row1.item1.badge'),
      avatarColor: "#0891b2",
      initials: "SN",
    },
    {
      quote: t('testimonials.clients.row1.item2.quote'),
      name: t('testimonials.clients.row1.item2.name'),
      title: t('testimonials.clients.row1.item2.title'),
      company: t('testimonials.clients.row1.item2.company'),
      badge: t('testimonials.clients.row1.item2.badge'),
      avatarColor: "#059669",
      initials: "MO",
    },
    {
      quote: t('testimonials.clients.row1.item3.quote'),
      name: t('testimonials.clients.row1.item3.name'),
      title: t('testimonials.clients.row1.item3.title'),
      company: t('testimonials.clients.row1.item3.company'),
      badge: t('testimonials.clients.row1.item3.badge'),
      avatarColor: "#7c3aed",
      initials: "AH",
    },
    {
      quote: t('testimonials.clients.row1.item4.quote'),
      name: t('testimonials.clients.row1.item4.name'),
      title: t('testimonials.clients.row1.item4.title'),
      company: t('testimonials.clients.row1.item4.company'),
      badge: t('testimonials.clients.row1.item4.badge'),
      avatarColor: "#dc2626",
      initials: "JM",
    },
    {
      quote: t('testimonials.clients.row1.item5.quote'),
      name: t('testimonials.clients.row1.item5.name'),
      title: t('testimonials.clients.row1.item5.title'),
      company: t('testimonials.clients.row1.item5.company'),
      badge: t('testimonials.clients.row1.item5.badge'),
      avatarColor: "#ea580c",
      initials: "GA",
    },
  ]

  const ROW2 = [
    {
      quote: t('testimonials.clients.row2.item1.quote'),
      name: t('testimonials.clients.row2.item1.name'),
      title: t('testimonials.clients.row2.item1.title'),
      company: t('testimonials.clients.row2.item1.company'),
      badge: t('testimonials.clients.row2.item1.badge'),
      avatarColor: "#0891b2",
      initials: "ES",
    },
    {
      quote: t('testimonials.clients.row2.item2.quote'),
      name: t('testimonials.clients.row2.item2.name'),
      title: t('testimonials.clients.row2.item2.title'),
      company: t('testimonials.clients.row2.item2.company'),
      badge: t('testimonials.clients.row2.item2.badge'),
      avatarColor: "#059669",
      initials: "FA",
    },
    {
      quote: t('testimonials.clients.row2.item3.quote'),
      name: t('testimonials.clients.row2.item3.name'),
      title: t('testimonials.clients.row2.item3.title'),
      company: t('testimonials.clients.row2.item3.company'),
      badge: t('testimonials.clients.row2.item3.badge'),
      avatarColor: "#7c3aed",
      initials: "PK",
    },
    {
      quote: t('testimonials.clients.row2.item4.quote'),
      name: t('testimonials.clients.row2.item4.name'),
      title: t('testimonials.clients.row2.item4.title'),
      company: t('testimonials.clients.row2.item4.company'),
      badge: t('testimonials.clients.row2.item4.badge'),
      avatarColor: "#dc2626",
      initials: "SU",
    },
    {
      quote: t('testimonials.clients.row2.item5.quote'),
      name: t('testimonials.clients.row2.item5.name'),
      title: t('testimonials.clients.row2.item5.title'),
      company: t('testimonials.clients.row2.item5.company'),
      badge: t('testimonials.clients.row2.item5.badge'),
      avatarColor: "#ea580c",
      initials: "BO",
    },
  ]

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>

      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        {/* Ambient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(0,242,254,0.06) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(255,106,0,0.06) 0%, transparent 70%)' }}
        />

        {/* Header */}
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">
            {t('testimonials.badge')}
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          className="text-center text-slate-500 text-xs mb-8 px-6 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t('testimonials.note')}
        </motion.p>

        {/* Rows */}
        <div className="flex flex-col gap-6">
          <MarqueeRow cards={ROW1} direction="left" />
          <MarqueeRow cards={ROW2} direction="right" />
        </div>

      </section>
    </>
  )
}
