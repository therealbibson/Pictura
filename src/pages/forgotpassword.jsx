import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { Input } from './signup'
import { FaRegEnvelope } from "react-icons/fa6";

const forgotpassword = () => {
  return (
    <div className='pictura-bg text-[#F5F5F0] min-h-screen w-full overflow-x-hidden pb-10'>
        <img src={Logo} alt="Logo" className='p-5 w-[100px] md:w-[120px] h-auto' />


        <div className='flex flex-col gap-5 items-center justify-center px-4 sm:px-6 mt-10'>
        
            <div className='flex flex-col items-center gap-4 w-full max-w-[639px]'>
                <h1 className='text-Roboto text-[36px] md:text-[60.72px] font-medium text-center'>Forgot Password</h1>
                
                <div className='relative items-center inline-flex w-full'>
                    <FaRegEnvelope className='absolute left-[12px] text-[#F5F5F0] z-10' />
                    <Input 
                    type="email" 
                    placeholder="E-mail" 
                    />
                </div>

                <Link to='/resetpassword' 
                    className='flex justify-center bg-[#F5F5F0] text-[#1a1a22] p-[15px] w-full rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white font-semibold disabled:opacity-50'
                >
                    Reset Password
                </Link>

                <Link to='/signin' className='flex justify-center text-sm transition-all p-[15px] w-full duration-300 hover:border-[#ff8c42] border rounded-md'>
                    Back to Sign-In
                </Link>

            </div>

        </div>
    </div>
  )
}

export default forgotpassword