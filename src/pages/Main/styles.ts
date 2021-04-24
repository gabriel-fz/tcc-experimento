import styled from 'styled-components';

import ButtonDefault from '../../components/Button';

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
`;

export const Button = styled(ButtonDefault)`
  margin-top: 20px;
  max-width: 300px;
`;
