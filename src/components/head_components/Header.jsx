import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>

      <div className="flex justify-center">
        <section className="">
          <ul className="flex justify-center gap-5 font-medium max-sm:flex-col max-sm:gap-2 max-sm:items-center max-sm:text-sm">
            <li className="hover:underline cursor-pointer hover:text-gray-500 max-sm:border max-sm:w-52 max-sm:flex max-sm:justify-center max-sm:rounded-full max-sm:p-1 max-sm:border-green-200 max-sm:shadow-inner">Hotels</li>
           <Link to={"Products"} className="hover:underline cursor-pointer hover:text-gray-500 max-sm:border max-sm:w-52 max-sm:flex max-sm:justify-center max-sm:rounded-full max-sm:p-1 max-sm:border-green-200 max-sm:shadow-inner">Products</Link>
            <li className="hover:underline cursor-pointer hover:text-gray-500 max-sm:border max-sm:w-52 max-sm:flex max-sm:justify-center max-sm:rounded-full max-sm:p-1 max-sm:border-green-200 max-sm:shadow-inner">Restaurants</li>
            <li className="hover:underline cursor-pointer hover:text-gray-500 max-sm:border max-sm:w-52 max-sm:flex max-sm:justify-center max-sm:rounded-full max-sm:p-1 max-sm:border-green-200 max-sm:shadow-inner">Holiday Homes</li>
            
          </ul>

         <div className="flex flex-col justify-center ">
           <span className="flex p-4 justify-center w-screen">
            <input
              placeholder="Search here liked hotels , Restaurants , etc..."
              className="w-1/2 max-sm:w-4/5 max-sm:rounded-xl rounded-xl border-2 border-gray-300 p-1 focus:outline-none "
              type="text"
            />
          </span>
          <span className="w-screen flex justify-center">
            <button className="border-2 border-green-200 rounded-full px-2 font-medium bg-[#a57237db] p-1 flex items-center gap-1"><FaSearch className="border-2 border-green-400 text-2xl rounded-full p-1"/>Search</button>
          </span>
         </div>
        </section>
      </div>
    </>
  );
};

export default Header;
