import React from 'react';

import { Container, ButtonLink } from './styles';

const Instructions: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Instruções:</h1>

        <ul>
          <li>Clique nos botões azuis para ativa-los.</li>

          <li>
            Caso perca, sinta-se a vontade para reiniciar o jogo quantas vezes
            quiser.
          </li>

          <li>Vença duas vezes para concluir o teste.</li>
        </ul>

        <ButtonLink color="play" to="/jogo">
          Jogar
        </ButtonLink>
      </div>
    </Container>
  );
};

export default Instructions;
