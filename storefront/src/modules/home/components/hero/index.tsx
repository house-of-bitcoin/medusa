"use client"

import { useState, useEffect } from 'react'
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      title: "Rare Collectibles",
      description: "Curated selection of exclusive Bitcoin artifacts",
      icon: "💎"
    },
    {
      title: "Verified Authenticity",
      description: "Every piece authenticated and documented",
      icon: "✓"
    },
    {
      title: "Global Shipping",
      description: "Secure delivery to Bitcoiners worldwide",
      icon: "🌍"
    }
  ]

  const heroSlides = [
    {
      title: "Luxury Bitcoin Collectibles",
      subtitle: "Own a piece of Bitcoin history",
      cta: "Explore Collection"
    },
    {
      title: "Rare & Exclusive Artifacts",
      subtitle: "For discerning Bitcoiners",
      cta: "View Rarities"
    },
    {
      title: "Premium Bitcoin Memorabilia",
      subtitle: "Curated with passion, delivered with care",
      cta: "Shop Now"
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251, 146, 60) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
        </div>

        {/* Bitcoin Symbol Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div 
            className="text-[40rem] font-bold"
            style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
          >
            ₿
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <div className="max-w-5xl space-y-8 animate-fade-in">
            {/* Slides */}
            <div className="relative h-48">
              {heroSlides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ${
                    currentSlide === idx 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm">
                    <span className="text-orange-400 text-sm font-semibold tracking-wider">
                      EXCLUSIVE COLLECTION
                    </span>
                  </div>
                  <Heading
                    level="h1"
                    className="text-5xl sm:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent"
                  >
                    {slide.title}
                  </Heading>
                  <p className="text-xl sm:text-2xl text-slate-300 mb-8">
                    {slide.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/store">
                <Button 
                  size="large"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Collection →
                </Button>
              </a>
              <a href="/collections">
                <Button 
                  size="large"
                  variant="secondary"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  View Rarities
                </Button>
              </a>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 justify-center pt-8">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx 
                      ? 'bg-orange-500 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/50 text-sm flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-slate-950 py-20 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-900 to-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/10"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Categories Preview */}
      <div className="bg-gradient-to-b from-slate-950 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Collections
            </h2>
            <p className="text-slate-400 text-lg">
              Discover exclusive Bitcoin artifacts and memorabilia
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Physical Coins", emoji: "🪙", count: "24 items" },
              { name: "Art & Prints", emoji: "🖼️", count: "18 items" },
              { name: "Hardware", emoji: "💻", count: "12 items" },
              { name: "Rare Books", emoji: "📚", count: "8 items" }
            ].map((category, idx) => (
              <a
                key={idx}
                href="/store"
                className="group relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                <div className="relative z-20 h-full flex flex-col justify-end p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-orange-400 text-sm">
                    {category.count}
                  </p>
                </div>
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-slate-900 py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated on Rare Drops
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Be the first to know about new exclusive Bitcoin collectibles
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <Button 
              size="large"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Hero