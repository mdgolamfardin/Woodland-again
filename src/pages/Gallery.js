import { useEffect, useState } from "react";
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState([]);

  // Fetch images from the server after component mounts
  // Ensure that your backend endpoint returns a JSON array of images
  // Each image object should have at least { url, photographer, description }
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://ugdev.cs.smu.ca/~group25F/getImages"); 
        // The above URL is just an example. Replace it with your actual endpoint.
        setImages(response.data); 
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-28 2xl:px-40">
      <h1 className="break-normal text-4xl lg:text-5xl font-semibold text-headingClr mt-8 mb-4">
        Gallery
      </h1>

      {/* Responsive Image Grid */}
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="rounded-md overflow-hidden shadow-md bg-white">
            <img
              src={image.url}
              alt={image.description || "Uploaded Image"}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-left">
              {image.photographer && (
                <p className="font-semibold text-sm text-gray-800">
                  By: {image.photographer}
                </p>
              )}
              {image.description && (
                <p className="text-xs text-gray-600 mt-1">
                  {image.description}
                </p>
              )}
              {/* If you have a date or location fields, you can show them too:
                  <p className="text-xs text-gray-500 mt-1">Date: {image.date}</p>
                  <p className="text-xs text-gray-500 mt-1">Location: {image.location}</p>
              */}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-8">
        <ImgUpload />
      </div>
    </div>
  );
};

export default Gallery;