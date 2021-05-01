import React from 'react';

import { Container, Content } from './styles';

const TheoreticalFramework: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h2>Parabéns por concluir o jogo?</h2>

          <p>
            Se você conseguiu concluir o jogo, certamente foi porque você
            aprendeu as seguintes regras:
          </p>

          <ul>
            <li>
              Ao apertar um botão azul, é revelado um número e ele é inserido no
              display.
            </li>
            <li>
              A intenção do jogo é de inserir todos os números no display de
              forma ordenada crescente.
            </li>
            <li>
              Se o número estiver correto na ordenação do display, o botão e o
              número indicado no display ficam verdes.
            </li>
            <li>
              Se o número não estiver correto na ordenação do display, o botão e
              o n[úmero indicado no display ficam vermelhos.
            </li>
            <li>Ao inserir um número errado você perde o jogo.</li>
            <li>
              Você pode perder e reiniciar o jogo o jogo quantas vezes quiser,
              até concluir o jogo.
            </li>
            <li>Para concluir o jogo, é necessário ganhar duas vezes.</li>
            <li>Os números dos botões não mudam.</li>
          </ul>

          <p>
            Mas como você aprendeu tais regras se apenas três foram informadas?
            A resposta é simples: você aprendeu graças aos elementos do
            condicionamento operante!
          </p>
        </div>

        <div>
          <h2>O que é condicionamento operante?</h2>

          <p>
            Oriundo do behaviorismo radical, o condicionamento operante tem como
            um de seus principais idealizadores o psicólogo Burrhus Frederic
            Skinner que realizou diversos experimentos científicos para a
            formulação de tal termo. Santos (2015) descreve que Skinner em seus
            experimentos utilizava animais pequenos (como ratos e pombos) presos
            em caixas –também conhecidas como caixas de Skinner– e privados de
            água e/ou comida para observar seu comportamento a determinados
            estímulos. Através desses experimentos, Skinner constatou que ao
            colocar na caixa um dispositivo em forma de alavanca de modo a
            fornecer água e/ou comida sempre que pressionado, os animais que ali
            estavam privados iriam ser condicionados a sempre apertar a alavanca
            para receber a água e/ou a comida. Esse contexto do experimento com
            o rato pode melhor ser descrito pela fórmula da contingência
            tríplice <b>O-R-&gt;C</b>, onde <b>O</b> é a ocasião, <b>R</b> é a
            resposta e <b>C</b> é a consequência.
          </p>

          <p>
            Segundo Moreira e Medeiros (2007) a contingência tríplice é uma
            unidade no qual é possível representar o comportamento operante, que
            diz que em determinada ocasião há uma resposta que gera uma
            consequência, sendo que a resposta é influenciada pela consequência.
            Podemos observar então que no experimento de Skinner há uma ocasião
            (caixa de Skinner com um rato) onde há uma resposta (o rato
            apertando a alavanca) que gera uma consequência (é fornecido água
            e/ou alimento para o rato), e como a resposta está ligada à
            consequência, se mudarmos a consequência do experimento de Skinner
            de fornecimento de água e/ou comida para um leve choque elétrico, a
            resposta do rato também será mudada e ele evitará apertar a alavanca
            para não receber o choque. Com isso, Moreira e Medeiros (2007)
            evidenciam que a relação direta entre resposta e consequência nos dá
            a possibilidade de modificar as respostas programando consequências
            especiais para que as mesmas ocorram, e isso nada mais é do que a
            base do condicionamento operante.
          </p>

          <p>
            Para poder programar o comportamento, as consequências então são
            divididas em estímulos positivos ou negativos que serão melhor
            descritos a seguir.
          </p>
        </div>

        <div>
          <h2>Reforço positivo:</h2>

          <p>
            É a consequência que aumenta a probabilidade de um comportamento
            ocorrer novamente através da adição de um estímulo reforçador.
            Exemplo: No experimento de Skinner quando o rato aperta a alavanca e
            recebe uma comida, ele será condicionado a apertar a alavanca mais
            vezes.
          </p>
        </div>

        <div>
          <h2>Reforço negativo:</h2>

          <p>
            É a consequência que aumenta a probabilidade de um comportamento
            ocorrer novamente através da retirada de um estímulo aversivo.
            Exemplo: Quando uma pessoa toma um remédio e ele retira algum tipo
            de dor, ela será condicionada a tomar este mesmo remédio mais vezes
            quando sentir dor.
          </p>
        </div>

        <div>
          <h2>Punição positiva:</h2>

          <p>
            É a consequência que diminui a probabilidade de um comportamento
            ocorrer novamente através da adição de um estímulo aversivo.
            Exemplo: Quando uma pessoa alérgica a chocolate como chocolate, ela
            será condicionada a evitar comer chocolate para não ter crises de
            alergia.
          </p>
        </div>

        <div>
          <h2>Punição negativa:</h2>

          <p>
            É a consequência que diminui a probabilidade de um comportamento
            ocorrer novamente através da remoção de um estímulo reforçador.
            Exemplo: Quando uma pessoa ultrapassa o prazo de empréstimo de um
            livro de uma biblioteca e ela tem que pagar uma multa em dinheiro,
            ela será condicionada a evitar ultrapassar o prazo de empréstimo dos
            livros da biblioteca.
          </p>
        </div>

        <div>
          <h2>Como o condicionamento estava presente no jogo então?</h2>

          <p>
            Ao jogar, você teve vários contatos com estímulos positivos e
            negativos que fizeram com que você aprendesse sobre o jogo e
            posteriormente ganhasse. Esses estímulos estavam presentes da
            seguinte maneira:
          </p>

          <ul>
            <li>
              <b>Botão azul: </b> Ao clicar em um botão correto, são disparados
              reforços positivos de cor verde no display, no ícone de like e no
              botão clicado. Ao clicar em um botão errado, são disparados
              punições positivas de cor vermelha no display, no ícone de like e
              no botão clicado.
            </li>

            <li>
              <b>Ganhar um jogo: </b> O ato de ganhar um jogo já é em si um
              reforço positivo. Ao ganhar um jogo completando a sequência, são
              disparados reforços positivos como: borda verde na tela, acréscimo
              no contador de vitórias e modal parabenizando a vitória.
            </li>

            <li>
              <b>Perder um jogo: </b> O ato de perder um jogo já é em si uma
              punição negativa. Ao perder um jogo inserindo uma sequência
              incorreta, são disparados punições negativas como: borda vermelha
              na tela, e modal informando a derrota.
            </li>
          </ul>
        </div>

        <div>
          <h2>Considerações finais:</h2>

          <p>
            Após ganhar algumas vezes, você certamente ficará condicionado de
            modo que decore a sequência dos botões (caso a sequência não mude) e
            que não erre mais nenhum botão ao jogar.
          </p>
        </div>

        <div>
          <h2>Referências:</h2>

          <ul>
            <li>
              SKINNER B. F. Ciência e Comportamento Humano. tradução João Carlos
              Todorov, Rodolfo Azzi - 11 ed. - São Paulo, 2003 - Coleção
              biblioteca universal.
            </li>

            <li>
              SKINNER B. F. Questões recentes na análise comportamental.
              Papirus, 2005.
            </li>

            <li>
              MOREIRA M. B.; MEDEIROS C. A. Princípios básicos de análise do
              comportamento. Artmed, 2007.
            </li>

            <li>
              WALZ, S. P.; DETERDING S. The Gameful World, Approaches, Issues,
              Applications. MIT Press, 2015.
            </li>

            <li>
              SANTOS S. C. G. B. S. R. A educação e o controle do comportamento:
              Pressupostos da Teoria Behaviorista. Trabalho d conclusão de curso
              - Universidade Estadual de Maringá - Maringá, 2015.
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};

export default TheoreticalFramework;
