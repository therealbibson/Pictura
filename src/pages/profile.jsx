import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav2 from "../components/nav2";
import { auth } from "../lib/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        // If user is not logged in, redirect them
        navigate("/signin");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin", { replace: true });
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className="min-h-screen pictura-bg text-[#F5F5F0] p-4 md:p-6 lg:p-10 overflow-x-hidden flex flex-col items-center">
      <div className="w-full max-w-full">
        <Nav2 />
      </div>

      <div className="flex flex-col items-center flex-1 w-full max-w-2xl mt-8 p-8 md:p-12 bg-white/5 rounded-[2rem] backdrop-blur-xl border border-white/10 shadow-2xl">
        <FaUserCircle className="w-24 h-24 md:w-32 md:h-32 text-[#ff8c42] mb-6 drop-shadow-lg" />
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide">My Profile</h1>
        <p className="text-lg opacity-70 mb-10 font-light">{userEmail || "Loading..."}</p>

        <div className="w-full flex flex-col gap-4 mt-auto">
          <button className="bg-[#f5f5f0] text-black w-full py-4 rounded-full font-medium text-lg hover:scale-[1.02] transition-transform duration-300 shadow-lg">
            Edit Profile
          </button>
          
          <button 
            onClick={handleLogout}
            className="w-full py-4 rounded-full font-medium text-lg border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
