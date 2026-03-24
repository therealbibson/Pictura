import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.png'

const SavedImages = () => {
    const [activeTab, setActiveTab] = useState('creations');
    const [savedWallpapers, setSavedWallpapers] = useState([]);
    const [creations, setCreations] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedWebImages') || '[]');
        setSavedWallpapers(saved);
        const saved2 = JSON.parse(localStorage.getItem('savedCreations') || '[]');
        setCreations(saved2);
    }, []);

    const images = [
        { id: 1, src: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400&h=300&fit=crop" },
        { id: 2, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=300&fit=crop" },
        { id: 3, src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=400&h=300&fit=crop" },
        { id: 4, src: "https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=400&h=300&fit=crop" },
        { id: 5, src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&h=300&fit=crop" },
        { id: 6, src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400&h=300&fit=crop" },
        { id: 7, src: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=400&h=300&fit=crop" },
        { id: 8, src: "https://images.unsplash.com/photo-1550684847-75bdda21cc95?q=80&w=400&h=300&fit=crop" },
    ];

    return (
        <div className="pictura-bg min-h-screen text-white px-5 py-5">
            <img src={Logo} alt="Logo" className='pb-5 w-[100px] md:w-[120px] h-auto' />

            <h1 className="text-3xl font-bold mb-4">Saved images</h1>

            <div className="mb-12">
                <div className="flex bg-[#8c918a] rounded-xl p-[10px]">
                    <button 
                        onClick={() => setActiveTab('creations')}
                        className={`flex-1 p-[10px] ${activeTab === 'creations' ? 'bg-[#f0f2eb]' : ''} text-black font-medium rounded-lg text-lg flex items-center justify-center transition-all`}
                    >
                        Creations
                    </button>
                    <button 
                        onClick={() => setActiveTab('saved')}
                        className={`flex-1 p-[10px] ${activeTab === 'saved' ? 'bg-[#f0f2eb]' : ''} text-black font-medium rounded-lg text-lg flex items-center justify-center transition-all`}
                    >
                        Saved wallpaper
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(activeTab === 'creations' ? creations : savedWallpapers).map((img, index) => (
                    <div key={img.id || index} className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/3]">
                        <img
                            src={img.src}
                            alt={`Saved item ${img.id || index}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                ))}
                {activeTab === 'saved' && savedWallpapers.length === 0 && (
                    <div className="col-span-full text-center text-gray-400 py-10">No saved wallpapers yet.</div>
                )}
                {activeTab === 'creations' && creations.length === 0 && (
                    <div className="col-span-full text-center text-gray-400 py-10">No creations saved yet. Generate an image and click the bookmark icon!</div>
                )}
            </div>
        </div>
    );
};

export default SavedImages;