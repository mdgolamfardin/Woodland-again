// Import the FloraFaunaFungi and ImgUpload subcomponents from the subcomponents folder
import ImgUpload from "./subcomponents/ImgUpload";
import Images from "./subcomponents/Images";
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeContext";
// Define the Gallery component as a functional component
const Gallery = () => {
  const  { darkMode } = useContext(DarkModeContext);

  return (
    // Wrapper div with responsive classes
    <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-28 2xl:px-40">
      {/* Heading */}
      <h1
        className={`text-4xl lg:text-5xl  font-bold  pt-10 mb-10 no-shadow ${
          darkMode ? "text-white" : "text-[#103c84]"
        }`}
      >
        Gallery
      </h1>
      <h2
        className={`text-xl lg:text-2xl mb-5  font-bold  no-shadow ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Take a look at the stunning photos taken right here.
      </h2>

      {/* Images, this is the component you, chatgpt, write for me */}
      <div className="w-full">
        <Images />
      </div>

      <div className="w-full mt-8">
        <ImgUpload />
      </div>
    </div>
  );
};

// Export the Gallery component so it can be used in other parts of the app
export default Gallery;
