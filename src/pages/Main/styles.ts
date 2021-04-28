import styled from 'styled-components';

import ButtonLinkDefault from '../../components/ButtonLink';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;
    max-width: 45%;

    h1 {
      font-weight: bold;
      font-size: 48px;
      color: #fff;
    }

    p {
      font-weight: bold;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.primary4};
      margin-top: 15px;
    }
  }

  img {
    width: 100%;
    max-width: 45%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumWidth}) {
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      max-width: 600px;

      h1 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }

    img {
      display: none;
    }
  }
`;

export const ButtonLink = styled(ButtonLinkDefault)`
  margin-top: 20px;
  max-width: 300px;
`;
