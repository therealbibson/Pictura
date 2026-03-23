import React from 'react';

const Languages = () => {
  const languages = [
    "English",
    "Français",
    "Español",
    "العربية",
    "(Zhōngwén)",
    "Deutsch",
    ""
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1c1e] p-4">

        <div className="w-full max-w-2xl bg-black rounded-3xl p-8 shadow-2xl">
            <div className="flex flex-col space-y-4">
                {languages.map((lang, index) => (
                    <button
                        key={index}
                        className="w-full bg-[#404040] hover:bg-[#4a4a4a] transition-colors duration-200 py-6 px-8 rounded-2xl text-left text-white text-lg font-medium shadow-sm"
                    >
                        {lang}  
                    </button>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Languages;