import React from 'react';

import {ListItem, Overlay} from './style'

import elevadorPassageiros from '../../assets/yellow.jpg'

import freight from '../../assets/yellowFreight.jpg'

import escadas from '../../assets/escadas.jpg'

import platform from '../../assets/platform.jpeg'

import {IoIosArrowForward} from 'react-icons/io'

import {Link} from 'react-router-dom'

// import { Container } from './styles';

export default function List() {
  return (
    <>
 
    <ListItem image = {elevadorPassageiros} >
     <Link to = {'/'/*'/loja/elevadores/eletricos'*/} style = {{textDecoration: 'none', height: '100%'}}>
        <Overlay>
                <h1>
                   
                    Elevadores Elétricos
                </h1>
      
        
       
        </Overlay>
      </Link>
    </ListItem>
    

    <ListItem image = {freight} >
    <Link to = {'/'/*'/loja/elevadores/hidraulicos'*/} style = {{textDecoration: 'none', height: '100%'}}>
    <Overlay>
          
                <h1>
                   Elevadores Hidraulicos
                </h1>
    </Overlay>
    </Link>
    </ListItem>

    <ListItem image = {escadas} >
    <Link to = {'/'/*'/loja/escadasrolantes'*/} style = {{textDecoration: 'none', height: '100%'}}>
    <Overlay>                 
                <h1>
                
                    Escadas Rolantes
                </h1>
    </Overlay>
    </Link>
    </ListItem>

    <ListItem image = {platform} >
    <Link to = {'/'/*'/loja/deficientes'*/} style = {{textDecoration: 'none', height: '100%'}}>
    <Overlay>
                <h1>
                
                    Plataformas para Deficientes
                </h1>   
    </Overlay>
    </Link>
    </ListItem>

</>
  );
}
