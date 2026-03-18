import React from "react";
import Nav2 from "../components/nav2";
import Header from "../components/header";
import Card1 from '../assets/images/Frame 89.svg'
import Card2 from '../assets/images/Frame 89 (1).svg'
import Card3 from '../assets/images/Frame 89 (2).svg'
import Card4 from '../assets/images/Frame 89 (3).svg'
import Card5 from '../assets/images/Frame 89 (4).svg'
import Card6 from '../assets/images/Frame 89 (5).svg'
import Card7 from '../assets/images/Frame 89 (6).svg'
import Card8 from '../assets/images/Frame 89 (7).svg'

const Gallery = () => {
  const galleryItems = [
    { img: Card1, title: "Elegant beauty in Digital form" },
    { img: Card2, title: "Mystical creatures" },
    { img: Card3, title: "Robotic harmony" },
    { img: Card4, title: "Futuristic cityscape" },
    { img: Card5, title: "Cyberpunk Neon" },
    { img: Card6, title: "Abstract Fluidity" },
    { img: Card7, title: "Ancient Ruins AI" },
    { img: Card8, title: "Hyper-realistic Nature" },
  ];

  return (
    <div className="min-h-screen pictura-bg text-white p-4 md:p-6 lg:p-10 overflow-x-hidden">
      
      <Nav2 />
      <Header />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-10">
        
        {galleryItems.map((item, index) => (
          <div 
            key={index} 
            // 1. We define 'group' on the parent card to listen for hover
            className="group bg-gray-800/50 backdrop-blur-sm h-auto rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#ff8c42] transition-all duration-300"
          >
            {/* 2. 'overflow-hidden' on this container is critical to mask the scaled image */}
            <div className="p-1 h-32 sm:h-40 md:h-48 overflow-hidden rounded-xl">
              <img 
                src={item.img} 
                alt={item.title} 
                // 3. Add these transition and scale utilities:
                // - transition-transform: animates transform properties
                // - duration-500: smoothness
                // - group-hover:scale-110: when card (group) is hovered, scale this image to 110%
                className="object-cover h-full w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110" 
              />
            </div>
            
            <p className="font-medium p-3 pt-1 text-xs md:text-sm lg:text-base leading-tight">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;
