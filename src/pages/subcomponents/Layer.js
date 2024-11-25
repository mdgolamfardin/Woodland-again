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
    <div className="mb-12 mt-2">
      <h2 className="text-left text-4xl font-bold text-subClr mb-2 pl-4">
        {props.heading }
      </h2>
      
      <motion.div 
        initial={{ height: baseHeight.toString() + "px" }}
        animate={{ height: showMore ? "auto" :  baseHeight.toString() + "px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden "
      >
        <div
          className="grid grid-cols-4 gap-x-3 gap-y-1 px-3 2xl:grid-cols-5 py-2 "
        >
          {visibleData.map((imgInfo) => createImageCard(imgInfo))}
        </div>
      </motion.div>
      <button
        onClick={toggleShowMore}
        className="mt-8 mb-6 bg-white text-xl text-gray-600 px-6 py-3 rounded-full hover:bg-gray-200"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      
    </div>
  );
}

export default Layer;