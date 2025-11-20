import React, { useState } from "react";
import { FaArrowAltCircleRight, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
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

        <section className="grid grid-cols-4 justify-around gap-2 max-sm:flex-col max-lg:grid-cols-1">
          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img 
                className="w-72 max-lg:w-96 max-lg:h-full rounded-sm"
                src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx61D7IhHPITM4xaqTDCdpZgso_xbGv40Mn9G6dz-EXPXbmfqas1MHoVTM9vNex4Vgbrv0LWtewIw6ba3PaJoE60x7nlah8AkAJnGPjH5uVp_cPDAqYOL8HiuhB-6OaN_wYRBGx6DMvWErr=s294-w294-h220-n-k-no"
                alt="tajmahal"
              />
              <h1>Taj Mahal</h1>
              <span className="flex items-center gap-1">
                <h1>Price : 2000</h1>
                <FaRupeeSign />
              </span>
              <p className="w-72">
                Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001.
              </p>
              <p>4.6</p>
            </span>
          </div>

          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img
                className="w-72 rounded-sm max-lg:w-96 max-lg:h-full"
                src="https://lh3.googleusercontent.com/gpms-cs-s/APRy3c-SJlWB9QuuR1TlUawdbwO4g4NsWIWrFXcUfB9KEe-85Bnnu1sDT4ta7Mtx_T-Ek8KswwobOwWwOpETjRLn3DCXG38QcJqN9u5on5tVlasMqDmKk9nep2lroZEbQfezZuLMrYiH2w=s294-w294-h220-n-k-no"
                alt="Gateway Of India Mumbai"
              />
              <h1>Gateway Of India Mumbai</h1>
              <span className="flex items-center gap-1">
                <h1>Price : 2690</h1>
                <FaRupeeSign />
              </span>
              <p className="w-72">Apollo Bandar,Colaba ,Mumbai ,Maharashtra.</p>
              <p>4.6</p>
            </span>
          </div>

          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img
                className="w-72 rounded-sm max-lg:w-96 max-lg:h-full"
                src="https://lh3.googleusercontent.com/gpms-cs-s/APRy3c9cjezfSLtpXxLjzPiAoPwECuSA3XIN68qL22aDmvgiBFV8zc0dnQjPr0nMgzvzHAzXBzkNtDdVAHs_68dmOl_6eSzTwmT926SUv4O5E6gTOYeMQfhqcb5Tfv6MrPlCKpxD_ls=s294-w294-h220-n-k-no"
                alt="Meenakshi Amman Temple"
              />
              <h1>Meenakshi Amman Temple</h1>
              <span className="flex items-center gap-1">
                <h1>Price : 3000</h1>
                <FaRupeeSign />
              </span>
              <p className="w-72">Madurai main ,Madurai ,TamilNadu 625001.</p>
              <p>4.9</p>
            </span>
          </div>

          <div className="border flex justify-center p-1 max-sm:w-screen max-lg:w-screen">
            <span className="flex flex-col gap-1 max-sm:text-sm">
              <img
                className="w-72 rounded-sm max-lg:w-96 max-lg:h-full"
                src="https://lh3.googleusercontent.com/gpms-cs-s/APRy3c84b6dvCl62bD8i2lgo_M2ulubB3bgXrPYMO4jzauCgB-CUyjzxg9znWKpHBbi6igqkBqwREpVJgv7AJG1Jokn2D8at2hJmtjLODrP3QD4unIsqfdyxvj0U3narsBeldGN5VDAx=s294-w294-h220-n-k-no"
                alt="Mahabalipuram Shore Temple"
              />
              <h1>Mahabalipuram Shore Temple</h1>
              <span className="flex items-center gap-1">
                <h1>Price : 2000</h1>
                <FaRupeeSign />
              </span>
              <p className="w-72">Beach Rd, Mahabalipuram, TamilNadu 603104.</p>
              <p>4.6</p>
            </span>
          </div>
        </section>

        <span className="flex justify-center mt-10  max-sm:text-sm  max-sm:mt-4 text-gray-400 hover:underline cursor-pointer hover:text-gray-600">
          <Link to={"PruductCard"}>See More</Link>
        </span>
      </div>
    </>
  );
};

export default IndiaRoads;
