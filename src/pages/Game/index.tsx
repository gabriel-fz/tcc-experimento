import React, { useEffect, useState } from 'react';

import { useGame } from '../../hooks/game';

import Wins from './Wins';
import Display from './Display';
import Feedback from './Feedback';
import Keyboard from './Keyboard';

import { Container, Content, Button } from './styles';

const Game: React.FC = () => {
  const { endOfTheGame, restartGame, displaySequence, result } = useGame();

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
        <header>
          <Wins>1</Wins>
        </header>
        <div>
          <div>
            <Display />
          </div>

          {gameDisplay && <Feedback />}

          <div>
            <Keyboard />
          </div>

          <div>
            {!gameDisplay && (
              <Button color="play" onClick={() => restartGame()}>
                Reiniciar
              </Button>
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Game;
