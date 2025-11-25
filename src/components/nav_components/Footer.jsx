import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTrain,
  FaCar,
  FaShip,
  FaPlane,
  FaBus,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
     
            <h1 className="font-mono w-32 border-l-2 border-t-2 shadow-inner rounded-l-xl p-1 ml-3 mb-2 border-[#a57237db] text-xl max-sm:text-lg">Trip<span className="border-b-2 border-[#a57237db]">Maker</span></h1>
         
          <p className="mx-8 mb-8 text-gray-700 font-normel text-sm max-sm:mx-4">
TripMaker is an India-based travel and exploration website designed to inspire wanderlust and simplify trip planning.
We help travelers discover hidden gems, cultural experiences, and must-visit destinations across India.
From mountains to beaches, heritage sites to modern cities — explore everything in one place.
Our platform offers curated guides, travel tips, and personalized itineraries for every traveler.
Plan, book, and explore your dream trip with ease through user-friendly tools and smart search.
Whether it’s a weekend getaway or a cross-country adventure, TripMaker has you covered.
Connect with fellow explorers, share your journey, and inspire others to travel more.
TripMaker — "Find the road, make the trip, and live the experience".

          </p>
      <div className="grid grid-cols-3 my-3 ml-10 mb-20  max-sm:grid-cols-1">
        <span>
          
          <span>
            <p className="font-medium">Tour Packages</p>
            {/* <p className="font-normel">In Multi States of India</p> */}
            <ul className="text-gray-500 font-light grid gap-2 mt-4 max-sm:text-sm">
              <li className="flex items-center gap-1 cursor-pointer hover:underline">
                <FaTrain />
                Train Packages
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:underline">
                <FaBus />
                Bus Packages
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:underline">
                <FaPlane />
                Flight Packages
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:underline">
                <FaShip />
                Ship Packages
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:underline">
                <FaCar />
                Travels Packages
              </li>
            </ul>
          </span>
        </span>
        <div>
          <p className="font-medium mt-4">Company</p>
          <ul className="text-gray-500 font-light grid gap-2 mt-2 list-disc max-sm:text-sm">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Careers</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Help Center</li>
          </ul>
        </div>

        <div className="mt-4">
          <span className="font-medium">Get in touch</span>
          <ul className="flex items-center gap-2 mt-2 max-sm:text-sm">
            <li>
              <a>
                <FaLinkedin title="LinkedIn" size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>

            <li>
              <a>
                <FaInstagram title="Instagram" size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>

            <li>
              <a>
                <FaFacebook title="Facebook" size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>

            <li>
              <a>
                <FaTwitter title="Twitter" size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>
          </ul>
          <span className="font-light max-sm:text-sm">
            <p className="mt-3">copyrights &copy;2025 TripMaker.</p>
            <ul className="flex items-center gap-1 mt-2 max-sm:grid max-sm:grid-cols-2 max-lg:grid max-lg:grid-cols-1">
              <li>Advissor Page|</li>
              <li>Explore Our Packages|</li>
              <li>Terms & Condition|</li>
              <li>Privacy Policy.</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
