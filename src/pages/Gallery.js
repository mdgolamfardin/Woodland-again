// Import the FloraFaunaFungi and ImgUpload subcomponents from the subcomponents folder
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";
import Images from "./subcomponents/Images";

// Define the Gallery component as a functional component
const Gallery = () => {
  return (
    // Wrapper div with responsive classes
    <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12 lg:px-28 2xl:px-40">
      {/* Heading */}
      <h1 className="break-normal text-4xl lg:text-5xl font-semibold text-headingClr mt-8 mb-4">
        Gallery
      </h1>
      <h2
        className="text-xl lg:text-2xl py-5  font-bold  no-shadow"
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
