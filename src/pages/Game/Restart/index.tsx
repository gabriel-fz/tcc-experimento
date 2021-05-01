import React from 'react';

import imgRestart from '../../../assets/restart.svg';
import imgMedal from '../../../assets/medalha.svg';

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
          <img src={imgMedal} alt="Imagem de medalha" />

          <h1>Parabéns!</h1>

          <p>
            Você conseguiu alcançar sua primeira vitória! Clique em reiniciar e
            vença mais uma vez para poder concluir o teste!
          </p>
        </>
      ) : (
        <>
          <img src={imgRestart} alt="Imagem de reinicio de jogo" />

          <h1>Você perdeu :/</h1>

          <p>Mas não desanime! Clique em reiniciar e tente de novo!</p>
        </>
      )}

      <Button color="play" onClick={() => restart()}>
        Reiniciar
      </Button>
    </Container>
  );
};

export default Restart;
