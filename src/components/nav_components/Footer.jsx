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
    <h1 className="text-lg font-semibold font-mono ml-4 mt-10 p-2">
            TripMaker
          </h1>
          <p className="mx-8 mb-8 text-gray-700 font-normel text-sm">
TripMaker is an India-based travel and exploration website designed to inspire wanderlust and simplify trip planning.
We help travelers discover hidden gems, cultural experiences, and must-visit destinations across India.
From mountains to beaches, heritage sites to modern cities — explore everything in one place.
Our platform offers curated guides, travel tips, and personalized itineraries for every traveler.
Plan, book, and explore your dream trip with ease through user-friendly tools and smart search.
Whether it’s a weekend getaway or a cross-country adventure, TripMaker has you covered.
Connect with fellow explorers, share your journey, and inspire others to travel more.
TripMaker — "Find the road, make the trip, and live the experience".




          </p>
      <div className="flex justify-around items-center gap-4 my-3 mx-3 mb-20">
        <span>
          
          <span>
            <p className="font-medium">Tour Packages</p>
            {/* <p className="font-normel">In Multi States of India</p> */}
            <ul className="text-gray-500 font-light grid gap-2 mt-4">
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
          <p className="font-medium">Company</p>
          <ul className="text-gray-500 font-light grid gap-2 mt-4">
            <li className="cursor-pointer hover:underline">About Us</li>
            <li className="cursor-pointer hover:underline">Careers</li>
            <li className="cursor-pointer hover:underline">Blog</li>
            <li className="cursor-pointer hover:underline">Help Center</li>
          </ul>
        </div>

        <div>
          <span className="font-medium">Get in touch</span>
          <ul className="flex items-center gap-2 mt-4">
            <li>
              <a>
                <FaLinkedin size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>

            <li>
              <a>
                <FaInstagram size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>

            <li>
              <a>
                <FaFacebook size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>

            <li>
              <a>
                <FaTwitter size={28} className="border-2 border-black rounded-lg p-1" />
              </a>
            </li>
          </ul>
          <span className="font-light">
            <p className="mt-3">copyrights &copy;2025 TripMaker.</p>
            <ul className="flex items-center gap-1 mt-2">
              <li>Advissor Page |</li>
              <li>Explore Our Packages |</li>
              <li>Terms & Condition |</li>
              <li>Privacy Policy.</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
