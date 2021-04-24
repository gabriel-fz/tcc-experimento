import React from 'react';

import { Container } from './styles';

const Wins: React.FC = ({ children }) => {
  return (
    <Container>
      <strong>Vitórias:</strong>

      <div>
        <strong>{children}</strong>
      </div>

      <span>Vença duas vezes para concluir o teste</span>
    </Container>
  );
};

export default Wins;
