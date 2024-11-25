// Define the About component as a functional component
const About = () => {
    return (
        <div className="p-8 space-y-12">
            {/* Mission Statement */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-blue-900">Our Mission</h1>
                <p className="text-xl text-gray-700">
                    At Woodland Conservation, we aim to preserve and protect the natural beauty of our planet's woodlands while fostering community education and involvement in conservation efforts.
                </p>
            </section>

            {/* Team Members Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Meet Our Team</h2>
                <div className="grid grid-cols-5 gap-x-8 gap-y-12 items-center justify-center">
                    {/* Row 1: Team Members 1, 2, and 3 */}
                    <div className="col-start-1 col-span-1 text-center">
                        <img
                            src="team-member1.jpg" // Replace with actual image
                            alt="Team Member 1"
                            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Fardin</p>
                        <p className="text-gray-500">Team Leader</p>
                    </div>

                    <div className="col-start-2 col-span-1 text-center">
                        <img
                            src="team-member2.jpg" // Replace with actual image
                            alt="Team Member 2"
                            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Mariam</p>
                        <p className="text-gray-500">Frontend Developer</p>
                    </div>

                    <div className="col-start-3 col-span-1 text-center">
                        <img
                            src="team-member3.jpg" // Replace with actual image
                            alt="Team Member 3"
                            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Yomama</p>
                        <p className="text-gray-500">Backend Developer</p>
                    </div>

                    {/* Row 2: Team Members 4 and 5 */}
                    <div className="col-start-2 col-span-1 text-center">
                        <img
                            src="team-member4.jpg" // Replace with actual image
                            alt="Team Member 4"
                            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Alex</p>
                        <p className="text-gray-500">UI/UX Designer</p>
                    </div>

                    <div className="col-start-3 col-span-1 text-center">
                        <img
                            src="team-member5.jpg" // Replace with actual image
                            alt="Team Member 5"
                            className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Chris</p>
                        <p className="text-gray-500">Marketing Specialist</p>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">Follow Us</h2>
                <div className="flex justify-center space-x-6">
                    {/* Facebook */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="facebook-icon.png" // Replace with actual icon
                            alt="Facebook"
                            className="w-12 h-12 hover:scale-110 transition-transform"
                        />
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="twitter-icon.png" // Replace with actual icon
                            alt="Twitter"
                            className="w-12 h-12 hover:scale-110 transition-transform"
                        />
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="instagram-icon.png" // Replace with actual icon
                            alt="Instagram"
                            className="w-12 h-12 hover:scale-110 transition-transform"
                        />
                    </a>
                </div>
            </section>
        </div>
    );
};

// Export the About component so it can be used in other parts of the app
export default About;

