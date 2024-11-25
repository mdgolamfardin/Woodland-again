import React, { useState } from "react";

const Contact = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle Light/Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Text-to-Speech Function
    const playAudio = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.voice = speechSynthesis.getVoices().find(
            (voice) => voice.lang === "en-US" && voice.name.includes("Google")
        );
        speech.rate = 0.9; // Softer rate
        speech.pitch = 1;
        speech.volume = 1;
        speechSynthesis.speak(speech);
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
                    onClick={toggleDarkMode}
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition text-white"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* Contact Form Section */}
            <div
                className={`w-full max-w-4xl ${
                    darkMode
                        ? "bg-gray-800 text-yellow-200"
                        : "bg-[#eceee2] text-black"
                } rounded-lg shadow-lg p-8 mt-8`}
            >
                <h2 className="text-center text-3xl font-semibold mb-6">
                    Contact Us
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                        <label className="block text-lg font-medium mb-2">
                            Full Name:
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium mb-2">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    {/* Email ID */}
                    <div>
                        <label className="block text-lg font-medium mb-2">
                            Email ID:
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="someone@gmail.com"
                            required
                        />
                    </div>
                    {/* Phone Number */}
                    <div>
                        <label className="block text-lg font-medium mb-2">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="(xxx)-xxx-xxxx"
                        />
                    </div>
                    {/* Message */}
                    <div className="md:col-span-2">
                        <label className="block text-lg font-medium mb-2">
                            Message:
                        </label>
                        <textarea
                            name="message"
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your thoughts..."
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    {/* Submit Button */}
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

            {/* Text-to-Speech Example */}
            <div className="mt-8 text-center">
                <button
                    onClick={() =>
                        playAudio(
                            "This is the contact section of Woodland Conservation. Fill out the form to get in touch."
                        )
                    }
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
                >
                    Play Audio
                </button>
            </div>

            {/* Footer */}
            <div className="mt-8 flex space-x-4">
                <a href="#" className="text-blue-400 hover:underline">
                    Facebook
                </a>
                <a href="#" className="text-pink-400 hover:underline">
                    Instagram
                </a>
                <a href="#" className="text-purple-400 hover:underline">
                    YouTube
                </a>
                <a href="#" className="text-gray-400 hover:underline">
                    X
                </a>
            </div>
        </div>
    );
};

export default Contact;
