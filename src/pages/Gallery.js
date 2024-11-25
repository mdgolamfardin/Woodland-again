// Import the FloraFaunaFungi and ImgUpload subcomponents from the subcomponents folder
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";

// Define the Gallery component as a functional component
const Gallery = () => {
    return (
        // Return the JSX to render the Gallery component
        <div className="flex-row items-center text-center lg:px-28 2xl:px-52">
            {/* A heading to describe the Gallery component */}
            <h1 className="break-normal text-4xl font-semibold lg:text-5xl text-headingClr mt-8 bm-4">
                Gallery
            </h1>

            {/* Render the FloraFaunaFungi subcomponent */}
            <FloraFaunaFungi />

            {/* Render the ImgUpload subcomponent */}
            <ImgUpload />
        </div>
    );
}

// Export the Gallery component so it can be used in other parts of the app
export default Gallery;