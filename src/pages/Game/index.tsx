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
    displaySequence,
    result,
    wins,
  } = useGame();

  const [gameDisplay, setGameDisplay] = useState(true);

  useEffect(() => {
    if (endOfTheGame) {
      setTimeout(() => {
        setGameDisplay(false);
      }, 1000);
    } else {
      setGameDisplay(true);
    }
  }, [endOfTheGame]);

  return (
    <Container>
      <Content
        isCorrect={displaySequence.length === result.length}
        isErrored={endOfTheGame && displaySequence.length !== result.length}
      >
        {gameDisplay && <GameInterface />}

        {!gameDisplay && wins === 2 && <Finish />}

        {!gameDisplay && wins !== 2 && (
          <Restart
            levelUp={displaySequence.length === result.length}
            restart={restartGame}
          />
        )}
      </Content>
    </Container>
  );
};

export default Game;

// <Button color="play" onClick={() => restartGame()}>
//                 Reiniciar
//               </Button>
