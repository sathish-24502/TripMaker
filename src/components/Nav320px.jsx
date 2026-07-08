import React from "react";
import {FaBars} from 'react-icons/fa'

const Nav320px = () => {
  return (
    <>
      <div className="max-sm:flex max-sm:justify-between max-sm:items-center max-sm:mx-8 max-sm:p-2 max-sm:font-light max-sm:border-b-2 hidden">
        <h1>TripMaker</h1>
       <FaBars/>
      </div>
    </>
  );
};

export default Nav320px;
