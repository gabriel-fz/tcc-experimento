import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  height: 90%;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 55px 40px 0;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.normal};
  }

  div {
    margin-bottom: 40px;

    h2 {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary1};
    }

    p {
      font-size: 18px;
      text-align: justify;
      color: ${({ theme }) => theme.colors.primary2};
    }

    ul {
      font-size: 18px;
      list-style-position: inside;
      color: ${({ theme }) => theme.colors.primary2};
      margin: 20px 0;
    }
  }
`;
