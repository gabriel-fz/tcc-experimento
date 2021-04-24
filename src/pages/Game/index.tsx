import React from 'react';

import Wins from './Wins';
import Display from './Display';
import Feedback from './Feedback';
import Keyboard from './Keyboard';

import { Container, Content, Button } from './styles';

const Game: React.FC = () => {
  return (
    <Container>
      <Content>
        <header>
          <Wins>1</Wins>
        </header>
        <div>
          <div>
            <Display />
          </div>

          <Feedback />

          <div>
            <Keyboard />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Game;
