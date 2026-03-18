import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Pictura from '../assets/images/pictura.svg'

const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing' , { replace: true })
    }, 5000) // Note: I updated the comment here. 5000 is 5 seconds, not 2.5!

    return () => clearTimeout(timer) // cleanup on unmount
  }, [navigate]) // Added 'navigate' to the dependency array (React best practice)


  return (
    // Added 'p-4' for padding, 'text-center', and 'overflow-hidden' to prevent scrollbars
    <div className='pictura-bg text-[#F5F5F0] min-h-screen w-screen flex flex-col items-center justify-center p-4 overflow-hidden text-center'>
      
      {/* Responsive Image: Scales down on mobile, full size on medium (md) screens and up */}
      <img 
        src={Pictura} 
        alt="Pictura" 
        className='w-32 h-auto sm:w-48 md:w-[269px] md:h-[311px] mb-4 md:mb-0 transition-all duration-300 ease-in-out' 
      />
      
      {/* Responsive Text: 5xl (approx 48px) on mobile, scales up to 128px on medium screens */}
      <p className='text-Static/DisplayLarge/Font font-500 text-5xl sm:text-7xl md:text-[128px] transition-all duration-300 ease-in-out'>
        Pictura
      </p>

    </div>
  )
}

export default SplashScreen // Capitalized the export to match the component name