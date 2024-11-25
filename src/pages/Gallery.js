// Import the FloraFaunaFungi and ImgUpload subcomponents from the subcomponents folder
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import ImgUpload from "./subcomponents/ImgUpload";

// Define the Gallery component as a functional component
const Gallery = () => {
    return (
        <div className={darkMode ? "dark gallery-container" : "gallery-container"}>
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="p-2 mt-4 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>

            {/* Heading */}
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