import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={() => setIsOpen(false)}></div>}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#1a1a22] border-r border-gray-800 p-6 transform transition-transform duration-300 sm:relative sm:translate-x-0 sm:block ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:z-auto`}>

        <Link to='/dashboard'>
            <img src={Logo} alt="Logo" className='p-5 w-[120px] h-auto' />
        </Link>

        <nav className="space-y-6 text-[#F5F5F0]">
            <Link to='/gallery' className="flex items-center gap-3 hover:text-[#ff8c42] transition-colors cursor-pointer">
                <span>📖</span> Discover
            </Link>

            <Link to='/create' className="flex items-center gap-3 hover:text-[#ff8c42] transition-colors cursor-pointer">
                <span>✨</span> Create
            </Link>

            <Link to='/saved' className="flex items-center gap-3 hover:text-[#ff8c42] transition-colors cursor-pointer">
                <span>🔖</span> Saved
            </Link>

            <Link to='settings' className="flex items-center gap-3 hover:text-[#ff8c42] transition-colors cursor-pointer">
                <span>⚙️</span> Settings
            </Link>
        </nav>
           
    </div>
    </>
  )
}

export default sidebar
