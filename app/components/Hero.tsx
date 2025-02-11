'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/Hero_main.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Make the Better
              <br />
              <span className="text-4xl md:text-5xl">life and future</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
            유전자 진단 기술을 기반으로 
            우리 모두와 인류의 삶과 미래를 이롭게 할 것입니다.
            </p>
            <a href="/company/vision" className="block w-full h-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                자세히 보기
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-5" />
    </div>
  )
}