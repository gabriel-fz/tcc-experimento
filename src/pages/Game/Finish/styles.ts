import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  h1 {
    font-weight: bold;
    font-size: 64px;
  }

  p {
    font-size: 24px;
    margin-top: 30px;
    color: ${({ theme }) => theme.colors.primary4};
    text-align: center;

    b {
      color: #fff;
    }
  }

  a {
    max-width: 400px;
    margin-top: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallWidth}) {
    padding: 0 10px;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;

      @media (max-height: ${({ theme }) => theme.breakpoints.smallHeight}) {
        margin-top: 15px;
      }
    }

    a {
      @media (max-height: ${({ theme }) => theme.breakpoints.smallHeight}) {
        margin-top: 15px;
      }
    }
  }
`;
