import React from "react";
import { FaBars, FaUser, FaSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <section className="flex justify-between items-center p-4 mx-20 max-sm: my-10 border-b-4 border-green-100 max-sm:mx-0 max-sm:my-2 max-sm:w-screen">
          <span>
            <h1 className="font-mono border-l-2 border-t-2 shadow-inner rounded-l-xl p-1 border-[#a57237db] text-xl max-sm:text-lg">
              Trip<span className="border-b-2 border-[#a57237db]">Maker</span>
            </h1>
          </span>
          <div className="flex gap-4  max-sm:gap-1">
            <Link className="hidden max-sm:flex">
              <FaBars />
            </Link>
            <span className="border-2 border-green-200 rounded-full px-1 p-1 flex items-center bg-[#a57237db] justify-center gap-1 max-sm:hidden font-semibold">
              <FaUser className="text-2xl p-1 border-2 border-green-300 rounded-full" />
              <Link to={"LoginPage"}>Login In</Link>
            </span>
            <span className="border-2 border-green-100 rounded-full shadow-inner px-1 p-1 flex items-center bg-[#a57237db] justify-center gap-1 max-sm:hidden font-semibold">
              <FaSign className="text-2xl p-1 border-2 border-green-300 rounded-full" />
              <Link to={"SignPage"}>Sign In</Link>
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
