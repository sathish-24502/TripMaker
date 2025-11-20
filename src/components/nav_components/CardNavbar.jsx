import React from 'react'
import { FaHandsHelping, FaHireAHelper, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CardNavbar = () => {
  return (
    <>
       <div className='flex justify-center'>
         <span className='flex justify-around p-3 w-4/5 border-b-4 border-blue-300  max-sm:justify-between  max-sm:w-screen'>
          <h1 className='text-xl font-semibold max-sm:text-lg'>TripMaker</h1>
          <input placeholder='Search...' type="text" className='border max-sm:hidden rounded-md focus:outline-none p-1 w-1/4 '/>
         
          <ul className='flex justify-around items-center gap-10 font-medium max-sm:gap-6 max-sm:text-sm'>
            <li className='cursor-pointer underline'>
              <Link title='Home' to={"/"}><FaHome size={20}/></Link>
            </li>
            <li className='cursor-pointer underline'><FaHandsHelping title='HelpCentre' size={20}/></li>
          </ul>
       
        </span>
       </div>
    </>
  )
}

export default CardNavbar