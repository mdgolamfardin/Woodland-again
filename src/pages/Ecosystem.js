// Import the Subcomponent component from the specified folder
import React, { useState } from "react";
import FloraFaunaFungi from "./subcomponents/FloraFaunaFungi";
import { FaVolumeUp } from 'react-icons/fa';
// Define the Ecosystem component as a functional component
const Ecosystem = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Text-to-Speech function
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // Set the language
    speech.rate = 1; // Set the speed of speech
    speech.pitch = 1; // Set the pitch
    window.speechSynthesis.speak(speech); // Speak the text
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 px-2 md:px-10 lg:px-20 2xl:28 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-transparent text-gray-900"
      }`}
    >
      {/* Dark Mode Button */}
      <div className="fixed w-full flex justify-end p-4">
        <button
        onClick={toggleDarkMode}
        className="bg-blue-600 px-4 py-2 rounded bg-blue-500 transition text-white"
        >
        {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        </div>
      {/* Main Title Section */}
      <div className="text-center py-8">
        <h1
          className={`text-4xl lg:text-5xl  font-bold  mb-10 no-shadow ${
            darkMode ? "text-white" : "text-[#103c84]"
          }`}
        >
          EcoSystem
        </h1>
        <h2
          className={`text-xl lg:text-2xl mb-5  font-bold  no-shadow ${
            darkMode ? "text-white" : "text-gray-600"
          }`}
        >
          A Living Testament to Nature and History
        </h2>
      </div>
      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {/* Left Content Block */}
        <div>
          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            Saint Bay Area Woodland Conservation Site is a notable example of
            community-led environmental preservation in action. Nestled within
            the larger Bay Area, this site encompasses a significant expanse of
            native woodland, offering a critical habitat for local flora and
            fauna. The conservation efforts focus on protecting the indigenous
            plant species and wildlife, while also maintaining the natural
            landscapes that are vital for ecological balance.
          </p>
          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "Saint Bay Area Woodland Conservation Site is a notable example of community-led environmental preservation in action. Nestled within the larger Bay Area, this site encompasses a significant expanse of native woodland, offering a critical habitat for local flora and fauna. The conservation efforts focus on protecting the indigenous plant species and wildlife, while also maintaining the natural landscapes that are vital for ecological balance."
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
          >
            Speak
          </button>

          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            The site serves multiple purposes: it acts as a research area for
            scientists studying ecological restoration and conservation
            techniques, an educational resource for schools and community
            groups, and a recreational space for the public who can explore its
            trails and learn about local biodiversity. Volunteers play a key
            role in the ongoing maintenance and protection of the area,
            participating in regular clean-up days, planting native species, and
            monitoring wildlife activity.
          </p>

          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "The site serves multiple purposes: it acts as a research area for scientists studying ecological restoration and conservation techniques, an educational resource for schools and community groups, and a recreational space for the public who can explore its trails and learn about local biodiversity. Volunteers play a key role in the ongoing maintenance and protection of the area, participating in regular clean-up days, planting native species, and monitoring wildlife activity."
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Speak
          </button>

          <div className="relative">
            <img
              src="/imgforecosys/eco2.webp"
              alt="Woodland"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Content Block */}
        <div>
          <div className="relative mb-4">
            <img
              src="/imgforecosys/eco1.webp"
              alt="EcoSystem Detail"
              className="rounded-lg"
            />
          </div>
          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            Conservation projects at the site often involve removing invasive
            plant species that threaten the native vegetation, restoring streams
            and wetlands that are crucial for the local water cycle, and
            creating barriers to prevent human encroachment into sensitive
            areas. Educational programs designed to engage the community focus
            on the importance of sustainable practices and the role each
            individual can play in preserving their local environment.
          </p>

          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "Conservation projects at the site often involve removing invasive plant species that threaten the native vegetation, restoring streams and wetlands that are crucial for the local water cycle, and creating barriers to prevent human encroachment into sensitive areas. Educational programs designed to engage the community focus on the importance of sustainable practices and the role each individual can play in preserving their local environment."
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Speak
          </button>

          <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
            The Saint Bay Area Woodland Conservation Site exemplifies how
            dedicated stewardship and community involvement can effectively
            preserve and enhance vital natural resources for future generations,
            fostering a deep connection between people and the natural world
            around them.
          </p>
          {/* Speak Button */}
          <button
            onClick={() =>
              speak(
                "The Saint Bay Area Woodland Conservation Site exemplifies how dedicated stewardship and community involvement can effectively preserve and enhance vital natural resources for future generations, fostering a deep connection between people and the natural world around them."
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Speak
          </button>
        </div>
      </div>
      {/* Species */}
      <div className="text-center mt-28">
        <hr
          className={`border-0.5 pb- ${
            darkMode ? "border-gray-100" : "border-gray-400"
          } mb-6`}
        />
        <h1 className="mb-10 break-normal text-4xl lg:text-5xl font-semibold text-headingClr mt-8 mb-4">
          Species
        </h1>
        <h2
          className={`text-xl lg:text-2xl font-bold pb-10 no-shadow ${
            darkMode ? "text-white" : "text-gray-600"
          }`}
        >
          Some of the species thriving at the Woodland Conservation Site.
        </h2>
        <p className="relative left-5 text-left text-gray-400">*Pictures not taken at Woodland Conservation Site</p>
        <div className="w-full">
          <FloraFaunaFungi />
        </div>
      </div>
      {/* Footer Section */}
      <footer className="relative text-center">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition text-white${
            darkMode
              ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
              : "bg-gray-900 text-gray-100 hover:bg-gray-800"
          }`}
        >
          ↑ Go to Top
        </button>
      </footer>
    </div>
  );
};

// Export the Ecosystem component so it can be used in other parts of the app
export default Ecosystem;
