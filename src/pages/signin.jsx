import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { useNavigate, Link } from 'react-router-dom'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Input } from './signup' // Ensure this Input is set to w-full as we did before
import { FaRegEnvelope } from "react-icons/fa6";
import { FiLock } from "react-icons/fi";
import { auth } from '../lib/firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/welcome', { replace: true }); 
    } catch (err) {
      const errorMap = {
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/user-disabled': 'This account has been disabled. Please contact support.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Please check your internet connection.',
      };
      // Generic message for security if user-not-found or wrong-password is hit
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password.');
      } else {
        setError(errorMap[err.code] || 'Invalid email or password.');
      }
      console.error("Signin Error:", err.code, err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/welcome', { replace: true });
    } catch (err) {
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Sign-in cancelled. Please try again.');
      } else {
        setError('Google sign-in failed. Please try again.');
      }
      console.error("Google Signin Error:", err.code, err.message);
    }
  };

  return (
    // min-h-screen for background coverage, w-full for fluid width
    <div className='pictura-bg text-[#F5F5F0] min-h-screen w-full overflow-x-hidden pb-10'>

      <img src={Logo} alt="Logo" className='p-5 w-[100px] md:w-[120px] h-auto' />
      
      {/* Main Container: px-6 provides "breathing room" on small screens */}
      <div className='flex flex-col gap-5 items-center justify-center px-6 mt-10'>
        
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 w-full max-w-[639px]'>
          {/* Fluid Typography: Starts at 36px on mobile, grows to 60px on desktop */}
          <h1 className='text-Roboto text-[36px] md:text-[60.72px] font-medium'>Sign in</h1>
          
          {error && <p className="text-red-500 bg-red-100 p-2 rounded w-full text-center">{error}</p>}

          <div className='relative items-center inline-flex w-full'>
            <FaRegEnvelope className='absolute left-[12px] text-[#F5F5F0] z-10' />
            <Input 
              type="email" 
              placeholder="E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='relative items-center inline-flex w-full'>
            <FiLock className='absolute left-[12px] text-[#F5F5F0] z-10' />
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
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

          <Link to='/forgotpassword' className='w-full text-right text-sm transition-all duration-300 hover:text-[#ff8c42] hover:underline'>
            Forget Password?
          </Link>

          <button 
            disabled={loading}
            className='flex justify-center bg-[#F5F5F0] text-[#1a1a22] p-[15px] w-full rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white font-semibold disabled:opacity-50'
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <p className='opacity-70'>or</p>

        {/* Social Buttons: Stacks on mobile, side-by-side on tablet/desktop */}
        <div className='flex flex-row gap-3 w-full max-w-[639px]'>
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

        {/* Footer: Centered stacking for mobile */}
        <div className='flex flex-row justify-center gap-3 items-center text-[10px] md:text-[15px]'>
          <p className='opacity-80'>Don't have an account?</p>
          <Link to='/signup' className='flex justify-center bg-[#F5F5F0] text-[#1a1a22] p-[12px] w-[180px] sm:w-[210px] rounded-md transition-all duration-300 hover:bg-[#ff8c42] hover:text-white font-medium'>
            Sign up
          </Link>
        </div>

      </div>
    </div>
  )
}


export default SignIn;