import React from 'react';

import { useGame } from '../../../hooks/game';

import { Container } from './styles';

const Wins: React.FC = () => {
  const { wins } = useGame();

  return (
    <Container>
      <strong>Vitórias:</strong>

      <div>
        <strong>{wins}</strong>
      </div>

      <span>Vença duas vezes para concluir o teste</span>
    </Container>
  );
};

export default Wins;
