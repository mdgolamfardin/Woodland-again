import React, { useState } from "react";
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";

const Gallery = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div
            className={`${
                darkMode
                    ? "bg-gray-900 text-yellow-200"
                    : "bg-[#eceee2] text-black"
            } min-h-screen flex flex-col items-center`}
        >
            {/* Dark Mode Button */}
            <div className="w-full flex justify-end p-4">
                <button
                    onClick={toggleDarkMode}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition text-white"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* Heading */}
            <h1 className="break-normal text-4xl font-semibold lg:text-5xl text-headingClr mt-8 bm-4">
                Gallery
            </h1>

            {/* Subcomponents */}
            <FloraFaunaFungi />
            <ImgUpload darkMode={darkMode} />
        </div>
    );
};

export default Gallery;
