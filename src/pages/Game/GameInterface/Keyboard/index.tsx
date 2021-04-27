import React from 'react';
import { uuid } from 'uuidv4';

import { useGame } from '../../../../hooks/game';

import { Container, Button } from './styles';

const Keyboard: React.FC = () => {
  const { keyboardSequence, inputNumber, endOfTheGame } = useGame();

  return (
    <Container>
      {keyboardSequence.map(item => (
        <Button
          key={uuid()}
          isCorrect={item.active && item.isCorrect}
          isErrored={item.active && !item.isCorrect}
          onClick={() => inputNumber(item.digit)}
          disabled={item.active || endOfTheGame}
        >
          {item.active && item.digit}
        </Button>
      ))}
    </Container>
  );
};

export default Keyboard;
