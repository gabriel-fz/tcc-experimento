import styled, { css } from 'styled-components';

interface ContentProps {
  isCorrect: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div<ContentProps>`
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
`;
