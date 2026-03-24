import React from "react";
import Logo from '../assets/images/logo.png'
import { FiEyeOff } from "react-icons/fi";
import { Input } from './signup'
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="min-h-screen pictura-bg text-white">

      <img src={Logo} alt="Logo" className='p-5 w-[100px] md:w-[120px] h-auto' />

        <div className="flex flex-col items-center justify-center mt-10">

            <form className='flex flex-col items-center gap-4 w-full max-w-[548px]'>

                <h2 className='text-Roboto text-4xl sm:text-5xl md:text-[60px] font-medium'>Set new password</h2>

                <div className='relative items-center inline-flex w-[582px]'>
                    <FiEyeOff className='absolute left-[12px] text-[#F5F5F0] z-10' />
                    <Input 
                    type="password" 
                    placeholder="Enter password" 
                    />
                </div>

                <div className='relative items-center inline-flex w-[582px]'>
                    <FiEyeOff className='absolute left-[12px] text-[#F5F5F0] z-10' />
                    <Input 
                    type="password" 
                    placeholder="Confirm password" 
                    />
                </div>

                <button
                    className='flex justify-center bg-[#F5F5F0] text-[#1a1a22] p-[15px] w-[582px] rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white font-semibold disabled:opacity-50'
                >
                    Reset Password
                </button>

            </form>
        </div>

    </div>
  );
};

export default ResetPassword;