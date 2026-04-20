import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function PageLoader({ onComplete }) {
  const { t } = useTranslation()

  useEffect(() => {
    // Exactly at 3.6 seconds, the intro is done and overlay is functionally invisible.
    // Unmount and handoff to the actual app content fade-in.
    const timer = setTimeout(() => {
      onComplete()
    }, 3600)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <>
      <style>{`
        @keyframes logoScale {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes logoGlowPulse {
          0% { filter: drop-shadow(0 0 0px transparent); }
          50% { filter: drop-shadow(0 0 20px #00ffff); }
          100% { filter: drop-shadow(0 0 0px transparent); }
        }
        @keyframes slideFadeUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes barFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes overlayExit {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .loader-logo {
          opacity: 0; 
          animation: 
            logoScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards,
            logoGlowPulse 0.8s ease-in-out 0.6s forwards;
        }
        
        .loader-tagline {
          opacity: 0;
          animation: slideFadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.4s forwards;
        }
        
        .loader-bar-fill {
          width: 0%;
          animation: barFill 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.9s forwards;
        }
        
        .loader-overlay {
          opacity: 1;
          animation: overlayExit 0.5s ease 3.1s forwards;
        }
      `}</style>

      <div className="loader-overlay fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center">

          {/* Logo */}
          <div className="loader-logo w-[80px] h-[80px] rounded-[18px] overflow-hidden flex items-center justify-center border border-[#00f2fe]/20 bg-[#050507]">
            <img src="/logo.png" alt="NovaCore Logo" className="w-[85%] h-[85%] object-cover p-1" />
          </div>

          {/* Tagline */}
          <div className="loader-tagline flex flex-col items-center">
            <p className="mt-8 text-sm font-display text-white/80 tracking-[0.2em] uppercase text-center px-4">
              {t('loader.tagline')}
            </p>

            {/* Loading Bar */}
            <div className="mt-6 w-[200px] h-[2px] bg-[rgba(255,255,255,0.1)] overflow-hidden">
              <div className="loader-bar-fill h-full bg-[#00ffff] origin-left shadow-[0_0_10px_#00ffff]"></div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
