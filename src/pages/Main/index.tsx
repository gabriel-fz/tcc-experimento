import React from 'react';

import imgCover from '../../assets/img-main.svg';

import { Container, ButtonLink } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Vamos jogar?</h1>

        <p>
          Teste sua capacidade de aprender através desse jogo lógico que pode
          ser mais complexo do que parece!
        </p>

        <ButtonLink color="play" to="/instrucoes">
          Começar
        </ButtonLink>
      </div>

      <img src={imgCover} alt="imagem de capa" />
    </Container>
  );
};

export default Main;
