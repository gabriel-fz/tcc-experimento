import React, { useState, useEffect } from 'react';
import { AiOutlineLike } from 'react-icons/ai';

import { useGame } from '../../../../hooks/game';

import { Container } from './styles';

const Feedback: React.FC = () => {
  const { displaySequence, result } = useGame();

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isErrored, setIsErrored] = useState<boolean>(false);

  useEffect(() => {
    if (displaySequence.length > 0) {
      if (
        displaySequence[displaySequence.length - 1] ===
        result[displaySequence.length - 1]
      ) {
        setIsCorrect(true);
        setIsErrored(false);
      } else {
        setIsErrored(true);
        setIsCorrect(false);
      }
    }
  }, [displaySequence, result]);

  return (
    <Container isCorrect={isCorrect} isErrored={isErrored}>
      <AiOutlineLike size={55} />

      <AiOutlineLike size={55} />
    </Container>
  );
};

export default Feedback;
