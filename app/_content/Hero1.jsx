import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

function Hero1() {
  return (
    <div className='mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-10 lg:mx-32 xl:mx-48 2xl:mx-56'>
      {/* Left Column */}
      <div className='justify-center mb-20 lg:mb-30 xl:mb-40 2xl:mb-50'>
        <h1 className='text-primary text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl tracking-wide font-bold mb-4'>Welcome, Devoted Disciple of the Divine Paw!</h1>
        <p className='text-2xl text-white mb-6'>
          You’ve entered the sacred sanctuary of the Cult of Cats — where whiskers rule, naps are sacred, and every meow is a blessing. Bow to the feline overlords, bask in their fluffy wisdom, and let the purring guide your soul...
        </p>
         <ScrollLink 
          to="hero2" 
          smooth={true} 
          duration={500} 
          offset={300}
        >
          <Button className='text-xl'>Learn More</Button>
        </ScrollLink>
      </div>

      {/* Right Column */}
      <div>
        <Image
          src="/noBg3.png"
          alt="logo"
          width={800}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default Hero1