import React, { useState, useEffect } from "react";

function ImageCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageClass, setImageClass] = useState(""); // Dynamically apply `w-full` or `h-full`

  const handleImageClick = () => {
    setIsModalOpen(true); // Open the modal when the image is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal when clicking outside
  };

  useEffect(() => {
    // Disable/enable body scrolling based on modal state
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup to reset overflow style on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    // Dynamically check dimensions of the image
    const imgElement = document.querySelector(".big-img");
    if (imgElement) {
      if (imgElement.complete) {
        updateImageClass(imgElement);
      } else {
        imgElement.onload = () => updateImageClass(imgElement);
      }
    }
  }, [isModalOpen]);

  const updateImageClass = (imgElement) => {
    if (imgElement.naturalWidth > imgElement.naturalHeight) {
      setImageClass("w-full"); // Take full width
    } else {
      setImageClass("h-full"); // Take full height
    }
  };

  return (
    <div className="relative flex-row space-y-4 bg-white smshadow rounded-xl my-2">
      {/* Main Image Container */}
      <div
        className="custom-scale relative group h-52 overflow-hidden rounded-xl transition-transform duration-300 hover:cursor-pointer"
        onClick={handleImageClick} // Open modal on click
      >
        {/* Image */}
        <img
          className="w-full h-full object-cover object-[50%_50%] rounded-md"
          src={props.url}
          alt="img"
        />

        {/* Title Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-white text-2xl font-bold mb-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            {props.title}
          </h3>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed bottom-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50"
          onClick={handleCloseModal} // Close modal on clicking outside
        >
          <div
            className="bg-white w-[1100px] h-[700px] rounded-2xl flex flex-row items-stretch shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Left Black Section */}
            <div className="bg-black basis-2/3 rounded-l-2xl border-[1px] border-gray-300 flex items-center justify-center overflow-hidden">
              <img
                className={`big-img ${imageClass} object-cover`}
                src={props.url}
                alt="modal-img"
              />
            </div>

            {/* Right White Section */}
            <div className="bg-bgClr basis-1/3 h-full rounded-r-2xl p-6 flex flex-col justify-between">
              {/* Top Right "X" Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal} // Close the modal when the button is clicked
                  className="text-gray-400 hover:text-gray-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </button>
              </div>

              {/* Centered Title and Description */}
              <div className="bg-white rounded-xl py-8 px-6 flex flex-col items-center text-center shadow-md">
                <h2 className="text-3xl font-bold text-gray-800 tracking-wide">
                  {props.title}
                </h2>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                  {props.description}
                </p>
              </div>

              {/* Bottom Audio Player */}
              <div className="w-full mt-4">
                <audio
                  src={props.aud}
                  className="w-full rounded-full bg-gray-200 shadow-md"
                  controls
                ></audio>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCard;