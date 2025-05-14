import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full  z-50 px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
        <div className='flex items-center space-x-3'> 
          <Image src="/logo.png" alt="logo" width={80} height={30} />
        </div>
        <h2 className='text-4xl text-secondary font-bold shadow-sm'>Cult of Cats</h2>
      </div>
      <div className='h-20'></div> {/* Spacer to prevent content from being hidden behind the fixed header */}
    </div>
  )
}

export default Header