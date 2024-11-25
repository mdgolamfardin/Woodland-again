// Import the Subcomponent component from the specified folder
import Subcomponent from "./subcomponents/SubExample";

// Define the About component as a functional component
const About = () => {
    return (
        // Return the JSX for rendering the About component
        <div className="absolute left-10 top-20">
            {/* Render the imported Subcomponent */}
            

            {/* Section for displaying team members */}
            <div className="mt-10">
                {/* Team Member 1 */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <img
                            src="team-member1.jpg" /* Replace with actual image */
                            alt="Team Member 1"
                            className="w-24 h-24 rounded-full object-cover cursor-pointer"
                        />
                    </div>
                    <div className="text-lg">
                        <p className="font-semibold">Fardin</p>
                        <p className="text-gray-500">Role Description</p>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="flex items-center space-x-4 mt-6">
                    <div className="relative">
                        <img
                            src="team-member2.jpg" /* Replace with actual image */
                            alt="Team Member 2"
                            className="w-24 h-24 rounded-full object-cover cursor-pointer"
                        />
                    </div>
                    <div className="text-lg">
                        <p className="font-semibold">mariam</p>
                        <p className="text-gray-500">Role Description</p>
                    </div>
                </div>

                {/* Team Member 3 */}
                <div className="flex items-center space-x-4 mt-6">
                    <div className="relative">
                        <img
                            src="team-member3.jpg" /* Replace with actual image */
                            alt="Team Member 3"
                            className="w-24 h-24 rounded-full object-cover cursor-pointer"
                        />
                    </div>
                    <div className="text-lg">
                        <p className="font-semibold">yomama</p>
                        <p className="text-gray-500">Role Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the About component so it can be used in other parts of the app
export default About;
