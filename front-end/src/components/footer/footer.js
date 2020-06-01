import React from 'react';

import { Container,
         LogoContainer} from './styles';

import logo from '../../assets/IDEALICON.jpg'

import {MdCopyright} from 'react-icons/md'

function footer() {
  return(
      <Container>
        <LogoContainer img = {logo} />
          <div>
              <p>
                  <MdCopyright />
                  {' Ideal Elevadores Todos os direitos reservados'}
              </p>
          </div>
      </Container>
  );
}

export default footer;