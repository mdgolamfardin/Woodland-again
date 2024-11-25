// src/pages/About.js

import React, { useEffect, useState } from "react";

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/imagesforaboutpage/nature1.png",
        "/imagesforaboutpage/nature2.png",
        "/imagesforaboutpage/nature3.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-8 flex flex-col items-center">
            {/* Mission Statement and Image Section */}
            <section
                className="p-8 rounded-lg shadow-md flex flex-wrap md:flex-nowrap items-center space-x-0 md:space-x-10 w-full max-w-6xl"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            >
                <div className="text-center md:text-left space-y-4 max-w-2xl">
                    <h1 className="text-4xl font-bold text-[#103c84]">Our Mission</h1>
                    <p className="text-xl text-gray-700">
                        At Woodland Conservation, we protect biodiversity and historic woodlands,
                        including those around graveyards. Through sustainable practices and community
                        engagement, we honor the connection between nature and heritage, inspiring action
                        to preserve these sacred spaces for future generations.
                    </p>
                </div>

                <div className="relative w-[600px] h-[250px] overflow-hidden rounded-lg shadow-md mt-6 md:mt-0">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Mission Image ${index + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-3000 ease-in-out ${
                                index === currentImage ? "opacity-100" : "opacity-0"
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* Team Members Section */}
            <section className="space-y-8 mt-10">
                <h2 className="text-3xl font-bold text-[#103c84] text-center">Meet Our Team</h2>
                <div className="grid grid-cols-3 gap-y-10 gap-x-16 justify-items-center items-center">
                    <div className="text-center">
                        <img
                            src="/imagesforaboutpage/member1.png"
                            alt="Team Member 1"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Fardin</p>
                        <p className="text-gray-500">Team Leader</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="/imagesforaboutpage/member2.png"
                            alt="Team Member 2"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Mariam</p>
                        <p className="text-gray-500">Developer</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="/imagesforaboutpage/member3.png"
                            alt="Team Member 3"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Tenisha</p>
                        <p className="text-gray-500">Developer</p>
                    </div>

                    <div className="text-center" style={{ gridColumn: "1 / span 2", gridRow: "2" }}>
                        <img
                            src="/imagesforaboutpage/member4.png"
                            alt="Team Member 4"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Himshree</p>
                        <p className="text-gray-500">Developer</p>
                    </div>

                    <div className="text-center" style={{ gridColumn: "2 / span 2", gridRow: "2" }}>
                        <img
                            src="/imagesforaboutpage/member5.png"
                            alt="Team Member 5"
                            className="w-40 h-40 mx-auto rounded-full object-cover shadow-md"
                        />
                        <p className="mt-4 text-lg font-semibold">Kelly</p>
                        <p className="text-gray-500">Developer</p>
                    </div>
                </div>
            </section>

            {/* Social Media Section */}
<section className="text-center space-y-4 mt-12">
    <h2 className="text-3xl font-bold text-[#103c84]">Follow Us</h2>
    <div className="flex justify-center space-x-6">
        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/180px-Facebook_f_logo_%282019%29.svg.png"
                alt="Facebook"
                className="w-12 h-12 hover:scale-110 transition-transform"
            />
        </a>

        {/* X (formerly Twitter) */}
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/X_logo_2023.svg"
                alt="Twitter (X)"
                className="w-12 h-12 hover:scale-110 transition-transform"
            />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/180px-Instagram_icon.png"
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





