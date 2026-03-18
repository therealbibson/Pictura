import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = ({ onToggleSidebar }) => { // Capitalized name
  return (
    <nav className="flex flex-row justify-between items-center px-4 md:px-10 py-3 md:py-6 w-full">
        
        {/* LEFT SECTION: Burger + Nav Links */}
        <div className="flex items-center gap-3 md:gap-6">
            {/* Mobile Menu Button */}
            <button 
                onClick={onToggleSidebar} 
                className="lg:hidden text-[#F5F5F0] text-2xl p-1 active:scale-90 transition-transform"
                aria-label="Toggle Sidebar"
            >
                ☰
            </button>

            {/* Nav Links: Hidden on very small screens, visible from 'sm' up */}
            <div className="hidden sm:flex gap-4 md:gap-10 text-[#F5F5F0]">
                <Link to='/gallery' className="hover:text-[#ff8c42] transition-colors cursor-pointer text-sm md:text-base">Discover</Link>
                <Link to='/create' className="hover:text-[#ff8c42] transition-colors cursor-pointer text-sm md:text-base">Create</Link>
                <Link to='/saved' className="hover:text-[#ff8c42] transition-colors cursor-pointer text-sm md:text-base">Saved</Link>
            </div>
        </div>

        {/* RIGHT SECTION: Action Button + Profile */}
        <div className="flex items-center gap-3 sm:gap-4">

            <Link 
                to='/search' 
                className="bg-[#F5F5F0] text-[#1a1a22] px-3 sm:px-5 py-2 rounded-lg font-medium text-xs sm:text-sm md:text-base whitespace-nowrap hover:bg-[#ff8c42] hover:text-white transition-all"
            >
                {/* Shortened text for mobile, full text for desktop */}
                <span className="inline sm:hidden">Generate</span>
                <span className="hidden sm:inline">Generate an Image</span>
            </Link>

            {/* Profile Circle */}
            <div className="w-8 h-8 md:w-9 md:h-9 bg-[#F5F5F0] rounded-full shrink-0 cursor-pointer border-2 border-transparent hover:border-[#ff8c42] transition-all"></div>

        </div>
        
    </nav>
  )
}

export default TopNav