import React, { useState, useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "Canada",
        message: "",
    });

    const [darkMode, setDarkMode] = useState(false);
    const [showModal, setShowModal] = useState(false); // For pop-up modal
    const [showGoToTop, setShowGoToTop] = useState(false); // For "Go to Top" button

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true); // Show the modal
        setTimeout(() => setShowModal(false), 3000); // Hide modal after 3 seconds
        console.log("Form Data:", formData);

        // Clear the form
        setFormData({
            fullName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "Canada",
            message: "",
        });
    };

    // "Go to Top" button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`${
                darkMode
                    ? "bg-gray-900 text-yellow-200"
                    : "bg-[#eceee2] text-black"
            } min-h-screen flex flex-col items-center`}
        >
            {/* Dark Mode Button */}
            <div className="w-full flex justify-end p-4">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition text-white"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* Contact Form Section */}
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mt-8">
                <h2
                    className={`text-center text-3xl font-bold mb-6 ${
                        darkMode ? "text-yellow-200" : "text-blue-900"
                    }`}
                >
                    Contact Us
                </h2>
                {showModal && (
                    <p
                        className={`text-center text-lg mb-4 ${
                            darkMode ? "text-yellow-200" : "text-blue-900"
                        }`}
                    >
                        Form submitted successfully!
                    </p>
                )}
                <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className="block text-lg font-bold mb-2">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2">
                            Email ID:
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="someone@gmail.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2">
                            Country:
                        </label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="Canada">Canada</option>
                            <option value="United States">United States</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-lg font-bold mb-2">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="(xxx)-xxx-xxxx"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-lg font-bold mb-2">
                            Message:
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your thoughts..."
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>

            {/* "Go to Top" Button */}
            {showGoToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                    Go to Top
                </button>
            )}
        </div>
    );
};

export default Contact;
