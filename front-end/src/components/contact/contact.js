import React from 'react';

import {Container,
        ContactContainer,
        Contacts,
        Overlay,
        TitleContainer,
        SubContainer,
        Title
        } from './style'

import {MdLocalPhone, MdEmail, MdSmartphone} from 'react-icons/md'

import {FiPhoneCall} from 'react-icons/fi'

// import { Container } from './styles';

export default function contact() {
  return (
    <>
            <Container>
                <SubContainer 
                                style = {{margin: 0}}>
                
                    <TitleContainer>
                        <Title>
                            {'Fale conosco  '}
                            <FiPhoneCall/>
                        </Title>
                    </TitleContainer>
                <Overlay>
                    <Contacts>

                        <ContactContainer>
                            <h1>
                                <MdLocalPhone/>
                            </h1>
                            <p>
                                {' (71) 3375-1883'}
                                </p>
                        </ContactContainer>

                        <ContactContainer>
                            <h1>
                                <MdSmartphone/>
                            </h1>
                            <p>
                                {' (71) 99913-4596'}
                                </p>
                        </ContactContainer>

                        <ContactContainer>
                            <h1>
                                <MdEmail/>
                            </h1>
                            <p>
                                {'ideal@idealparts.com.br'}
                                </p>
                        </ContactContainer>
                    </Contacts>
                </Overlay>
        </SubContainer>
    </Container>
    </>
  );
}
