import React,{useEffect} from 'react';

import './style.css'

import NavBar from '../../components/navbar/navbar'

import Contact from '../../components/contact/contact'

import About from '../../components/about/index'

import Test from '../../components/test/carousel'

import Bait from '../../components/bait/bait'

import Map from '../../components/map/map'

function App() {
  useEffect(()=>{
    window.scroll(0,1)
  }, [])
  return (
<>
      <NavBar style = {{top: 0}} />
      <div style = {{zIndex: 0, top: 180}} >
      <div style = {{width: '100%', height: 125, backgroundColor: '#fafafa'}} />
      <div className = 'carouselContainer'>
        <Test/>
      </div>
      <About></About>
      <Contact/>
      <Bait></Bait>
      <Map url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4038052070096!2d-38.37141758554504!3d-12.945992962802055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716177cad2eaaab%3A0x73f17528f8ebd205!2sR.%20Juazeiro%2C%201a%20-%20Itapu%C3%A3%2C%20Salvador%20-%20BA%2C%2041610-260!5e0!3m2!1spt-BR!2sbr!4v1588469939990!5m2!1spt-BR!2sbr"
      />
      </div>
</>
      );
    }

export default App;
