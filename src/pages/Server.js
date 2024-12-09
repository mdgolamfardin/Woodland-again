// import { useEffect, useState } from "react";
// import axios from "axios";

// /**
//  * Images Component
//  * 
//  * Fetches and displays all images from the uploads directory.
//  * If an image fails to load, it skips the image and logs the URL to the console.
//  * 
//  * @returns {JSX.Element} The rendered component.
//  */
// const Images = () => {
//   const [images, setImages] = useState([]); // State to store image URLs
//   const [error, setError] = useState(null); // State to handle errors
//   const [validImages, setValidImages] = useState([]); // State for successfully loaded images

//   // Fetch image URLs from the server
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await axios.get("/images");
//         setImages(response.data); // Assume response.data contains the array of image URLs
//       } catch (err) {
//         console.error("Error fetching images:", err);
//         setError("Failed to load images.");
//       }
//     };

//     fetchImages();
//   }, []);

//   // Filter out invalid images dynamically
//   const handleImageError = (imageUrl) => {
//     console.error(`Failed to load image: ${imageUrl}`);
//     setValidImages((prevValidImages) =>
//       prevValidImages.filter((img) => img !== imageUrl)
//     );
//   };

//   // Populate validImages with initial image URLs
//   useEffect(() => {
//     if (images.length > 0) {
//       setValidImages(images);
//     }
//   }, [images]);

//   // Render images or an error message
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
//       {error && (
//         <div className="col-span-full text-red-500">
//           {error}
//         </div>
//       )}
//       {validImages.map((image, index) => (
//         <div key={index} className="relative">
//           <img
//             src={image}
//             alt={`Gallery item ${index + 1}`}
//             className="w-full h-auto rounded-lg shadow-md"
//             onError={() => handleImageError(image)} // Handle image load error
//           />
//         </div>
//       ))}
//       {!error && validImages.length === 0 && (
//         <div className="col-span-full text-gray-500">
//           No images available.
//         </div>
//       )}
//     </div>
//   );
// };

// export default Images;