import React from 'react';

import imgCover from '../../assets/img-main.svg';

import { Container, Button } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Vamos jogar?</h1>

        <p>
          Teste sua capacidade de aprender através desse jogo lógico que pode
          ser mais complexo do que parece!
        </p>

        <Button color="play">Começar</Button>
      </div>

      <img src={imgCover} alt="imagem de capa" />
    </Container>
  );
};

export default Main;
