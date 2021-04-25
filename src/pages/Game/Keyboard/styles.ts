import styled, { css } from 'styled-components';

interface ButtonProps {
  isCorrect?: boolean;
  isErrored?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 85px;
  width: 85px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 48px;
  color: #fff;
  background: ${({ theme }) => theme.colors.normalGradient};

  ${({ isErrored }) =>
    isErrored &&
    css`
      background: ${({ theme }) => theme.colors.dangerGradient};
    `}

  ${({ isCorrect }) =>
    isCorrect &&
    css`
      background: ${({ theme }) => theme.colors.successGradient};
    `}

  & + button {
    margin-left: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    height: 55px;
    width: 55px;
    font-size: 36px;

    & + button {
      margin-left: 15px;
    }
  }
`;
