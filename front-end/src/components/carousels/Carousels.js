import React from 'react';

import {Carousel,
        CarouselProps,
        Container,
        Jumbotron
   
} from 'react-bootstrap'

import escadaRolante1 from '../../assets/escadaRolante366.png'
import elevador2 from '../../assets/elevador366.png'
import elevador1 from '../../assets/elevadorMetro366.png'
import {CarouselItem} from './style'
//import AwesomeSlider from 'react-awesome-slider';
//import 'react-awesome-slider/dist/styles.css';

import NavBar from '../navbar/navbar'


export default function Carousels() {
  return (
  <>
  <CarouselItem>
  <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {escadaRolante1}
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3 style = {{color: '#fafafa'}} >Manutenção em escadas rolantes</h3>
      <p>Manutenção preventiva e corretiva em escadas rolantes e elevadores</p>
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item  >
    <img
      className="d-block w-100"
      src= {elevador2}
      alt="Third slide"

    />

    <Carousel.Caption>
      <h3>Peças para varias marcas e modelos</h3>
      <p>Produtos com qualidade de ponta para aprimorar a performance, estética e eficiência do seu elevador</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={elevador1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Elevadores para ambientes comerciais, publicos e industriais</h3>
      <p>Entre em contato! Ofereceremos a melhor solução para sua necessidade!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</CarouselItem>
   </>
  );
}
