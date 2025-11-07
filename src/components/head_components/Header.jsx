import React from "react";

const Header = () => {
  return (
    <>

      <div className="flex justify-center">
        <section className="">
          <ul className="flex justify-center gap-5 font-medium">
            <li className="hover:underline cursor-pointer hover:text-gray-500 text-lg">Hotels</li>
            <li className="hover:underline cursor-pointer hover:text-gray-500 text-lg">Restaurants</li>
            <li className="hover:underline cursor-pointer hover:text-gray-500 text-lg">Holiday Homes</li>
          </ul>

         <div className="flex flex-col justify-center ">
           <span className="flex p-4 justify-center w-screen">
            <input
              placeholder="Search here things..."
              className="w-1/2 rounded-sm border-2 border-gray-300 p-1 focus:outline-none "
              type="text"
            />
          </span>
          <span className="w-screen flex justify-center">
            <button className="border px-3 rounded-md font-medium">Search</button>
          </span>
         </div>
        </section>
      </div>
    </>
  );
};

export default Header;
