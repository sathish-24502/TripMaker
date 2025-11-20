import React, { useState } from "react";
import { ProductCards } from "./ProductDatas";
import Navbar from "../components/nav_components/Navbar";
import CardNavbar from "../components/nav_components/CardNavbar";

const ProductsData = () => {
  const [Pruduct, SetProducts] = useState(ProductCards);

  //    function Pcard(evt){
  //       evt.SetProducts((India))
  //    }

  console.log(Pruduct);

  return (
    <>
      <CardNavbar/>
      <h1 className="text-4xl font-medium text-gray-700 ml-10 mt-10 max-sm:text-xl max-sm:mt-6">
        Visit Our Liked Places..!
      </h1>
      {Pruduct.map((d, indx) => (
        <span className="flex justify-center mt-10 max-sm:text-sm">
          <div key={d.id} className=" border-b-2 flex w-3/4 max-sm:w-screen px-10 max-sm:px-3 max-sm:flex-col">
            <img className="rounded-md mr-10 w-96 h-72 max-sm:w-96 max-sm:mr-0" src={d.Image} alt={d.Name} />
            <span>
              <h1 className="font-medium text-xl hover:underline cursor-pointer max-sm:text-lg">{d.Name}</h1>
              <p>{d.Address}</p>
              <p>{d.Ratting}</p>
            </span>
          </div>
        </span>
      ))}
    </>
  );
};

export default ProductsData;
