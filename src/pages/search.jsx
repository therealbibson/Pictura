import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaMagic } from "react-icons/fa";

const Search = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Mapping of keywords to your assets in the public folder
  const dummyImages = [
    { img: '/images/Frame 89 (4).svg', keywords: ['CYBERPUNK', 'NEON', 'FUTURE', 'CITY'] },
    { img: '/images/Frame 89 (7).svg', keywords: ['NATURE', 'REALISTIC', 'FOREST', 'GREEN'] },
    { img: '/images/Frame 89 (5).svg', keywords: ['ABSTRACT', 'FLUID', 'COLORS', 'ART'] },
    { img: '/images/Frame 89 (2).svg', keywords: ['ROBOT', 'AI', 'TECH', 'HARMONY'] },
    { img: '/images/Frame 89 (3).svg', keywords: ['CITYSCAPE', 'BUILDING', 'URBAN'] },
    { img: '/images/Frame 89 (6).svg', keywords: ['ANCIENT', 'RUINS', 'HISTORY', 'STONE'] },
    { img: '/images/Frame 89 (1).svg', keywords: ['MYSTICAL', 'CREATURE', 'FANTASY', 'MAGIC'] },
    { img: '/images/Frame 89.svg', keywords: ['BEAUTY', 'DIGITAL', 'ELEGANT', 'WOMAN'] },
    { img: '/images/Frame 118.svg', keywords: ['PHOTOREALISTIC', 'PORTRAIT'] },
    { img: '/images/Frame 120.svg', keywords: ['STUDIO GHIBLI', 'ANIME', 'VINTAGE'] },
    { img: '/images/Frame 122.svg', keywords: ['OIL PAINTING', 'CANVAS', 'BRUSH'] },
    { img: '/images/Frame 124.svg', keywords: ['3D RENDER', 'CGI', 'OCTANE'] },
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImageUrl(null);

    // Simulate a professional generation delay (2 seconds)
    setTimeout(() => {
      const upperPrompt = prompt.toUpperCase();
      
      // Filter logic: Find images that match any keyword in the prompt
      const matches = dummyImages.filter(item => 
        item.keywords.some(keyword => upperPrompt.includes(keyword))
      );

      // If matches found, pick one at random. Otherwise, pick any random image from the set.
      const pool = matches.length > 0 ? matches : dummyImages;
      const randomResult = pool[Math.floor(Math.random() * pool.length)];
      
      setImageUrl(randomResult.img);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='pictura-bg text-[#F5F5F0] flex flex-col min-h-screen w-full items-center justify-center p-4 md:p-6'>
        <div className='flex flex-col w-full max-w-2xl'>
          
          <h1 className="text-2xl font-bold text-[#ff8c42] mb-6 text-center">Pictura AI Generator</h1>

          <div className={`border border-dashed border-gray-500 rounded-xl w-full text-center p-6 md:p-12 mb-6 md:mb-10 min-h-[350px] flex flex-col items-center justify-center relative overflow-hidden bg-black/20`}>
            {imageUrl ? (
              <div className="relative w-full h-full group animate-in fade-in zoom-in duration-500">
                <img src={imageUrl} alt="Generated Artwork" className="w-full h-full object-contain rounded-lg shadow-2xl" />
                <button onClick={() => setImageUrl(null)} className="absolute top-2 right-2 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
              </div>
            ) : loading ? (
              <div className="flex flex-col items-center">
                <FaMagic className="text-5xl mb-6 text-[#ff8c42] animate-bounce" />
                <p className="text-lg font-medium text-white">Generating Artwork...</p>
                <p className="text-gray-400 text-sm mt-2 animate-pulse">Processing your prompt with AI</p>
              </div>
            ) : (
              <div className="max-w-md">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full text-2xl bg-white/5 text-[#ff8c42]">
                  <FaMagic />
                </div>
                <h2 className="text-xl font-semibold mb-3 text-white">Ready to Create?</h2>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Describe any scene. Our AI engine will transform your text into high-quality visuals instantly.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {['PHOTOREALISTIC', 'DIGITAL ART', 'CYBERPUNK', 'STUDIO GHIBLI', 'NATURE'].map((tag) => (
               <button key={tag} onClick={() => setPrompt(prev => prev ? `${prev}, ${tag}` : tag)}
                 className="px-4 py-1.5 bg-white/5 border border-white/10 text-white hover:bg-[#ff8c42] hover:border-[#ff8c42] rounded-full text-[10px] md:text-xs cursor-pointer transition-all">
                 {tag}
               </button>
            ))}
          </div>

          <div className="relative w-full group">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleGenerate())}
              placeholder='A futuristic cyberpunk city at night with neon lights...' 
              className='border border-white/10 bg-black/60 backdrop-blur-xl rounded-3xl p-6 pb-20 w-full resize-none outline-none focus:border-[#ff8c42] focus:ring-1 focus:ring-[#ff8c42] transition-all min-h-[160px] text-white placeholder-gray-500' 
            />
            <div className='absolute bottom-4 left-6 right-6 flex justify-between items-center'>
                <button className='flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 text-xs transition-colors text-gray-300'>
                  <CiImageOn className="text-xl text-[#ff8c42]" /> 
                  <span className="hidden sm:inline">Reference</span>
                </button>
                <button 
                  onClick={handleGenerate}
                  disabled={loading || !prompt.trim()}
                  className={`transition-all ${loading || !prompt.trim() ? 'text-gray-700' : 'text-[#ff8c42] hover:scale-110 active:scale-95'}`}
                >
                  <IoArrowUpCircleOutline className="text-6xl" />
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Search
