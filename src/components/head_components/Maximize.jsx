import React from 'react'
import { Link } from 'react-router-dom'

const Maximize = () => {
  return (
    <>
        <span className="flex justify-center mt-10  max-sm:text-sm  max-sm:mt-4 text-gray-400 hover:underline cursor-pointer hover:text-gray-600">
          <Link to={"Products"}>See More</Link>
        </span>
    </>
  )
}

export default Maximize