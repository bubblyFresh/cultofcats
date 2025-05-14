"use client";
import React, { useState, useEffect } from 'react';
import Header from './_components/Header'
import LoadingScreen from './_components/LoadingScreen';

function Provider({children}) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Set minimum loading time to 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      {isLoading && <LoadingScreen minDisplayTime={1500} />}
      <Header />
      <div className='px-10 lg:px-32 xl:px-48 2xl:px-56'>
        {children}
      </div>
    </div>
  )
}

export default Provider