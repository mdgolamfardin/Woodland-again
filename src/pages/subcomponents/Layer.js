import React, { useState } from "react";
import ImageCard from "./ImageCard";
import { motion } from "framer-motion";


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

  // Function to handle button click
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  

  // Limit the data displayed based on the button state
  const visibleData = showMore ? props.data : props.data.slice(0, 9);
  var baseHeight = 240;

  return (
    <div className="mb-12 lg:px-8 md:px-4 mt-2">
      <h2 className="text-left text-3xl lg:text-4xl  font-bold text-subClr mb-2 pl-4">
        {props.heading }
      </h2>
      
      <motion.div 
        initial={{ height: baseHeight.toString() + "px" }}
        animate={{ height: showMore ? "auto" :  baseHeight.toString() + "px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden "
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-3 gap-y-1 px-2 md:px-4 lg:px-6 2xl:grid-cols-5 py-2 "
        >
          {visibleData.map((imgInfo) => createImageCard(imgInfo))}
        </div>
      </motion.div>
      <button
        onClick={toggleShowMore}
        className="mt-6 mb-4 bg-white text-lg px-5 py-3
        lg:mt-8 lg:mb-6 lg:bg-white lg:text-xl lg:px-6 lg:py-3
        xl:mt-8 xl:mb-6 xl:bg-white xl:text-xl xl:px-6 xl:py-3
        text-gray-600 rounded-full hover:bg-gray-200"
      >
        {showMore ? "Show Less"  : "Show More"}
      </button>
      
    </div>
  );
}

export default Layer;