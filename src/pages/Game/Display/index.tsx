import React from 'react';

import { Container, Digit } from './styles';

const Display: React.FC = () => {
  return (
    <Container>
      <Digit>
        <strong>1</strong>
      </Digit>

      <Digit>
        <strong>1</strong>
      </Digit>

      <Digit isCorrect>
        <strong>1</strong>
      </Digit>

      <Digit isErrored>
        <strong>1</strong>
      </Digit>
    </Container>
  );
};

export default Display;
