import styled from 'styled-components';

interface FeedbackProps {
  isCorrect: boolean;
  isErrored: boolean;
}

export const Container = styled.div<FeedbackProps>`
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary1};

  svg {
    margin: 0 20px;

    &:first-child {
      color: ${({ isCorrect, theme }) => isCorrect && theme.colors.success};
    }

    &:last-child {
      transform: rotate(180deg);
      color: ${({ isErrored, theme }) => isErrored && theme.colors.danger};
    }
  }
`;
