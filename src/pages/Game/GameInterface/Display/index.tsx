import React, { useMemo } from 'react';
import { uuid } from 'uuidv4';

import { useGame } from '../../../../hooks/game';

import { Container, Digit } from './styles';

const Display: React.FC = () => {
  const { displaySequence, result } = useGame();

  const display = useMemo(
    () =>
      result.map((item, index) => {
        return {
          digit: displaySequence[index],
          isCorrect: displaySequence[index] === item,
          isErrored:
            !!displaySequence[index] && displaySequence[index] !== item,
        };
      }),
    [displaySequence, result],
  );

  return (
    <Container>
      {display.map(item => (
        <Digit
          key={uuid()}
          isCorrect={item.isCorrect}
          isErrored={item.isErrored}
        >
          <strong>{item.digit || ''}</strong>
        </Digit>
      ))}
    </Container>
  );
};

export default Display;
