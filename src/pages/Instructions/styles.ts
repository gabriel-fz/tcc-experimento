import styled from 'styled-components';

import ButtonDefault from '../../components/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 80%;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary2};
    border: 2px solid ${({ theme }) => theme.colors.play};
    border-radius: 10px;
    padding: 0 100px;

    h1 {
      font-weight: bold;
      font-size: 48px;
      color: #fff;
    }

    ul {
      font-weight: bold;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.primary4};
      margin-top: 25px;
      list-style-position: inside;
    }
  }
`;

export const Button = styled(ButtonDefault)`
  margin-top: 30px;
  max-width: 300px;
`;
