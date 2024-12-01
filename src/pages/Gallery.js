// Import the FloraFaunaFungi and ImgUpload subcomponents from the subcomponents folder
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';


// Define the Gallery component as a functional component
const Gallery = () => {
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

// Export the Gallery component so it can be used in other parts of the app
export default Gallery;