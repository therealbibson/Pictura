import React, { useState, useEffect } from 'react'
import Sidebar from '../components/sidebar'
import TopNav from '../components/topNav'

const GeneratePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    window.history.pushState(null, null, window.location.pathname);

    const handlePopState = () => {
      window.history.pushState(null, null, window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const frames = [
    '/images/Frame 118.svg',
    '/images/Frame 119.svg',
    '/images/Frame 120.svg',
    '/images/Frame 121.svg',
    '/images/Frame 122.svg',
    '/images/Frame 123.svg',
    '/images/Frame 124.svg',
    '/images/Frame 125.svg'
  ];

  return (
    <div className="pictura-bg text-white min-h-screen w-full overflow-x-hidden">
      <div className="flex relative">
        
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className="flex-1 flex flex-col min-w-0">
          <TopNav onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          <div className="px-4 sm:px-6 lg:px-10 pb-12">
            <header className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Dashboard</h2>
              <p className="text-gray-400 text-sm sm:text-base mt-1">Your recent creations</p>
            </header>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {frames.map((frame, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <img 
                    src={frame} 
                    alt={`Frame ${index + 1}`} 
                    className="aspect-square sm:aspect-auto h-48 sm:h-40 lg:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </main>

      </div>
    </div>
  )
}

export default GeneratePage
