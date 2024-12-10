import React, { useState, useContext } from "react";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../DarkModeContext"; // Access dark mode context

function createImageCard(imgInfo) {
  return (
    <ImageCard
      key={imgInfo.id} // Ensure each ImageCard has a unique key
      url={imgInfo.url}
      aud={imgInfo.aud}
      title={imgInfo.title}
      description={imgInfo.description}
    />
  );
}

function Layer(props) {
  const [showMore, setShowMore] = useState(false);
  const darkMode = useContext(DarkModeContext);

  // Function to handle button click
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  // Limit the data displayed based on the button state
  const visibleData = showMore ? props.data : props.data.slice(0, 9);
  var baseHeight = 240;

  return (
    <div className="mb-12">
      <h2
        className={`text-left text-3xl lg:text-4xl font-bold mb-2 pl-4 ${
          darkMode ? "text-gray-200" : "text-subClr"
        }`}
      >
        {props.heading}
      </h2>

      <motion.div
        initial={{ height: baseHeight.toString() + "px" }}
        animate={{ height: showMore ? "auto" : baseHeight.toString() + "px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden "
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-1 px-2 md:px-4 lg:px-6 2xl:grid-cols-5 py-2 ">
          {visibleData.map((imgInfo) => createImageCard(imgInfo))}
        </div>
      </motion.div>

      <button
        onClick={toggleShowMore}
        className={`shadow-sm font-bold mt-6 mb-4 text-lg px-4 py-2 rounded-full border border-0.6=5 
    ${
      darkMode
        ? "bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
        : "bg-white text-blue-900 hover:bg-gray-200 border-blue-900"
    }
    lg:mt-8 lg:mb-6 lg:px-4 lg:py-2 xl:mt-8 xl:mb-6 xl:px-4 xl:py-2`}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default Layer;
