import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiPlay, FiPause, FiCheckCircle } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import DemoVideo from '../assets/NovaCoreTechnology.mp4'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function Features() {
  const { t } = useTranslation()
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const featureList = [
    { title: t('featuresPage.list.item1.title'), desc: t('featuresPage.list.item1.desc') },
    { title: t('featuresPage.list.item2.title'), desc: t('featuresPage.list.item2.desc') },
    { title: t('featuresPage.list.item3.title'), desc: t('featuresPage.list.item3.desc') },
    { title: t('featuresPage.list.item4.title'), desc: t('featuresPage.list.item4.desc') },
  ]

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff6a001a] border border-[#ff6a0033] text-[#ff6a00] font-display text-xs font-bold tracking-widest uppercase mb-6">{t('featuresPage.badge1')}</div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">{t('featuresPage.title')}</h1>
            <p className="text-slate-400 mx-auto max-w-2xl text-lg md:text-xl leading-relaxed">
              {t('featuresPage.subtitle')}
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
            <video
              ref={videoRef}
              src={DemoVideo}
              className="w-full h-full object-cover rounded-[3rem]"
              controls
              controlsList="nodownload"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />

            {/* Custom Center Play/Pause Button Overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 bg-black/40'}`}
            >
              <button
                onClick={togglePlay}
                className="pointer-events-auto w-24 h-24 rounded-full bg-[#050507]/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#00f2fe] hover:text-[#050507] hover:border-[#00f2fe] hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
              >
                {isPlaying ? <FiPause size={36} /> : <FiPlay size={36} className="ml-2" />}
              </button>
            </div>

            {/* Animated Borders */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#00f2fe] to-transparent pointer-events-none transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
          </motion.div>
        </div>
      </section>

      {/* Deep Feature List */}
      <section className="py-24 px-6 md:px-24 bg-white/[0.01] border-y border-white/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUpVariant}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe1a] border border-[#00f2fe33] text-[#00f2fe] font-display text-xs font-bold tracking-widest uppercase mb-6">{t('featuresPage.badge2')}</div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">{t('featuresPage.title2')}</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              {t('featuresPage.subtitle2')}
            </p>

            <ul className="flex flex-col gap-6">
              {featureList.map((item, i) => (
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
              <h4 className="text-sm font-display font-bold text-slate-500 uppercase tracking-widest mb-10">{t('featuresPage.stats.revenue')}</h4>
              <div className="flex items-end gap-3 h-32">
                <div className="w-full bg-white/5 rounded-t-md group-hover:bg-white/10 transition-colors" style={{ height: '40%' }}></div>
                <div className="w-full bg-white/5 rounded-t-md group-hover:bg-white/10 transition-colors" style={{ height: '60%' }}></div>
                <div className="w-full bg-[#00f2fe] rounded-t-lg shadow-[0_0_20px_rgba(0,242,254,0.3)] group-hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all" style={{ height: '90%' }}></div>
                <div className="w-full bg-white/5 rounded-t-md group-hover:bg-white/10 transition-colors" style={{ height: '70%' }}></div>
              </div>
            </div>

            {/* Visual Mini-Chart Card 2 */}
            <div className="flex-1 p-10 rounded-[2.5rem] bg-[#0d0f14cc] backdrop-blur-xl border border-white/5 shadow-2xl hover:border-[#00f2fe33] transition-all group">
              <h4 className="text-sm font-display font-bold text-slate-500 uppercase tracking-widest mb-6">{t('featuresPage.stats.users')}</h4>
              <p className="text-[#ff6a00] text-5xl font-heading font-bold mb-2 drop-shadow-[0_0_15px_rgba(255,106,0,0.2)] leading-none text-nowrap tracking-tight">1,204</p>
              <p className="text-emerald-500 text-xs font-display font-bold">{t('featuresPage.stats.growth')}</p>

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
