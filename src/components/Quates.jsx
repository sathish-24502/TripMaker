import React from 'react'

const Quates = () => {
  return (
    <div className='flex justify-evenly mt-4 font-serif mx-5 border rounded-xl p-4 max-sm:flex-col max-lg:flex-col max-sm:mx-1'>
       <span className='w-1/2 max-sm:w-full max-lg:w-full'>
         <img className='h-full w-3/4 max-sm:w-full max-lg:w-full rounded-md' src="https://wallpaperaccess.com/full/36293.jpg" alt="Nature Picture"/>
       </span>
        <span className='text-4xl text-gray-500 w-1/2 mt-6 max-sm:text-sm max-sm:w-72 max-sm:mt-2 max-lg:w-full'>
            <h1 className='mb-2'>“ Some Places turn Ordinary People into something Extraordinary,</h1>
            <h1> Find the Road, make the trip, use the TripMakers...!” </h1>
        </span>
    </div>
  )
}

export default Quates