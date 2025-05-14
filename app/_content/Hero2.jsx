import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

function Hero2() {
  return (
    <div id="hero2" className='mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-10 lg:mx-32 xl:mx-48 2xl:mx-56'>
      {/* Left Column */}
      <div>
        <h1 className='text-primary text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl tracking-wide font-bold mb-4'>Explore the Cult</h1>
        <p className='text-2xl text-white mb-6'>
          Uncover the secrets of a mysterious feline order. Step into the darkness, follow the signs, and discover what lies beneath the hooded gaze.
        </p>
         <ScrollLink 
                  to="hero3" 
                  smooth={true} 
                  duration={500} 
                  offset={600}
                >
                  <Button className='text-xl'>Explore</Button>
                </ScrollLink>
      </div>

      {/* Right Column */}
      <div>
        <Image
          src="/bg3.png"
          alt="logo"
          width={800}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero2