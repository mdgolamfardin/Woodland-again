// Import the Subcomponent component from the specified folder
import Subcomponent from "./subcomponents/SubExample";

// Define the About component as a functional component
const About = () => {
    return (
        <div className="absolute left-10 top-20 p-6 space-y-8">
            {/* Mission Statement */}
            <section className="mb-10">
                <h1 className="text-4xl font-bold text-center">Our Mission</h1>
                <p className="text-xl text-gray-600 text-center mt-4">
                    At Woodland Conservation, we aim to preserve and protect the natural beauty of our planet's woodlands while fostering community education and involvement in conservation efforts.
                </p>
            </section>

            {/* Render the imported Subcomponent */}
            <Subcomponent />

            {/* Team Members Section */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
                <div className="space-y-6">
                    {/* Team Member 1 */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src="team-member1.jpg" // Replace with actual image
                                alt="Team Member 1"
                                className="w-24 h-24 rounded-full object-cover cursor-pointer"
                            />
                        </div>
                        <div className="text-lg">
                            <p className="font-semibold">Fardin</p>
                            <p className="text-gray-500">Team Leader</p>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src="team-member2.jpg" // Replace with actual image
                                alt="Team Member 2"
                                className="w-24 h-24 rounded-full object-cover cursor-pointer"
                            />
                        </div>
                        <div className="text-lg">
                            <p className="font-semibold">Mariam</p>
                            <p className="text-gray-500">Frontend Developer</p>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src="team-member3.jpg" // Replace with actual image
                                alt="Team Member 3"
                                className="w-24 h-24 rounded-full object-cover cursor-pointer"
                            />
                        </div>
                        <div className="text-lg">
                            <p className="font-semibold">Yomama</p>
                            <p className="text-gray-500">Backend Developer</p>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src="team-member4.jpg" // Replace with actual image
                                alt="Team Member 4"
                                className="w-24 h-24 rounded-full object-cover cursor-pointer"
                            />
                        </div>
                        <div className="text-lg">
                            <p className="font-semibold">Alex</p>
                            <p className="text-gray-500">UI/UX Designer</p>
                        </div>
                    </div>

                    {/* Team Member 5 */}
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src="team-member5.jpg" // Replace with actual image
                                alt="Team Member 5"
                                className="w-24 h-24 rounded-full object-cover cursor-pointer"
                            />
                        </div>
                        <div className="text-lg">
                            <p className="font-semibold">Chris</p>
                            <p className="text-gray-500">Marketing Specialist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section>
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <div className="flex space-x-6">
                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="facebook-icon.png" // Replace with actual icon
                            alt="Facebook"
                            className="w-10 h-10 cursor-pointer"
                        />
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="twitter-icon.png" // Replace with actual icon
                            alt="Twitter"
                            className="w-10 h-10 cursor-pointer"
                        />
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="instagram-icon.png" // Replace with actual icon
                            alt="Instagram"
                            className="w-10 h-10 cursor-pointer"
                        />
                    </a>
                </div>
            </section>
        </div>
    );
};

// Export the About component so it can be used in other parts of the app
export default About;
