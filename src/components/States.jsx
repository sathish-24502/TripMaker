import React from 'react'

const States = () => {
  return (
    <>
     <div>
       <h1 className='text-xl font-semibold border-b-2 p-1 ml-2 mt-7 max-sm:text-lg'>
        🇮🇳 States of India
       </h1>
            <ul className='grid grid-cols-7 gap-4 mx-10 my-6 text-gray-500 font-light text-sm max-sm:grid-cols-2 max-sm:list-disc max-lg:grid max-lg:grid-cols-4 max-lg:list-disc'>
           <li className='cursor-pointer hover:underline w-28'>TamilNadu</li>
           <li className='cursor-pointer hover:underline w-28'>AndhraPradesh</li>
           <li className='cursor-pointer hover:underline w-28'>ArunachalPradesh</li>
           <li className='cursor-pointer hover:underline w-28'>Assam</li>
           <li className='cursor-pointer hover:underline w-28'>Bihar</li>
           <li className='cursor-pointer hover:underline w-28'>Chhattisgarh</li>
           <li className='cursor-pointer hover:underline w-28'>Goa</li>
           <li className='cursor-pointer hover:underline w-28'>Gujarat</li>
           <li className='cursor-pointer hover:underline w-28'>Haryana</li>
           <li className='cursor-pointer hover:underline w-28'>HimachalPradesh</li>
           <li className='cursor-pointer hover:underline w-28'>Jharkhand</li>
           <li className='cursor-pointer hover:underline w-28'>Karnataka</li>
           <li className='cursor-pointer hover:underline w-28'>Kerala</li>
           <li className='cursor-pointer hover:underline w-28'>MadhyaPradesh</li>
           <li className='cursor-pointer hover:underline w-28'>Maharashtra</li>
           <li className='cursor-pointer hover:underline w-28'>Manipur</li>
           <li className='cursor-pointer hover:underline w-28'>Meghalaya</li>
           <li className='cursor-pointer hover:underline w-28'>Mizoram</li>
           <li className='cursor-pointer hover:underline w-28'>Nagaland</li>
           <li className='cursor-pointer hover:underline w-28'>Odisha</li>
           <li className='cursor-pointer hover:underline w-28'>Punjab</li>
           <li className='cursor-pointer hover:underline w-28'>Rajasthan</li>
           <li className='cursor-pointer hover:underline w-28'>Sikkim</li>
           <li className='cursor-pointer hover:underline w-28'>Telangana</li>
           <li className='cursor-pointer hover:underline w-28'>Tripura</li>
           <li className='cursor-pointer hover:underline w-28'>UttarPradesh</li>
           <li className='cursor-pointer hover:underline w-28'>Uttarakhand</li>
           <li className='cursor-pointer hover:underline w-28'>WestBengal</li>
            </ul>

         <span>
            <h1 className='text-xl font-semibold border-b-2 p-1 ml-2 max-sm:text-lg'>
            Union Territories of India
            </h1>
               <ul className='grid grid-cols-4 gap-3 mx-10 my-6 text-gray-500 font-light text-sm max-sm:grid-cols-1 max-sm:list-disc max-lg:grid max-lg:grid-cols-2 max-lg:list-disc'>
                <li className='cursor-pointer hover:underline w-52'>Andaman and Nicobar Islands</li>
                <li className='cursor-pointer hover:underline w-28'>Chandigarh</li>
                <li className='cursor-pointer hover:underline w-58'>Dadra and Nagar Haveli and Daman and Diu</li>
                <li className='cursor-pointer hover:underline w-52'>Delhi (National Capital Territory)</li>
                <li className='cursor-pointer hover:underlin w-52'>Jammu and Kashmir</li>
                <li className='cursor-pointer hover:underline w-28'>Ladakh</li>
                <li className='cursor-pointer hover:underline w-28'>Lakshadweep</li>
                <li className='cursor-pointer hover:underline w-28'>Puducherry</li>
            </ul>
         </span>
    
     </div>
    
    </>
  )
}

export default States