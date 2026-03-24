import React from "react";

const Personalization = () => {
  return (
    <div className="absolute left-[22%] w-[55%] min-h-[550px] bg-[#050505] rounded-[1.5rem] z-20 pb-10 pt-10 shadow-2xl flex flex-col items-center">

      <h3 className="text-xl font-bold mb-5 tracking-wide">Personalization</h3>

      <div className="w-[65%] flex flex-col gap-5">
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Base style
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          Your nickname
        </div>
        <div className="w-full h-14 bg-[#4a4a4d] rounded-xl flex items-center px-6 text-sm text-gray-300 shadow-inner cursor-text hover:bg-[#555558] transition">
          More about you
        </div>
      </div>

    </div>
  );
};

export default Personalization;