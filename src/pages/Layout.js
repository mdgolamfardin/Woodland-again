// Import necessary components from "react-router-dom"
import { Outlet, Link, useLocation } from "react-router-dom";
// Import the `useState` hook from React to manage component state
import { useState, useEffect, useContext } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { DarkModeContext } from "../DarkModeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Layout() {
  // Other state variables and functions remain the same
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext); // Access context

  darkMode
    ? (document.querySelector("body").style.backgroundColor = "#111827")
    : (document.querySelector("body").style.backgroundColor = "#e7edf0");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show/hide control buttons based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 580) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }

      // if (window.scrollY > 300) {
      //   setShowModeButton(false);
      // } else {
      //   setShowModeButton(true);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full">
      {" "}
      {/* Container for the navigation and main content */}
      <nav
        className={`flex w-full ${
          darkMode ? "bg-[#1F2937]" : "bg-navbarBg"
        } transition-colors duration-300`}
      >
        <h2 className="font-nunito text-titleClr text-2xl lg:text-4xl font-bold pl-6 lg:pl-32 w-full pt-6 pb-3">
          <Link to="/" className="" onClick={() => handleTabClick("/")}>
            Woodland Conservation
          </Link>
        </h2>
        {/* MOBILE MENU SECTION */}
        <section className="MOBILE-MENU  flex lg:hidden flex justify-center">
          {/* Mobile menu visible only on small screens */}
          <div
            className="HAMBURGER-ICON space-y-2 pt-7 px-5 " // Hamburger menu icon styling
            onClick={() => setIsNavOpen((prev) => !prev)} // Toggles the menu open/close state when clicked
          >
            {/* Hamburger menu lines */}
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>
          {/* Conditional rendering: Show/hide the mobile menu based on `isNavOpen` */}
          <div className={isNavOpen ? `${darkMode ? "bg-[#1F2937]" : "bg-[#0A3981]"} showMenuNav` : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-4 py-4"
              onClick={() => setIsNavOpen(false)} // Close the menu when the cross (X) icon is clicked
            >
              {/* Cross (X) icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
                />
              </svg>
            </div>

            {/* Mobile menu links */}
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col basis-3/5 space-y-5 text-xl ">
              <li>
                <Link
                  to="/about"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/about" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
                  }`}
                  onClick={() => handleTabClick("/about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/ecosystem"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/ecosystem" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
                  }`}
                  onClick={() => handleTabClick("/ecosystem")}
                >
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/gallery" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
                  }`}
                  onClick={() => handleTabClick("/gallery")}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/sitemap" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
                  }`}
                  onClick={() => handleTabClick("/sitemap")}
                >
                  Site Map
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                    activeTab === "/contact" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
                  }`}
                  onClick={() => handleTabClick("/contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* DESKTOP MENU SECTION */}
        <ul className="DESKTOP-MENU  hidden space-x-8 lg:flex justify-end pt-9 pb-3 pr-32 w-full">
          {" "}
          {/* Visible only on large screens */}
          <li>
            <Link
              to="/about"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/about" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
              }`}
              onClick={() => handleTabClick("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/ecosystem"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/ecosystem" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
              }`}
              onClick={() => handleTabClick("/ecosystem")}
            >
              Ecosystem
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/gallery" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
              }`}
              onClick={() => handleTabClick("/gallery")}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/sitemap"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/sitemap" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
              }`}
              onClick={() => handleTabClick("/sitemap")}
            >
              Site Map
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`pb-1 text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/contact" ? `${darkMode ? "highlight-dark font-bold" : "highlight font-bold" }` : ""
              }`}
              onClick={() => handleTabClick("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Main content of the current route */}
      <div className="">
        <Outlet /> {/* Placeholder for the child route components */}
      </div>
      {/* Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 lg:bottom-20 right-3 lg:right-4 z-[70] bg-gray-600 text-white text-3xl px-2 lg:px-3 py-2 lg:py-3 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <FaArrowUpLong />
        </button>
      )}
      <button
        onClick={toggleDarkMode}
        className={`fixed shadow-md bottom-3 lg:bottom-4 right-3 lg:right-4 z-[70] text-yellow-400 text-3xl px-2 lg:px-3 py-2 lg:py-3 rounded-full  ${
          darkMode
            ? "bg-white hover:bg-gray-100"
            : "bg-gray-800 hover:bg-gray-700"
        }     transition-bg duration-300`}
      >
        {darkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}
