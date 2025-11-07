import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="flex justify-around">
        <span className="w-1/2 bg-[#F7E5C8] h-screen border-r-4 border-[#AA654C] rounded-r-full border">
          <h1 className="flex mt-28 justify-center text-3xl font-sans text-black font-semibold ">
            TripMaker
          </h1>
          <p className="flex justify-center w-3/4 mt-12 text-xl font-light mx-20">“Go on a trip, enjoy life, live peacefully, and feel every single moment as you walk across the lands of the world.”</p>
        </span>
        <form className="w-1/2 text-white bg-[#AA654C] border-l-4 border-[#f7c576] rounded-l-full h-screen">
          <span>
            <p className="flex justify-center font-semibold text-4xl mt-32">
              Login
            </p>
          </span>
          <span className="flex justify-center my-8">
            <div className="flex flex-col w-72 gap-1">
              <label for="username"></label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username or Email"
                className="mb-4 p-1 border-black border focus-visible:outline-none rounded-sm"
              />

              <label for="password"></label>
              <input
                type="password"
                id="pass"
                name="pass"
                placeholder="Password"
                className="mb-4 p-1 border border-black focus-visible:outline-none rounded-sm"
              />
              <span className="flex justify-end">
                <button className="border-2 border-[#F7E5C8] font-medium w-32 rounded-md">Login</button>
              </span>
            </div>
          </span>
      <span className="flex justify-center flex-col gap-2">
        <p className="flex justify-center">Forgot Password?</p>
        <p className="flex justify-center">Login our page Explore TripMaker Packages..!</p>
        <p className="flex justify-center">If you haven't Account?</p>
        <button>SignIn</button>
      </span>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
