import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        lastName: "",
        email: "",
        country: "Canada", // Default country
        phone: "",
        message: "",
    });
    const [darkMode, setDarkMode] = useState(false);
    const [showMessage, setShowMessage] = useState(""); // Submission message

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3022/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowMessage("Form submitted successfully!");
                setFormData({
                    fullName: "",
                    lastName: "",
                    email: "",
                    country: "Canada",
                    phone: "",
                    message: "",
                });
            } else {
                setShowMessage("Failed to submit the form.");
            }
        } catch (error) {
            console.error("Error:", error);
            setShowMessage("An error occurred. Please try again.");
        }
    };

    // Text-to-speech function
    const playAudio = () => {
        const text = "This is the contact section. Please fill out the form to get in touch.";
        const speech = new SpeechSynthesisUtterance(text);
        speech.voice = speechSynthesis
            .getVoices()
            .find((voice) => voice.lang === "en-US" && voice.name.includes("Google"));
        speech.rate = 0.9;
        speech.pitch = 1;
        speech.volume = 1;
        speechSynthesis.speak(speech);
    };

    // Scroll to top function
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"} min-h-screen`}>
            {/* Header */}
            <header className="bg-blue-700 text-white text-center py-4">
                <h1 className="text-4xl font-bold">Woodland Conservation</h1>
            </header>

            {/* Dark Mode Button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition text-white"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col items-center px-4">
                <div className={`w-full max-w-4xl ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-lg p-8`}>
                    <h2 className="text-center text-3xl font-bold mb-6">Contact Us</h2>
                    {showMessage && (
                        <p className="text-center mb-4 text-lg font-bold">
                            {showMessage}
                        </p>
                    )}
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-lg font-medium mb-2">Full Name:</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                                placeholder="Last Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2">Email ID:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                                placeholder="someone@gmail.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2">Country:</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                            >
                                <option value="Canada">Canada</option>
                                <option value="United States">United States</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2">Phone Number:</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                                placeholder="(xxx)-xxx-xxxx"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-lg font-medium mb-2">Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
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

                {/* Text-to-Speech Button */}
                <div className="mt-8">
                    <button
                        onClick={playAudio}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                    >
                        Play Audio
                    </button>
                </div>

                {/* Go to Top Button */}
                <div className="fixed bottom-4 right-4">
                    <button
                        onClick={goToTop}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
                    >
                        Go to Top
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
