import React from "react";
import {
  FaHandsHelping,
  FaHireAHelper,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CardNavbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <span className="flex justify-around p-3 w-4/5 border-b-4 border-blue-300  max-sm:justify-between max-sm:mx-4  max-sm:w-screen">
          <span>
            <h1 className="font-mono border-l-2 border-t-2 shadow-inner rounded-l-xl p-1 border-[#a57237db] text-xl max-sm:text-lg">
              Trip<span className="border-b-2 border-[#a57237db]">Maker</span>
            </h1>
          </span>{" "}
          <span className="max-sm:hidden max-md:w-72 w-96  flex justify-between items-center border-2 gap-2 p-1 px-2 hover:border-blue-500 rounded-lg">
            <input
              placeholder="Search..."
              type="text"
              className="max-sm:hidden rounded-md focus:outline-none "
            />
            <FaSearch
              title="Search"
              className="border-2 size-6 p-1 hover:border-green-400 rounded-2xl"
            />
          </span>
          <ul className="flex justify-around items-center gap-10 font-medium max-sm:gap-6 max-sm:text-sm">
            <li className="cursor-pointer underline">
              <Link title="Home" to={"/"}>
                <FaHome size={20} />
              </Link>
            </li>
            <li className="cursor-pointer underline">
              <FaHandsHelping title="HelpCentre" size={20} />
            </li>
          </ul>
        </span>
      </div>
    </>
  );
};

export default CardNavbar;
