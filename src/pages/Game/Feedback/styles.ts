import styled from 'styled-components';

export interface FeedbackProps {
  action?: 'success' | 'error';
}

export const Container = styled.div<FeedbackProps>`
  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary1};

  svg {
    margin: 0 20px;

    &:first-child {
      color: ${({ action, theme }) =>
        action && action === 'success' && theme.colors.success};
    }

    &:last-child {
      transform: rotate(180deg);
      color: ${({ action, theme }) =>
        action && action === 'error' && theme.colors.danger};
    }
  }
`;
