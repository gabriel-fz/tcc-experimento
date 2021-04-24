import styled, { css } from 'styled-components';

interface DigitProps {
  isCorrect?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Digit = styled.div<DigitProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 85px;
  width: 85px;
  background: ${({ theme }) => theme.colors.primary1};
  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.colors.normal};

  ${({ isErrored }) =>
    isErrored &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.danger};
    `}

  ${({ isCorrect }) =>
    isCorrect &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.success};
      color: ${({ theme }) => theme.colors.success};
    `}

  & + div {
    margin-left: 25px;
  }

  strong {
    font-weight: bold;
    font-size: 48px;
  }
`;
