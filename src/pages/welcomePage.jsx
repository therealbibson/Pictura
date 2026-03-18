import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import WelcomeImg from '../assets/images/fi-rr-smile.svg'

const WelcomePage = () => { // Capitalized to match React standards

  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard', { replace: true })
    }, 2500)

    return () => clearTimeout(timer)
  }, [navigate]) // Added navigate to dependencies

  return (
    <div className='pictura-bg text-[#F5F5F0] min-h-screen w-full flex flex-col overflow-hidden'>
      {/* Logo: Keeping the consistent sizing from your other pages */}
      <header className='p-5'>
        <img src={Logo} alt="Logo" className='w-[100px] md:w-[120px] h-auto' />
      </header>

      {/* Content Container: flex-1 ensures this centers in the remaining screen space */}
      <main className='flex-1 flex flex-col gap-6 items-center justify-center px-6 text-center pb-20'>
        
        {/* Welcome Icon: Slightly smaller on mobile to keep everything on one screen */}
        <img 
          src={WelcomeImg} 
          alt="Welcome" 
          className='w-20 h-20 md:w-auto md:h-auto animate-bounce' 
        />

        <div className='text-Roboto max-w-md md:max-w-2xl'>
          {/* Responsive Heading: 2xl on mobile, your custom size on desktop */}
          <h3 className='font-bold text-2xl md:text-[34.3px] leading-tight'>
            Welcome to your world of creativity
          </h3>
          
          {/* Responsive Subtext: base (16px) on mobile, custom size on desktop */}
          <p className='text-base md:text-[22.87px] mt-3 opacity-90'>
            Generate stunning visuals that match your vibe instantly
          </p>
        </div>

      </main> 
    </div>
  )
}

export default WelcomePage