// Import necessary components from "react-router-dom"
import { Outlet, Link, useLocation } from "react-router-dom";
// Import the `useState` hook from React to manage component state
import { useState } from "react";

export default function Layout() {
  // Define a state variable `isNavOpen` to track whether the mobile menu is open
  // `setIsNavOpen` is used to update the value of `isNavOpen`
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); // Get the current URL path
  const [activeTab, setActiveTab] = useState(location.pathname); // Default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Update the active tab
  };

  return (
    <div className="w-full">
      {" "}
      {/* Container for the navigation and main content */}
      <nav className="flex bg-navbarBg w-full">
        <h2 className="font-nunito text-titleClr text-3xl lg:text-4xl font-bold pl-6 lg:pl-32 w-full pt-6 pb-3">
          Woodland Conservation
        </h2>
        {/* MOBILE MENU SECTION */}
        <section className="MOBILE-MENU flex lg:hidden flex justify-center">
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
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
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
              <li className="uppercase">
                <Link to="/" onClick={() => setIsNavOpen(false)}>
                  About
                </Link>
              </li>
              <li className="uppercase">
                <Link to="/gallery" onClick={() => setIsNavOpen(false)}>
                  Gallery
                </Link>
              </li>
              <li className="uppercase">
                <Link to="/ecosystem" onClick={() => setIsNavOpen(false)}>
                  Ecosystem
                </Link>
              </li>
              <li className="uppercase">
                <Link to="/sitemap" onClick={() => setIsNavOpen(false)}>
                  Site Map
                </Link>
              </li>
              <li className="uppercase">
                <Link to="/contact" onClick={() => setIsNavOpen(false)}>
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
              to="/"
              className={`pb-1text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/" ? "highlight font-bold " : "text-white"
              }`}
              onClick={() => handleTabClick("/")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`pb-1text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/gallery"
                  ? "highlight text-xl font-bold "
                  : "text-white"
              }`}
              onClick={() => handleTabClick("/gallery")}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/ecosystem"
              className={`pb-1text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/ecosystem"
                  ? "highlight font-bold "
                  : "text-white"
              }`}
              onClick={() => handleTabClick("/ecosystem")}
            >
              Ecosystem
            </Link>
          </li>
          <li>
            <Link
              to="/sitemap"
              className={`pb-1text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/sitemap" ? "highlight font-bold " : "text-white"
              }`}
              onClick={() => handleTabClick("/sitemap")}
            >
              Site Map
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`pb-1text-white text-xl hover:text-gray-300 transition-colors duration-200 ${
                activeTab === "/contact" ? "highlight font-bold " : "text-white"
              }`}
              onClick={() => handleTabClick("/contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Main content of the current route */}
      <div className="pt-4 lg:px-28 2xl:px-52">
        <Outlet /> {/* Placeholder for the child route components */}
      </div>
    </div>
  );
}
