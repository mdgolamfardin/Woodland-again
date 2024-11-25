// Import the Subcomponent component from the specified folder
import Subcomponent from "./subcomponents/SubExample";

// Define the SiteMap component as a functional component
const SiteMap = () => {
    return (
        // Return the JSX for rendering the Site Map component
        <div className="absolute left-10 top-20">
            {/* A large heading to indicate the Site Map component */}
            <h1 className="break-normal font-semibold text-7xl text-blue-900">
                This is the Site Map component.
            </h1>

            {/* Another heading mentioning who will work on this */}
            <h1 className="break-normal font-semibold text-7xl text-blue-900">
                Mariam will work on this.
            </h1>

            {/* A slightly smaller heading offering help to Mariam */}
            <h1 className="break-normal font-semibold text-5xl text-yellow-900">
                The rest of us will help her with any help she needs here.
            </h1>

            {/* Render the imported Subcomponent */}
            <Subcomponent />
        </div>
    );
}

// Export the SiteMap component so it can be used in other parts of the app
export default SiteMap;