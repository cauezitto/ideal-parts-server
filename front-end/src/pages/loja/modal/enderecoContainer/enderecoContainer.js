import React from 'react';

import { Container, TextContainer, AlertContainer, Input} from './styles';

import {GoAlert} from 'react-icons/go'

function EnderecoContainer({endereco, setNumber}) {
  return(
    <>
        <AlertContainer>
            <h1>
                {'Confira seu endereço e insira o número do imóvel'}
            </h1>
        </AlertContainer>
        <Container>
            <TextContainer>
                <p>
                    {`Estado: ${endereco.state}`}
                </p>
            </TextContainer>

            <TextContainer>
                <p>
                    {`Cidade: ${endereco.city}`}
                </p>
            </TextContainer>

            <TextContainer>
                <p>
                {`Bairro: ${endereco.neighborhood}`}
                </p>
            </TextContainer>
                
            <TextContainer>
                <p>
                    {`${endereco.street}`}
                </p>
            </TextContainer>

            <Input
                onChange = {e => setNumber(e)}
                width = {150}
                placeholder = 'N° do imóvel'
                />
                
        </Container>
    </>
    )
}

export default EnderecoContainer;