import React from 'react'

const Text = () => {
  return (
    <div className='flex flex-col gap-6 max-sm:gap-3 max-sm:mt-4'>
     <span className='flex justify-center'>
        <h1 className='text-4xl text-gray-400 font-semibold font-mono max-sm:text-sm'>Find The Liked Places here...!</h1>
        
     </span>
          <span className='flex justify-center mb-10 max-sm:mb-4'>
            <h1 className='text-4xl text-gray-500 font-semibold font-mono max-sm:text-lg'> Where to ? </h1>
          </span>
    </div>
  )
}

export default Text