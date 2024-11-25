// Import the Subcomponent component from the specified folder
import Subcomponent from "./subcomponents/SubExample";

// Define the About component as a functional component
const About = () => {
    return (
        // Return the JSX for rendering the About component
        <div className="absolute left-10 top-20">
            {/* A large heading with specific styles */}
            <h1 className="break-normal font-semibold text-7xl text-blue-900">
                This is the About component.
            </h1>

            {/* Another heading with the same styles, but different content */}
            <h1 className="break-normal font-semibold text-7xl text-blue-900">
                Mariam will work on this.
            </h1>

            {/* Render the imported Subcomponent */}
            <Subcomponent />
        </div>
    );
}

// Export the About component so it can be used in other parts of the app
export default About;