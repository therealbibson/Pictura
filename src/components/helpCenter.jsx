import React from "react";

const helpCenter = () => {
  return (
    <div className="absolute left-[22%] w-[55%] min-h-[550px] bg-[#050505] rounded-[1.5rem] z-20 pb-20 pt-20 shadow-2xl flex flex-col items-center">

      <h3 className="text-xl font-bold mb-20 tracking-wide">Help Center</h3>

      <div className="w-[65%] flex flex-col gap-5">
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Visit Help Center
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Report a problem
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Other feedback
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Contact us
        </div>
      </div>

    </div>
  );
};

export default helpCenter;