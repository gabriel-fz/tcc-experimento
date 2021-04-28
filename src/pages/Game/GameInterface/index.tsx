import React from 'react';

import Wins from './Wins';
import Display from './Display';
import Feedback from './Feedback';
import Keyboard from './Keyboard';

import { Container } from './styles';

const GameInterface: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default GameInterface;
