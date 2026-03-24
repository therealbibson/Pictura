import React from "react";

const Languages = () => {
  return (
    <div className="absolute left-[22%] w-[55%] min-h-[550px] bg-[#050505] rounded-[1.5rem] z-20 pb-10 pt-10 shadow-2xl flex flex-col items-center">

      <h3 className="text-xl font-bold mb-5 tracking-wide">kindly fill in the informations</h3>

      <div className="w-[65%] flex flex-col gap-5">
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          English
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Français
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Español
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          العربية
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Zhōngwén
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Deutsch
        </div>
      </div>

    </div>
  );
};

export default Languages;