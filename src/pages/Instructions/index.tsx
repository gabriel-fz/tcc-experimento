import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Button } from './styles';

const Instructions: React.FC = () => {
  const history = useHistory();

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

        <Button color="play" onClick={() => history.push('/jogo')}>
          Jogar
        </Button>
      </div>
    </Container>
  );
};

export default Instructions;
