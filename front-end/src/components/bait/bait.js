import React from 'react';
import {Container, SubContainer, Divisor} from './style'
import Title from '../fonts/modalTitle'



import List from './list'

import {FaRegLightbulb} from 'react-icons/fa'

// import { Container } from './styles';

export default function bait() {
  return (
      <>
    <Container >

    <Title>
        {'A Ideal é a solução!  '}
        <FaRegLightbulb/>
    </Title>

    <Divisor>_____</Divisor>

        <SubContainer>
           
            <List/>

        </SubContainer>
       
    </Container>
     </>
  );
}