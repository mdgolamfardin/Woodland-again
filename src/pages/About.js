import React, { useState } from "react";
import { Link } from 'react-router-dom';  // Make sure this import is here

const About = () => {
    const testimonials = [
        {
            image: "/imagesforaboutpage/testimonial1.png",
            quote: "This is an amazing project! It really makes a difference in preserving nature and history.",
        },
        {
            image: "/imagesforaboutpage/testimonial2.png",
            quote: "I love how this project brings the community together to protect our sacred spaces.",
        },
        {
            image: "/imagesforaboutpage/testimonial3.png",
            quote: "The Woodland Conservation initiative is truly inspiring. I can't wait to see its impact on future generations.",
        },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="p-8 flex flex-col items-center">
            {/* Mission Section */}
            <section
                className="p-8 rounded-lg shadow-md flex flex-wrap md:flex-nowrap items-center space-x-0 md:space-x-10 w-full max-w-6xl"
                style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
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
                    <img
                        src="/imagesforaboutpage/nature1.png"
                        alt="Mission Image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* Team Section */}
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

            {/* Testimonials Section */}
            <section className="mt-12 p-8">
                <div className="relative max-w-4xl mx-auto">
                    {/* Left Arrow Outside Card */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-[#103c84] text-white rounded-full hover:scale-110 transition-transform z-10"
                        aria-label="Previous Testimonial"
                    >
                        <div
                            className="w-0 h-0 border-t-[10px] border-b-[10px] border-r-[14px] border-t-transparent border-b-transparent border-r-white"
                        ></div>
                    </button>

                    {/* White Card */}
                    <div className="bg-white rounded-lg shadow-md p-8 mx-8">
                        <h2 className="text-3xl font-bold text-[#103c84] text-center mb-6">Testimonials</h2>
                        <div className="overflow-hidden">
                            <div
                                className="flex w-full transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-full flex items-center justify-center space-x-8"
                                    >
                                        <div className="w-1/3">
                                            <img
                                                src={testimonial.image}
                                                alt="Testimonial"
                                                className="w-full h-auto rounded-lg object-cover"
                                            />
                                        </div>
                                        <div className="w-2/3">
                                            <p className="text-lg italic text-gray-700">
                                                "{testimonial.quote}"
                                            </p>
                                            <p className="mt-4 text-sm text-gray-500">
                                                {/* Link to the contact page */}
                                                <Link to="/contact" className="text-[#103c84] hover:underline">
                                                    Add yours too!
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow Outside Card */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-[#103c84] text-white rounded-full hover:scale-110 transition-transform z-10"
                        aria-label="Next Testimonial"
                    >
                        <div
                            className="w-0 h-0 border-t-[10px] border-b-[10px] border-l-[14px] border-t-transparent border-b-transparent border-l-white"
                        ></div>
                    </button>
                </div>
            </section>

            {/* Social Media Section */}
            <section className="mt-20">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-[#103c84] mb-8">Follow Us!</h2>
                    <div className="flex justify-center space-x-14">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                                alt="Facebook"
                                className="w-40 h-40 hover:scale-110 transition-transform"
                            />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://freepnglogo.com/images/all_img/1729449055_twitter-logo-square%20shape-png.png"
                                alt="X"
                                className="w-40 h-40 hover:scale-110 transition-transform"
                            />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                                alt="Instagram"
                                className="w-40 h-40 hover:scale-110 transition-transform"
                            />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;












