"use client"
import React, { useState, useEffect } from 'react'
import Hero1 from './Hero1'
import Hero2 from './Hero2'
import Hero3 from './Hero3'

function HeroContainer() {
  const [showHero2, setShowHero2] = useState(false)
  const [showHero3, setShowHero3] = useState(false)

  useEffect(() => {
    // Create a background overlay element to handle the color change for Hero3
    const backgroundOverlay = document.createElement('div')
    backgroundOverlay.style.position = 'fixed'
    backgroundOverlay.style.top = '0'
    backgroundOverlay.style.left = '0'
    backgroundOverlay.style.width = '100%'
    backgroundOverlay.style.height = '100%'
    backgroundOverlay.style.backgroundColor = '#000000'
    backgroundOverlay.style.opacity = '0'
    backgroundOverlay.style.transition = 'opacity 1s ease'
    backgroundOverlay.style.zIndex = '5' // Between the body background and heroes
    backgroundOverlay.style.pointerEvents = 'none' // Allow clicks to pass through
    document.body.appendChild(backgroundOverlay)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollableHeight = document.body.scrollHeight - window.innerHeight

      setShowHero2(scrollPosition > scrollableHeight / 4)
      setShowHero3(scrollPosition > (scrollableHeight * 3) / 4)
      
      // Only change opacity of overlay for Hero3 section
      // Hero1 and Hero2 will show their own background images
      if (scrollPosition > (scrollableHeight * 3) / 4) {
        backgroundOverlay.style.opacity = '1'
      } else {
        backgroundOverlay.style.opacity = '0'
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Remove the background overlay when component unmounts
      if (document.body.contains(backgroundOverlay)) {
        document.body.removeChild(backgroundOverlay)
      }
    }
  }, [])

  return (
    <>
      {/* Content wrapper */}
      <div className="relative">
        {/* First Hero - Fixed */}
        <div 
          className={`fixed top-0 left-0 w-full z-10 transition-opacity duration-1000 ${
            showHero2 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <Hero1 />
        </div>
        
        {/* Second Hero - Fixed */}
        <div 
          className={`fixed top-0 left-0 w-full z-10 transition-opacity duration-1000 ${
            showHero2 && !showHero3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Hero2 />
        </div>

        {/* Third Hero - Fixed */}
        <div 
          className={`fixed top-0 left-0 w-full z-10 transition-opacity duration-1000 ${
            showHero3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Hero3 />
        </div>
      </div>
      
      {/* Spacer to allow scrolling */}
      <div className="h-[200vh]"></div>
    </>
  )
}

export default HeroContainer