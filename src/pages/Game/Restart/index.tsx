import React from 'react';

import Button from '../../../components/Button';

import { Container } from './styles';

interface RestartProps {
  levelUp: boolean;
  restart(): void;
}

const Restart: React.FC<RestartProps> = ({ levelUp, restart }) => {
  return (
    <Container>
      {levelUp ? (
        <>
          <h1>Parabéns!</h1>
        </>
      ) : (
        <>
          <h1>Você perdeu :/</h1>
        </>
      )}

      <Button color="play" onClick={() => restart()}>
        Reiniciar
      </Button>
    </Container>
  );
};

export default Restart;
