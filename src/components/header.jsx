import React from 'react'

const header = () => {
  return (
    <div>
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-3 text-[#f5f5f0]">Discover AI Art</h2>
          <p className="text-[#f5f5f0] max-w-xl">
          Explore the world’s most immersive AI-generated masterpieces,
          curated daily for creators and dreamers.
          </p>
        </div>

        <div className="flex gap-3 mb-10 flex-wrap">
            <button className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">All</button>
            <button className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">Digital Art</button>
            <button className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">Mystical</button>
            <button className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">Futuristic</button>
            <button className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">Robotic</button>
            <button className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">Cinematic</button>
        </div>
    </div>
  )
}

export default header