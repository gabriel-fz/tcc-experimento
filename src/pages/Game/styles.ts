import styled, { css } from 'styled-components';

import ButtonDefault from '../../components/Button';

interface ContentProps {
  isCorrect: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 80%;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary2};
  border: 2px solid ${({ theme }) => theme.colors.normal};
  border-radius: 10px;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.danger};
    `}

  ${({ isCorrect }) =>
    isCorrect &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.success};
    `}

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 80px;
    width: 100%;
    padding: 30px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    margin: 30px 0 100px;
  }
`;

export const Button = styled(ButtonDefault)``;
