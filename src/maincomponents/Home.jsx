import React from 'react'
import Navbar from '../components/nav_components/Navbar'
import Header from '../components/head_components/Header'
import Text from '../components/head_components/Text'
import Quates from '../components/head_components/Quates'
import IndiaRoads from '../products/IndiaRoads'
import States from '../components/head_components/States'
import Footer from '../components/nav_components/Footer'
import Nav320px from '../components/nav_components/Nav320px'



const Home = () => {
  return (
    <>
       <div>
        
        <Navbar/>
        <Text/>        
        <Header/>
        <Quates/>
        <IndiaRoads/>
        <States/>
        <Footer/>
        
        </div> 
    </>
  )
}

export default Home