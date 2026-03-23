import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import WelcomeImg from '../assets/images/fi-rr-smile.svg'

const WelcomePage = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard', { replace: true })
    }, 2500)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className='pictura-bg text-[#F5F5F0] min-h-screen w-full flex flex-col overflow-hidden'>
      <header className='p-5'>
        <img src={Logo} alt="Logo" className='w-[100px] md:w-[120px] h-auto' />
      </header>

      <main className='flex-1 flex flex-col gap-6 items-center justify-center px-6 text-center pb-20'>
        
        <img 
          src={WelcomeImg} 
          alt="Welcome" 
          className='w-20 h-20 md:w-auto md:h-auto animate-bounce' 
        />

        <div className='text-Roboto max-w-md md:max-w-2xl'>
          <h3 className='font-bold text-2xl md:text-[34.3px] leading-tight'>
            Welcome to your world of creativity
          </h3>
          
          <p className='text-base md:text-[22.87px] mt-3 opacity-90'>
            Generate stunning visuals that match your vibe instantly
          </p>
        </div>

      </main> 
    </div>
  )
}

export default WelcomePage