import React from 'react';

import imgTrophy from '../../../assets/trofeu.svg';

import ButtonLink from '../../../components/ButtonLink';

import { Container } from './styles';

const Finish: React.FC = () => {
  return (
    <Container>
      <img src={imgTrophy} alt="Imagem de trofeu" />

      <h1>Parabéns!</h1>

      <p>
        Se você conseguiu chegar até aqui, significa então que os estímulos do{' '}
        <b>condicionamento operante</b> presentes no jogo foram eficazes em te
        ensinar a jogar! Clique em <b>Proseguir</b> e descubra sobre como tudo
        isso ocorreu.
      </p>

      <ButtonLink color="play" to="/base-teorica">
        Proseguir
      </ButtonLink>
    </Container>
  );
};

export default Finish;
