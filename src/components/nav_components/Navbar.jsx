import React from "react";
import {FaBars, FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <section className="flex justify-between items-center p-4 mx-20 max-sm: my-10 border-b-4 max-sm:mx-0 max-sm:my-2 max-sm:w-screen">
          <span>
            <h1 className="font-semibold text-xl max-sm:text-lg">TripMaker</h1>
          </span>
          <div className="flex gap-4  max-sm:gap-1">
            <span>
               <Link className="hidden max-sm:flex"><FaBars/></Link>
              <Link to={"LoginPage"} className="border max-sm:hidden p-1 rounded-sm font-semibold">
                Login In
              </Link>
            </span>
            <span>
              <Link to={"SignPage"} className="border p-1 max-sm:hidden rounded-sm font-semibold">
                Sign In
              </Link>
            </span>{" "}
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
