// Import the Subcomponent component from the specified folder
import React, { useState } from "react";
import Subcomponent from "./subcomponents/SubExample";

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
    className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-gray-900 text-gray-100" : "bg-transparent text-gray-900"
    }`}
  >
    {/* Dark Mode Button */}
  <div className="w-full flex justify-end p-4">
      <button
          onClick={toggleDarkMode}
          className="bg-blue-600 px-4 py-2 rounded bg-blue-500 transition text-white"
      >
          {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
  </div>

    {/* Main Title Section */}
    <div className="text-center py-8">
    <h1 className="text-4xl font-bold text-[#103c84] no-shadow">EcoSystem:A Living Testament to Nature and History</h1>
    </div>

    {/* Content Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8" > 
      {/* Left Content Block */}
      <div>
        <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
        Saint Bay Area Woodland Conservation Site is a notable example of community-led environmental preservation in action. Nestled within the larger Bay Area, this site encompasses a significant expanse of native woodland, offering a critical habitat for local flora and fauna. The conservation efforts focus on protecting the indigenous plant species and wildlife, while also maintaining the natural landscapes that are vital for ecological balance.
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
      
        <p className="text-lg mb-4" style={{ fontSize: "20px" }} >
        The site serves multiple purposes: it acts as a research area for scientists studying ecological restoration and conservation techniques, an educational resource for schools and community groups, and a recreational space for the public who can explore its trails and learn about local biodiversity. Volunteers play a key role in the ongoing maintenance and protection of the area, participating in regular clean-up days, planting native species, and monitoring wildlife activity.
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
        <p className="text-lg mb-4" style={{ fontSize: "20px"  }}>
          Beyond its natural beauty, this conservation site also holds
            historical significance. Evidence of a farmhouse and ancient wells
            provides a glimpse into the lives of those who lived here
            generations ago. These artifacts are a testament to the human
            connection with the land and serve as a reminder of the importance
            of preserving history alongside nature. Visitors can explore these
            relics, marveling at how the site weaves together past and present
            in a truly unique way. Whether drawn by the Yellow Birch, wetlands,
            or historical artifacts, there is something here for everyone.
        </p>

          {/* Speak Button */}
                  <button
            onClick={() =>
              speak(
                "Beyond its natural beauty, this conservation site also holds historical significance. Evidence of a farmhouse and ancient wells provides a glimpse into the lives of those who lived here generations ago. These artifacts are a testament to the human connection with the land and serve as a reminder of the importance of preserving history alongside nature. Visitors can explore these relics, marveling at how the site weaves together past and present in a truly unique way. Whether drawn by the Yellow Birch, wetlands, or historical artifacts, there is something here for everyone."
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Speak
          </button>

          <p className="text-lg mb-4" style={{ fontSize: "20px"  }}>The area is dotted with numerous pristine lakes, streams, and wetlands, including Birch Cove Lakes and Susie Lake. 
            These water bodies are home to various fish species, such as trout, and provide habitat for amphibians like the wood frog 
            and spotted salamander.Wetlands in the region are crucial for water filtration, flood regulation, and serving as breeding grounds
             for many species. They also host a wide variety of bird species, including waterfowl such as ducks and herons.</p>
            {/* Speak Button */}
                  <button
            onClick={() =>
              speak(
                "The area is dotted with numerous pristine lakes, streams, and wetlands, including Birch Cove Lakes and Susie Lake. These water bodies are home to various fish species, such as trout, and provide habitat for amphibians like the wood frog and spotted salamander.Wetlands in the region are crucial for water filtration, flood regulation, and serving as breeding grounds for many species. They also host a wide variety of bird species, including waterfowl such as ducks and herons."
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Speak
          </button>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="relative text-center mt-8">
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