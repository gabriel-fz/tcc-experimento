import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 80px;
    width: 100%;
    padding: 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallWidth}) {
      justify-content: center;
      padding: 15px;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    max-height: 400px;
    margin: auto 0;
    padding: 0 0 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallWidth}) {
      margin: auto 0;
      max-height: 300px;
      padding: 10px 0 20px;
    }
  }
`;
