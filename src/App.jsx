import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Features from './pages/Features'
import EstimationCalculator from './pages/EstimationCalculator'
import Contact from './pages/Contact'
import PageLoader from './components/PageLoader'
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"          element={<Home />} />
        <Route path="/about"     element={<About />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/estimate"  element={<EstimationCalculator />} />
        <Route path="/features"  element={<Features />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms"   element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*"          element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <BrowserRouter>
      {!loadingComplete && <PageLoader onComplete={() => setLoadingComplete(true)} />}
      
      {/* Site Content Wrapper */}
      <div 
        style={{ 
          opacity: loadingComplete ? 1 : 0, 
          transition: 'opacity 400ms ease-in-out',
          pointerEvents: loadingComplete ? 'auto' : 'none'
        }}
      >
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
