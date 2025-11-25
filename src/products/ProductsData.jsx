import React, { useState } from "react";
import { ProductCards } from "./ProductDatas";
import Footer from "../components/nav_components/Footer";
// import CardNavbar from "../components/nav_components/CardNavbar";
import { FaStar } from "react-icons/fa";
import LikeCounter from "../components/head_components/Likes";

const ProductsData = () => {
  const [Pruduct, SetProducts] = useState(ProductCards);

  //    function Pcard(evt){
  //       evt.SetProducts((India))
  //    }

  // console.log(Pruduct);

  return (
    <>
      {/* <CardNavbar/> */}
<span className="hidden max-sm:flex flex-col justify-center items-center my-4 gap-2">
        <input type="text" placeholder="Search Our Lovely Places..." className="w-60 border-2 focus:outline-none hover:border-blue-400 p-1 rounded-xl"/>
  <button className="border-2 border-green-300 px-2  rounded-lg bg-[#a57237db]">Search</button>
</span>
      <h1 className="text-4xl font-medium text-gray-700 ml-10 mt-10 max-sm:text-xl max-sm:mt-6">
        Visit Our Liked Places..!
      </h1>
      {Pruduct.map((d, indx) => (
        <span className="flex justify-center mt-10 max-sm:text-sm mb-4">
          <div key={d.id} className=" border-b-2 flex w-3/4 max-sm:w-screen px-10 max-sm:px-3 max-sm:flex-col p-2">
            <img className="rounded-md mr-10 w-96 h-72 max-sm:w-96 max-sm:mr-0" src={d.Image} alt={d.Name} />
            <span>
              <h1 className="font-medium text-xl hover:underline cursor-pointer max-sm:text-lg">{d.Name}</h1>
              <p>{d.Address}</p>
              <p className="flex items-center gap-2"><span className="font-medium">Rating :</span> {d.Ratting} <FaStar className="text-yellow-500"/></p>
           <p className="text-gray-600"><span className="font-medium text-black flex flex-col gap-1">Description :</span>{d.description}</p>
          
          <LikeCounter/>

          {/* <span>
            <p><FaLike/></p>
          </span> */}
            </span>
          </div>
        </span>
      ))}

    
    {/* <Footer/> */}
    </>
  );
};

export default ProductsData;
