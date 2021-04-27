import React from 'react';

import Wins from './Wins';
import Display from './Display';
import Feedback from './Feedback';
import Keyboard from './Keyboard';

const GameInterface: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default GameInterface;
