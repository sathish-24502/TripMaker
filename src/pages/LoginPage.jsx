import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav320px from "../components/nav_components/Nav320px";


const LoginPage = () => {
  return (
    <>
      <Nav320px/>
     <div className="">
       <div className="flex justify-around max-sm:flex-col ">
        <span className="w-1/2 max-sm:w-screen max-sm:bg-white max-sm:border-none  bg-[#F7E5C8] h-screen border-r-4 border-[#AA654C] max-sm:rounded-none rounded-r-full border">
          <h1 className="flex mt-28 max-sm:mt-10 justify-center text-3xl max-sm:text-lg font-sans max-sm:border-b-2 max-sm:border-[#AA654C] text-black font-semibold">
            TripMaker
          </h1>
          <p className="flex justify-center max-sm:w-3/4 max-sm:text-sm  w-3/4 mt-12 max-sm:mt-2 text-xl font-light mx-20 max-sm:mx-10 max-sm:px-4 max-sm:py-6">“Go on a trip, enjoy life, live peacefully, and feel every single moment as you walk across the lands of the world.”</p>
            
        </span>
        <form className="w-1/2 max-sm:w-screen max-sm:text-black text-white max-sm:bg-white max-sm:border-none bg-[#f9a586] border-l-4 border-[#f7c576] rounded-l-full max-sm:h-0 h-screen">
          <span>
            <p className="flex justify-center font-semibold text-4xl max-sm:text-lg mt-32 max-sm:-mt-96">
              Login
            </p>
          </span>
          <span className="flex justify-center my-8 max-sm:my-2">
            <div className="flex flex-col w-72 max-sm:w-52 gap-1">
              <label for="username"></label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username or Email"
                className="mb-4 p-1 max-sm:bg-transparent border-black border focus-visible:outline-none rounded-sm"
              />

              <label for="password"></label>
              <input
                type="password"
                id="pass"
                name="pass"
                placeholder="Password"
                className="mb-4 p-1 border max-sm:bg-transparent border-black focus-visible:outline-none rounded-sm"
              />
              <span className="flex justify-end">
                <button className="border-2 border-[#F7E5C8] font-medium w-32 max-sm:border-[#AA654C] max-sm:w-20 rounded-md">Login</button>
              </span>
            </div>
          </span>
      <span className="flex justify-center flex-col gap-2">
        <p className="flex justify-center underline hover:text-blue-700">Forgot Password?</p>
        <p className="flex justify-center font-medium text-xl max-sm:text-sm">Login our page Explore TripMaker Packages..!</p>
        <p className="flex justify-center text-gray-600">If you haven't Account?</p>
        <Link to={"/SignPage"} className="flex justify-center items-center gap-4 underline text-blue-700">SignIn <FaArrowCircleRight className=" animate-bounce hover:animate-none"/></Link>
      </span>
        </form>
      </div> 
     </div>
    </>
  );
};

export default LoginPage;
