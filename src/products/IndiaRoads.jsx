import React, { useState } from "react";
import { FaArrowAltCircleRight, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import Maximize from "../components/head_components/Maximize";
// import { ProductCards } from "./ProductDatas";

const IndiaRoads = () => {
  //  const [Pruduct, SetProducts] = useState(ProductCards);
  return (
    <>
      <div className="mx-4 max-sm:mx-0">
        <span className="text-2xl font-semibold mx-6 border-b-2 max-sm:text-lg">
          <h1>India Tourist Places :</h1>
        </span>

 {/* {Pruduct.map((d, indx) => (
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
      ))} */}

        <section className="grid grid-cols-4 justify-around gap-2 max-sm:flex-col max-xl:grid max-xl:grid-cols-2 max-lg:grid-cols-1">
          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img 
                className="w-72 max-lg:w-96 max-lg:h-full rounded-sm"
                src="https://cdn.pixabay.com/photo/2022/06/13/21/06/taj-mahal-7260693_1280.jpg"
                alt="tajmahal"
              />
              <h1 className="font-medium">Taj Mahal</h1>
              {/* <span className="flex items-center gap-1">
                <h1>Price : 2000</h1>
                <FaRupeeSign />
              </span> */}
              <p className="w-72">
                Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001.
              </p>
              {/* <p>4.6</p> */}
            </span>
          </div>

          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img
                className="w-72 rounded-sm max-lg:w-96 max-lg:h-full"
                src="https://cdn.pixabay.com/photo/2018/04/25/09/54/architecture-3349103_1280.jpg"
                alt="Gateway Of India Mumbai"
              />
              <h1 className="font-medium">Gateway Of India Mumbai</h1>
              {/* <span className="flex items-center gap-1">
                <h1>Price : 2690</h1>
                <FaRupeeSign />
              </span> */}
              <p className="w-72">Apollo Bandar,Colaba ,Mumbai, Maharashtra.</p>
              {/* <p>4.6</p> */}
            </span>
          </div>

          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img
                className="w-72 rounded-sm max-lg:w-96 max-lg:h-full"
                src="data:image/jpeg;base64,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"
                alt="Meenakshi Amman Temple"
              />
              <h1 className="font-medium">Meenakshi Amman Temple</h1>
              {/* <span className="flex items-center gap-1">
                <h1>Price : 3000</h1>
                <FaRupeeSign />
              </span> */}
              <p className="w-72">Madurai main ,Madurai ,TamilNadu 625001.</p>
              {/* <p>4.9</p> */}
            </span>
          </div>

          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img
                className="w-72 rounded-sm max-lg:w-96 max-lg:h-full"
                src="https://lh3.googleusercontent.com/gpms-cs-s/APRy3c84b6dvCl62bD8i2lgo_M2ulubB3bgXrPYMO4jzauCgB-CUyjzxg9znWKpHBbi6igqkBqwREpVJgv7AJG1Jokn2D8at2hJmtjLODrP3QD4unIsqfdyxvj0U3narsBeldGN5VDAx=s294-w294-h220-n-k-no"
                alt="Mahabalipuram Shore Temple"
              />
              <h1 className="font-medium">Mahabalipuram Shore Temple</h1>
              {/* <span className="flex items-center gap-1">
                <h1>Price : 2000</h1>
                <FaRupeeSign />
              </span> */}
              <p className="w-72">Beach Rd, Mahabalipuram, TamilNadu 603104.</p>
              {/* <p>4.6</p> */}
            </span>
          </div>
        </section>

        {/* <Maximize/> */}
      </div>
    </>
  );
};

export default IndiaRoads;
