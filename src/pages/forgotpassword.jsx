import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Input } from './signup' // Ensure this Input is set to w-full as we did before
import { FaRegEnvelope } from "react-icons/fa6";

const forgotpassword = () => {
  return (
    <div className='pictura-bg text-[#F5F5F0] min-h-screen w-full overflow-x-hidden pb-10'>
        <img src={Logo} alt="Logo" className='p-5 w-[100px] md:w-[120px] h-auto' />


        <div className='flex flex-col gap-5 items-center justify-center px-6 mt-10'>
        
            <form className='flex flex-col items-center gap-4 w-full max-w-[639px]'>
            {/* Fluid Typography: Starts at 36px on mobile, grows to 60px on desktop */}
                <h1 className='text-Roboto text-[36px] md:text-[60.72px] font-medium'>Forgot Password</h1>
                
                <div className='relative items-center inline-flex w-full'>
                    <FaRegEnvelope className='absolute left-[12px] text-[#F5F5F0] z-10' />
                    <Input 
                    type="email" 
                    placeholder="E-mail" 
                    />
                </div>

                <button 
                    className='flex justify-center bg-[#F5F5F0] text-[#1a1a22] p-[15px] w-full rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white font-semibold disabled:opacity-50'
                >
                    Reset Password
                </button>

                <Link to='/signin' className='w-full text-left text-sm transition-all duration-300 hover:text-[#ff8c42] hover:underline'>
                    Back to Sign in
                </Link>
            </form>

        </div>
    </div>
  )
}

export default forgotpassword