import React from "react";
import {FaUser} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <section className="flex justify-between p-4 mx-20 my-10 border-b-4">
          <span>
            <h1 className="font-semibold text-xl">TripMaker</h1>
          </span>
          <div className="flex gap-4">
            <span>
               {/* <FaUser/> */}
              <Link to={"LoginPage"} className="border p-1 rounded-sm font-semibold">
                Login In
              </Link>
            </span>
            <span>
              <Link className="border p-1 rounded-sm font-semibold">
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
