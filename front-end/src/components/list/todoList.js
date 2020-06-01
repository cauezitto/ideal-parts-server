import React from 'react';

import Title from '../fonts/modalTitle'

import {Container, ListContainer} from './styles'


export default function List({title, itens}) {
  return (
<>
<Container>
    <Title>
    Outras vantagens:
    </Title>

    <ListContainer>
        {
            itens.map(item => <div ><li>{item}</li>  </div>)
        }
    </ListContainer>
</Container>
</>
    
  );
}
