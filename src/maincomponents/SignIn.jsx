import React from 'react'
import { Link } from 'react-router-dom'
import Nav320px from '../components/nav_components/Nav320px'

const SignIn = () => {
  return (
    <>
    {/* <Nav320px/> */}
    <div>
        <img className='relative h-screen w-screen max-w-screen-sm' src="https://wallpaperaccess.com/full/11735.jpg" alt="Picture" />
    </div>
     <div className='flex justify-end mr-44 max-sm:mr-0'>
        <span className='flex flex-col justify-center items-center rounded-xl px-10 py-16 max-sm:py-8  shadow-2xl gap-4 absolute top-10 max-sm:top-0 '>
        <div>
            <h1 className='flex justify-center p-10 max-sm:p-2 text-3xl font-medium max-sm:text-lg'>SignIn</h1>
            <h2 className='font-light flex justify-center max-sm:p-2'>TripMaker</h2>
       <p className='flex justify-center mb-10 text-3xl font-light text-gray-700 max-sm:text-lg'>Enjoy our Butged Friendly Tour Packages...!</p>
        <div className='flex items-center flex-col justify-center gap-6'>
            <input placeholder='Username' className='w-1/2 max-sm:w-52 shadow-lg shadow-transparent p-1 border-b-2 focus-within:outline-none rounded-sm' type="text"/>
            <input placeholder='Mobile' className='w-1/2 max-sm:w-52 shadow-lg shadow-transparent p-1 border-b-2 focus-within:outline-none rounded-sm'  type="number"/>
            <input placeholder='Email' className='w-1/2 max-sm:w-52 shadow-lg shadow-transparent p-1 border-b-2 focus-within:outline-none rounded-sm'  type="email"/>
            <span className='flex justify-center'>
                <Link to={"/"} className='text-md border px-2 py-1 shadow-lg shadow-transparent max-sm:text-black max-sm:bg-green-400 text-white rounded-md'>SignIn</Link>
            </span>

        </div>
        </div>
        

        <div className='flex justify-center'>
            <p className='text-gray-100'>Already Did You have Account ? <Link to={"/LoginPage"} className='text-green-300 flex justify-center font-medium underline'>Login</Link></p>
        </div>
        </span>   
     </div>

    </>
  )
}

export default SignIn