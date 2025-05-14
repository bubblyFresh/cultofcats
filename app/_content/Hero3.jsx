import React from 'react';
import Image from 'next/image';

function Hero3() {
  return (
    <div id="hero3" className="flex justify-center items-center h-screen relative">
      <div className="relative">
        <Image 
          src="/mapper.png"
          alt="mapper"
          width={1000}
          height={1000}
          className="max-w-full h-auto"
          useMap="#image-map"
        />
        
        {/* Image Map - Creating clickable areas */}
        <map name="image-map">
          {/* X/Twitter Button - Left side circle */}
          <area 
            shape="circle" 
            coords="326,1045,47" 
            href="https://twitter.com" 
            alt="Twitter/X"
            target="_blank"
            rel="noopener noreferrer"
          />
          
          {/* PumpFun Button - Right side circle */}
          <area 
            shape="circle" 
            coords="709,1044,48" 
            href="https://pumpfun.com" 
            alt="PumpFun"
            target="_blank"
            rel="noopener noreferrer"
          />
        </map>
        
        {/* Alternative clickable divs for better mobile support */}
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute w-20 h-20 rounded-full"
          style={{ left: '270px', top: '900px' }}
          aria-label="Twitter/X"
        ></a>
        
        <a 
          href="https://pumpfun.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute w-20 h-20 rounded-full"
          style={{ left: '690px', top: '900px' }}
          aria-label="PumpFun"
        ></a>
      </div>
    </div>
  );
}

export default Hero3;