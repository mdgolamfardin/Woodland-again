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
    {/* Dark Mode Toggle Button */}
    <button
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 px-4 py-2 rounded-full shadow ${
        darkMode
          ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
          : "bg-gray-900 text-gray-100 hover:bg-gray-800"
      }`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>

    {/* Main Title Section */}
    <div className="text-center py-8">
    <h1 className="text-4xl font-bold text-[#103c84]">EcoSystem:A Living Testament to Nature and History</h1>
    </div>

    {/* Content Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8" > 
      {/* Left Content Block */}
      <div>
        <p className="text-lg mb-4" style={{ fontSize: "20px" }}>
        The Blue Mountain-Birch Cove Lakes Wilderness Area is a vital ecological treasure located near Halifax, Nova Scotia. Spanning over 1,767 hectares, this wilderness area is a mosaic of forests, lakes, wetlands, and rugged terrain, 
        making it a rich and biodiverse ecosystem. Its natural features and high ecological value make it both a crucial habitat for wildlife and an essential recreational area for the community.
        </p>
        {/* Speak Button */}
        <button
            onClick={() =>
              speak(
                "The Blue Mountain-Birch Cove Lakes Wilderness Area is a vital ecological treasure located near Halifax, Nova Scotia. Spanning over 1,767 hectares, this wilderness area is a mosaic of forests, lakes, wetlands, and rugged terrain, making it a rich and biodiverse ecosystem. Its natural features and high ecological value make it both a crucial habitat for wildlife and an essential recreational area for the community."
              )
            }
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
          >
            Speak
          </button>
      
        <p className="text-lg mb-4" style={{ fontSize: "20px" }} >
        The forests in the Blue Mountain-Birch Cove Lakes area are predominantly composed of mixed hardwood and softwood species.
         Key tree species include red spruce, balsam fir, yellow birch, and sugar maple. The undergrowth features a diverse range of 
         shrubs, mosses, ferns, and lichens, which play an essential role in maintaining soil stability and providing food and shelter for wildlife.

        The forest supports a variety of mammals, including white-tailed deer, red foxes, and snowshoe hares. Smaller mammals like squirrels, chipmunks, and voles also 
        thrive here, contributing to the ecosystem's balance.
        </p>

         {/* Speak Button */}
         <button
            onClick={() =>
              speak(
                "The forests in the Blue Mountain-Birch Cove Lakes area are predominantly composed of mixed hardwood and softwood species. Key tree species include red spruce, balsam fir, yellow birch, and sugar maple. The undergrowth features a diverse range of shrubs, mosses, ferns, and lichens, which play an essential role in maintaining soil stability and providing food and shelter for wildlife. The forest supports a variety of mammals, including white-tailed deer, red foxes, and snowshoe hares. Smaller mammals like squirrels, chipmunks, and voles also thrive here, contributing to the ecosystem's balance."
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
          
      </div>
    </div>

    {/* Footer Section */}
    <footer className="relative text-center mt-8">
  {/* Scroll to Top Button */}
  <button
    onClick={scrollToTop}
    className={`fixed bottom-4 right-4 px-4 py-2 rounded-full shadow ${
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