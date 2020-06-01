import React from 'react';

import { Container, ParagraphContainer} from './styles';
import Title from '../../components/fonts/modalTitle'

export default function textBox({title, text}) {
  return (
<>
    <Container>
      <Title>
          {title}
      </Title>
    <ParagraphContainer>
      <p>
        {text}
      </p>
    </ParagraphContainer>
    </Container>
</>
  );
}
