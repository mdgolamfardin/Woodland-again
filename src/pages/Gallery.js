<<<<<<< HEAD
// Import the FloraFaunaFungi and ImgUpload subcomponents from the subcomponents folder
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
=======
/**
 * Gallery Component
 * 
 * This component renders the gallery page for the application. It displays a heading and a list 
 * of images uploaded by users, along with the option to upload more images. The gallery page 
 * dynamically adjusts its appearance based on the dark mode state, which is managed by the 
 * DarkModeContext.
 * 
 * @fileoverview Gallery page component that displays images and an upload section, 
 * with styling adjustments for dark mode.
 * @author Md Golam Fardin
 */
>>>>>>> a084acec5f86c0a9a0fa130591b56033b1292a82

// Import the ImgUpload and Images subcomponents for displaying and uploading images
import ImgUpload from "./subcomponents/ImgUpload";
import Images from "./subcomponents/Images";

// Import the useContext hook to access the dark mode state
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";

// Define the Gallery component as a functional component
const Gallery = () => {
<<<<<<< HEAD
     // Array of background image URLs
  const images = [
    'https://ugdev.cs.smu.ca/~group24H/images/flora-fauna/American%20Black%20Bear.jpg',
    'https://ugdev.cs.smu.ca/~group24H/images/flora-fauna/White-tailed%20Deer.jpg',
    'https://ugdev.cs.smu.ca/~group24H/images/flora-fauna/American%20Red%20Squirrel.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Function to update the background image index
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="gallery">
      <header
        className="gallery-header h-64 flex-row items-center text-center lg:px-28 2xl:px-52"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          width: '100%',
          height: '30vh',
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.5s ease-in-out',
          backgroundColor: 'beige',
        }}
      >
        <h1 className="text-8xl font-bold">Woodland Gallery</h1>
        <p className="text-lg mt-2">Explore the beauty of nature.</p>
      </header>
          
        
          {/* Render the FloraFaunaFungi subcomponent */}
          <FloraFaunaFungi />
        
          {/* Render the ImgUpload subcomponent */}
          <ImgUpload />
        </div>
    );
}
=======
  // Access the darkMode state from the DarkModeContext
  const { darkMode } = useContext(DarkModeContext);

  return (
    // Wrapper div with responsive classes, adjusts based on dark mode
    <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-28 2xl:px-40">
      {/* Gallery Heading */}
      <h1
        className={`text-4xl lg:text-5xl font-bold pt-14 mb-10 no-shadow ${
          darkMode ? "text-white" : "text-[#103c84]"
        }`}
      >
        Gallery
      </h1>
      {/* Subheading */}
      <h2
        className={`text-xl lg:text-2xl mb-5 font-bold no-shadow ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Take a look at the stunning photos taken right here.
      </h2>

      {/* Images Section */}
      <div className="w-full">
        {/* Display Images using the Images component */}
        <Images />
      </div>

      {/* Upload Section */}
      <div className="w-full mt-8">
        {/* Provide an option for users to upload images */}
        <ImgUpload />
      </div>
    </div>
  );
};
>>>>>>> a084acec5f86c0a9a0fa130591b56033b1292a82

// Export the Gallery component so it can be used in other parts of the app
export default Gallery;