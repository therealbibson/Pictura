import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import Personalization from "../components/personalization";

const Profile = () => {
  const navigate = useNavigate();
  const [showPersonalization, setShowPersonalization] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin", { replace: true });
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen pictura-bg text-white px-6 py-10 relative">
      {showPersonalization && (
        <>
          <div 
            className="fixed inset-0 z-10 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowPersonalization(false)}
          ></div>
          <div className="z-20">
            <Personalization />
          </div>
        </>
      )}

      <div className="flex items-center gap-5 mb-10">
        <img
          src="./public/Frame 130.svg"
          alt="profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <h1 className="text-3xl font-semibold">Shonen Toiko</h1>
      </div>

      <h2 className="text-sm text-white mb-4 font-bold">My Pictura</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-10">

        <div className="flex flex-col gap-4">
          <div onClick={() => setShowPersonalization(true)} className="bg-[#414141] rounded-lg p-4 text-sm duration-300 transition-all hover:bg-[#8f8f8b] cursor-pointer">Personalization</div>
          <Link to='' className="bg-[#414141] rounded-lg p-4 text-sm duration-300 transition-all hover:bg-[#8f8f8b]">Email</Link>
          <Link to='' className="bg-[#414141] rounded-lg p-4 text-sm duration-300 transition-all hover:bg-[#8f8f8b]">Languages</Link>
        </div>

        <div className="flex flex-col gap-4">
          <Link to='' className="bg-[#414141] rounded-lg p-4 text-sm duration-300 transition-all hover:bg-[#8f8f8b]">Settings</Link>
          <Link to='' className="bg-[#414141] rounded-lg p-4 text-sm duration-300 transition-all hover:bg-[#8f8f8b]">Help and feedback</Link>
        </div>

      </div>

      <div className="flex justify-center">
        <button 
          onClick={handleLogout}
          className="border border-gray-500 w-[684px] px-10 py-3 rounded-lg text-sm hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
        >
          Log out
        </button>
      </div>

    </div>
  );
};

export default Profile;