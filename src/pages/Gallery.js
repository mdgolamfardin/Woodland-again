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
        <div className={darkMode ? "dark gallery-container" : "gallery-container"}>
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="p-2 mt-4 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

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
