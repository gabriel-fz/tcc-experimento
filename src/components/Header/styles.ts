import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary3};
  width: 100%;
  height: 80px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    max-width: ${({ theme }) => theme.breakpoints.large};
    margin: 0 auto;
    padding: 0 20px;
  }
`;
