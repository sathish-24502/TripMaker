import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Text from '../components/Text'
import Header from '../components/Header';
import Quates from '../components/Quates';
import Maximize from '../components/Maximize';
import States from '../components/States';
import Footer from '../components/Footer';
import IndiaRoads from '../products/IndiaRoads';

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