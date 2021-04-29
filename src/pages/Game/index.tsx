import React, { useEffect, useState } from 'react';

import { useGame } from '../../hooks/game';

import GameInterface from './GameInterface';
import Restart from './Restart';
import Finish from './Finish';

import { Container, Content } from './styles';

const Game: React.FC = () => {
  const {
    endOfTheGame,
    restartGame,
    displaySequenceIsComplete,
    wins,
  } = useGame();

  const [showGameDisplay, setShowGameDisplay] = useState(true);

  useEffect(() => {
    if (endOfTheGame) {
      setTimeout(() => {
        setShowGameDisplay(false);
      }, 1000);
    } else {
      setShowGameDisplay(true);
    }
  }, [endOfTheGame]);

  return (
    <Container>
      <Content
        isCorrect={displaySequenceIsComplete}
        isErrored={endOfTheGame && !displaySequenceIsComplete}
      >
        {showGameDisplay && <GameInterface />}

        {!showGameDisplay && wins === 2 && <Finish />}

        {!showGameDisplay && wins !== 2 && (
          <Restart levelUp={displaySequenceIsComplete} restart={restartGame} />
        )}
      </Content>
    </Container>
  );
};

export default Game;
