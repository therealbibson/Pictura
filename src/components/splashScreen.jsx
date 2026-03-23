import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Pictura from '../assets/images/pictura.svg'

const SplashScreen = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/landing' , { replace: true })
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])


  return (
    <div className='bg-[#1a1a22] text-[#F5F5F0] min-h-screen w-screen flex flex-col items-center justify-center p-4 overflow-hidden text-center'>
      
      <img 
        src={Pictura} 
        alt="Pictura" 
        className='w-32 h-auto sm:w-48 md:w-[269px] md:h-[311px] mb-4 md:mb-0 transition-all duration-300 ease-in-out' 
      />
      
      <p className='text-Static/DisplayLarge/Font font-500 text-5xl sm:text-7xl md:text-[128px] transition-all duration-300 ease-in-out'>
        Pictura
      </p>

    </div>
  )
}

export default SplashScreen