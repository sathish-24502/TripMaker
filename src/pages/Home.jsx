import React, { useState } from 'react'
import Navbar from '../components/nav_components/Navbar'
import Header from '../components/head_components/Header'
import Text from '../components/head_components/Text'
import Quates from '../components/head_components/Quates'
import IndiaRoads from '../products/IndiaRoads'
import States from '../components/head_components/States'
import Footer from '../components/nav_components/Footer'
import Nav320px from '../components/nav_components/Nav320px'
import Likes from '../components/head_components/Likes'
import Maximize from '../components/head_components/Maximize'
import Loader from '../components/head_components/Loader'



const Home = () => {

  // const [isLoading, setLoading] = useState(true);

  //   if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
    
       <div>
       {/* <Loader/> */}
        <Navbar/>
        <Text/>        
        <Header/>
        <Quates/>
        <IndiaRoads/>
        <Maximize/>
        <States/>
        <Footer/>
        
        </div> 
    </>
  )
}

export default Home