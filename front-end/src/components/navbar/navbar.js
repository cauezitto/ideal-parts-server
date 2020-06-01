import React, { useState, useEffect} from 'react';

import logoItem from '../../assets/IDEALPNG.png'

import {Nav, IconContainer, LinksContainer, Contact, TollIcon, SubNav, ContactNumber} from './style'

import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import {MdSmartphone} from 'react-icons/md'

import {IoIosMenu, IoLogoWhatsapp} from 'react-icons/io'

import {Link} from 'react-router-dom'

import LogoBar from '../logobar/logobar'


export default function NavBar({page}) {

  const [stateBar, setStateBar] = useState(false)

  useEffect(()=>{
    console.log(stateBar)
  },[stateBar])
  

  return (
    <>

    <LogoBar/>
    <Nav>

      <Contact>
        <h1>
          <FaWhatsapp size = '30'/>
        </h1>
      </Contact>
      
      <ContactNumber>
        <h1>
          {' (71) 99913-4596'}
        </h1>
      </ContactNumber>

      <LinksContainer>
      <Link to = '/' >
         Home
      </Link>

      <Link to = '/sobre' >
         Sobre nós
      </Link>

      <Link to = '/servicos' >
         Serviços
      </Link>

      {/*<Link to = '/peças' >
         Peças
      </Link>

      <Link to = '/elevadores' >
         Elevadores
      </Link>*/}
       <TollIcon onClick = {() =>{ setStateBar(!stateBar)}} >
        <h2>
          <IoIosMenu size = '30'/>
        </h2>
       </TollIcon>



      </LinksContainer>


    </Nav>
    <SubNav  state = {stateBar}  >
      <div>
        <Link to ='/'>
          Home
        </Link>
       </div>

       <div>
        <Link to= '/sobre'>
          Sobre nós
        </Link>
       </div>

       <div>
        <Link to = 'servicos' >
          Serviços
        </Link>
       </div>

       {/*<div>
        <Link to = '/peças'>
          Peças
        </Link>
       </div>

       <div>
        <Link to = '/elevadores'>
          Elevadores
        </Link>
       </div>*/}
    </SubNav>

    </>

      
  );
}
