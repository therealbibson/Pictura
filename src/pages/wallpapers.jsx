import React from "react";
import Logo from '../assets/images/logo.png'
import { Link } from "react-router-dom";
import { FaRegHeart, FaRegBookmark } from "react-icons/fa";

const Wallpapers = () => {
  const images = [
    "/wp8.svg",
    "/wp7.svg",
    "/wp6.svg",
    "/wp5.svg",
    "/wp4.svg",
    "/wp3.svg",
    "/wp2.svg",
    "/wp1.svg",
  ];

  return (
    <div className="pictura-bg min-h-screen text-white px-5 py-5">

      <img src={Logo} alt="Logo" className='pb-5 w-[100px] md:w-[120px] h-auto' />

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Wallpapers</h2>

        <div className="flex gap-3">
          <Link to='' className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">
            Featured
          </Link>
          <Link to='' className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">
            New
          </Link>
          <Link to='' className="px-4 py-1 bg-[#8f8f8b] text-black rounded-full duration-300 transition-all hover:bg-[#f5f5f0]">
            All
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={img}
              alt="wallpaper"
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
              <button className="bg-black/60 p-1 rounded-full text-xs">
                <FaRegHeart />
              </button>
              <button className="bg-black/60 p-1 rounded-full text-xs">
                <FaRegBookmark />
              </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Wallpapers;