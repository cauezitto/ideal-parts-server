import React from 'react';

 import { Container, Overlay} from './styles';
 import {IoIosArrowForward} from 'react-icons/io'

export default function initImage({img, text}) {
  return (
    <Container img = {img} >
        
            <div>
            <Overlay>
                <h1>
                   <IoIosArrowForward size='30' style = {{marginBottom: 5}} color = 'red'/> {text}
                </h1>
            </Overlay>
            </div>
        
    </Container>
  );
}
