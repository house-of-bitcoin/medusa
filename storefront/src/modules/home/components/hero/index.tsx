"use client"

import { useState, useEffect } from 'react'
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden bg-neutral-50">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
          <div className="max-w-4xl space-y-6">
            <div 
              className="space-y-4"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <Heading
                level="h1"
                className="text-5xl sm:text-7xl lg:text-8xl font-light text-neutral-900 tracking-tight"
              >
                ₿itcoin
                <br />
                Store
              </Heading>
              <p className="text-lg sm:text-xl text-neutral-600 font-light max-w-2xl mx-auto">
                Curated luxury items and exclusive memorabilia for bitcoin collectors
              </p>
            </div>

            <div className="pt-8">
              <a href="/store">
                <Button 
                  size="large"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-12 py-6 text-base font-normal rounded-full transition-all duration-300"
                >
                  Explore Collection
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-neutral-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Featured Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-3">
            Featured Collection
          </h2>
          <p className="text-neutral-600 font-light">
            Handpicked limited edition and exclusive pieces
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Bitcoin T-Shirt",
              category: "Merch",
              price: "From $25,000",
              image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139033/haryo-setyadi-acn5ERAeSb4-unsplash_dm57mg.jpg"
            },
            {
              title: "Bitcoin Genesis",
              category: "Art",
              price: "$3,500",
              image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139032/adrianna-geo-1rBg5YSi00c-unsplash_e7euew.jpg"
            },
            {
              title: "Ledger Collector's Edition",
              category: "Hardware",
              price: "$1,200",
              image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139033/haryo-setyadi-acn5ERAeSb4-unsplash_dm57mg.jpg"
            },
            {
              title: "Bitcoin Whitepaper 1st Print",
              category: "Collectors",
              price: "$8,500",
              image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139032/adrianna-geo-1rBg5YSi00c-unsplash_e7euew.jpg"
            },
            {
              title: "Bitcoin Cap",
              category: "Merch",
              price: "$4,200",
              image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139031/mediamodifier-t8HiP3e5abg-unsplash_fjou1x.jpg"
            },
            {
              title: "Satoshi Nakamoto Portrait",
              category: "Art",
              price: "$2,800",
              image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139032/adrianna-geo-1rBg5YSi00c-unsplash_e7euew.jpg"
            }
          ].map((product, idx) => (
            <a
              key={idx}
              href="/store"
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-neutral-100">
                <div className="aspect-square overflow-hidden bg-neutral-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <p className="text-xs uppercase tracking-wider text-neutral-500 font-light">
                    {product.category}
                  </p>
                  <h3 className="text-lg font-normal text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-neutral-900 font-light">
                    {product.price}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="/store">
            <Button 
              variant="secondary"
              size="large"
              className="border-neutral-300 text-neutral-900 hover:bg-neutral-50 px-10 py-5 rounded-full font-normal transition-all duration-300"
            >
              View All Products
            </Button>
          </a>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-neutral-900 mb-3">
              Shop by Category
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: "Cap Collection", 
                image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139031/mediamodifier-t8HiP3e5abg-unsplash_fjou1x.jpg",
                count: "24 items"
              },
              { 
                name: "Bitcoin T-Shirt", 
                image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139033/haryo-setyadi-acn5ERAeSb4-unsplash_dm57mg.jpg",
                count: "18 items"
              },
              { 
                name: "$BTC Art", 
                image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139032/adrianna-geo-1rBg5YSi00c-unsplash_e7euew.jpg",
                count: "12 items"
              },
              { 
                name: "Shoe Collection", 
                image: "https://res.cloudinary.com/dcqfs6lkg/image/upload/v1760139027/sandi-benedicta-1t3exe8H_nw-unsplash_r7ptc4.jpg",
                count: "8 items"
              }
            ].map((category, idx) => (
              <a
                key={idx}
                href="/store"
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-light mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/80 font-light">
                    {category.count}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Authenticated",
              description: "Every item is verified and comes with a certificate of authenticity"
            },
            {
              title: "Secure Shipping",
              description: "Fully insured worldwide delivery with signature confirmation"
            },
            {
              title: "Expert Curation",
              description: "Handpicked by Bitcoin historians and passionate collectors"
            }
          ].map((feature, idx) => (
            <div key={idx} className="text-center space-y-3">
              <h3 className="text-xl font-normal text-neutral-900">
                {feature.title}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-neutral-900 text-white py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-8 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-light">
              Join Our Collectors Circle
            </h2>
            <p className="text-neutral-300 font-light text-lg">
              Be first to access new arrivals and exclusive releases
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors font-light"
            />
            <Button 
              size="large"
              className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-4 rounded-full font-normal transition-all duration-300"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero