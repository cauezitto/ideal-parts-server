import React from 'react';

import logo from '../../assets/IDEALroncPNG.png'

import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

import { Container,
          LogoContainer,
          SocialContainer} from './styles';

export default function LogoBar() {
  return (
    <>
        <Container>
          
          <LogoContainer>
            <img src= {logo} alt=""/>
          </LogoContainer>


          <SocialContainer>
            <h1>
              <a href="https://twitter.com/parts_em">
                <FaTwitter size = '28' />
              </a>
            </h1>
            <h1>
              <a href="https://www.facebook.com/idealpartssolucoes">
                <FaFacebook size = '28' />
              </a>
            </h1>

            <h1>
              <a href="https://www.instagram.com/idealparts2012/">
                <FaInstagram size = '28' />
              </a>
            </h1>

          </SocialContainer>
          
        </Container>
    </>
  );
}
