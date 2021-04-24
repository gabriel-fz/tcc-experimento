import React from 'react';

import { Container, Button } from './styles';

const Keyboard: React.FC = () => {
  return (
    <Container>
      <Button />
      <Button />
      <Button isCorrect />
      <Button isErrored />
    </Container>
  );
};

export default Keyboard;
