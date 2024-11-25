const About = () => {
    return (
        <div className="p-8 flex flex-col items-center">
            {/* Mission Statement */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-blue-900">Our Mission</h1>
                <p className="text-xl text-gray-700 max-w-3xl">
                At Woodland Conservation, we protect biodiversity and historic woodlands, 
                including those around graveyards. Through sustainable practices and community 
                engagement, we honor the connection between nature and heritage, inspiring action 
                to preserve these sacred spaces for future generations.
                </p>
            </section>

            {/* Team Members Section */}
            <section className="space-y-8 mt-10">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Meet Our Team</h2>
                <div
                    className="grid grid-cols-3 gap-y-10 gap-x-16 justify-items-center items-center" // Increased gap-x for horizontal spacing
                    style={{
                        gridTemplateRows: "auto auto", // Two rows
                        gridTemplateColumns: "1fr 1fr 1fr", // Three columns
                    }}
                >
                    {/* Row 1: Team Members 1, 2, and 3 */}
                    <div className="text-center">
                        <img
                            src="team-member1.jpg" // Replace with actual image
                            alt="Team Member 1"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" // Increased size to 40
                        />
                        <p className="mt-4 text-lg font-semibold">Fardin</p>
                        <p className="text-gray-500">Team Leader</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="team-member2.jpg" // Replace with actual image
                            alt="Team Member 2"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" // Increased size to 40
                        />
                        <p className="mt-4 text-lg font-semibold">Mariam</p>
                        <p className="text-gray-500">Frontend Developer</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="team-member3.jpg" // Replace with actual image
                            alt="Team Member 3"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" // Increased size to 40
                        />
                        <p className="mt-4 text-lg font-semibold">Yomama</p>
                        <p className="text-gray-500">Backend Developer</p>
                    </div>

                    {/* Row 2: Team Members 4 and 5 */}
                    <div
                        className="text-center"
                        style={{
                            gridColumn: "1 / span 2", // Alex spans columns 1 and 2
                            gridRow: "2", // Explicitly set to row 2
                        }}
                    >
                        <img
                            src="team-member4.jpg" // Replace with actual image
                            alt="Team Member 4"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" // Increased size to 40
                        />
                        <p className="mt-4 text-lg font-semibold">Alex</p>
                        <p className="text-gray-500">UI/UX Designer</p>
                    </div>

                    <div
                        className="text-center"
                        style={{
                            gridColumn: "2 / span 2", // Chris spans columns 2 and 3
                            gridRow: "2", // Explicitly set to row 2
                        }}
                    >
                        <img
                            src="team-member5.jpg" // Replace with actual image
                            alt="Team Member 5"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md" // Increased size to 40
                        />
                        <p className="mt-4 text-lg font-semibold">Chris</p>
                        <p className="text-gray-500">Marketing Specialist</p>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="text-center space-y-4 mt-12">
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

export default About;


