import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = ({ onToggleSidebar }) => {
  return (
    <nav className="flex flex-row justify-between items-center px-4 md:px-10 py-3 md:py-6 w-full">
        
        <div className="flex items-center gap-3 md:gap-6">
            <button 
                onClick={onToggleSidebar} 
                className="lg:hidden text-[#F5F5F0] text-2xl p-1 active:scale-90 transition-transform"
                aria-label="Toggle Sidebar"
            >
                ☰
            </button>

            <div className="hidden sm:flex gap-4 md:gap-10 text-[#F5F5F0]">
                <Link to='/gallery' className="hover:text-[#ff8c42] transition-colors cursor-pointer text-sm md:text-base">Discover</Link>
                <Link to='/wallpapers' className="hover:text-[#ff8c42] transition-colors cursor-pointer text-sm md:text-base">Create</Link>
                <Link to='/savedImages' className="hover:text-[#ff8c42] transition-colors cursor-pointer text-sm md:text-base">Saved</Link>
            </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">

            <Link 
                to='/search' 
                className="bg-[#F5F5F0] text-[#1a1a22] px-3 sm:px-5 py-2 rounded-lg font-medium text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#ff8c42] hover:text-white transition-all"
            >
                <span className="inline sm:hidden">Generate</span>
                <span className="hidden sm:inline">Generate an Image</span>
            </Link>

            <Link to='/profile'>
                <img
                    src="./public/Frame 130.svg"
                    alt="profile"
                    className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover"
                />
            </Link>

        </div>
        
    </nav>
  )
}

export default TopNav