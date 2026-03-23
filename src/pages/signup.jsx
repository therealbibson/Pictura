import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { useNavigate, Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { auth } from '../lib/firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/welcome', { replace: true }); 
    } catch (err) {
      const errorMap = {
        'auth/email-already-in-use': 'An account with this email already exists.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/operation-not-allowed': 'Email sign-up is currently disabled. Please contact support.',
        'auth/weak-password': 'Your password is too weak. It must be at least 6 characters.',
        'auth/network-request-failed': 'Network error. Please check your internet connection.',
      };
      setError(errorMap[err.code] || 'An unexpected error occurred. Please try again.');
      console.error("Signup Error:", err.code, err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/welcome', { replace: true });
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className='pictura-bg text-[#F5F5F0] min-h-screen w-full overflow-x-hidden pb-10'>
        
      <img src={Logo} alt="Logo" className='p-5 w-[100px] md:w-[120px] h-auto' />

      <div className='flex flex-col gap-6 items-center justify-center px-6 mt-10'>
          
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 w-full max-w-[639px]'>
          <h1 className='text-Roboto text-4xl md:text-[60.72px] font-medium'>Sign up</h1>

          {error && <p className="text-red-500 bg-red-100 p-2 rounded w-full text-center">{error}</p>}

          <div className='relative items-center inline-flex w-[548px]'>
            <FaRegEnvelope className='absolute left-[12px] text-[#F5F5F0] z-10' />
            <Input 
              type="email" 
              placeholder="Enter your E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className='relative items-center inline-flex w-[548px]'>
            <FiLock className='absolute left-[12px] text-[#F5F5F0] z-10' />
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Create a password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <div 
              className='absolute right-[12px] text-[#F5F5F0] z-10 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          
          <div className='relative items-center inline-flex w-[548px]'>
            <FiLock className='absolute left-[12px] text-[#F5F5F0] z-10' />
            <Input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <div 
              className='absolute right-[12px] text-[#F5F5F0] z-10 cursor-pointer'
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          </div>

          <Link to='/signin' className='text-sm md:text-base transition-all duration-300 hover:text-[#ff8c42] hover:underline'>
            Already have an account? Sign in
          </Link>

          <button 
            disabled={loading}
            className='flex justify-center bg-[#F5F5F0] text-[#1a1a22] p-[15px] w-[548px] rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white font-semibold text-center disabled:opacity-50'
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className='flex flex-row gap-3 w-[548px] max-w-[639px]'>
          <button 
            onClick={handleGoogleSignIn}
            className='flex gap-2 justify-center items-center bg-[#F5F5F0] text-[#1a1a22] p-[15px] w-full rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white'
          >
            <FaRegArrowAltCircleRight /> Google
          </button>

          <button className='flex gap-2 justify-center items-center bg-[#F5F5F0] text-[#1a1a22] p-[15px] w-full rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white'>
            <FaRegArrowAltCircleRight /> Apple
          </button>
        </div>
      </div>
    </div>
  )
}

export function Input ({placeholder, type, value, onChange}) {
  return (
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        className='border border-[#F5F5F0] bg-transparent rounded-md p-[15px] pl-[40px] w-full outline-none focus:border-[#ff8c42] transition-colors' 
        required
      />
  )
}

export default SignUp
