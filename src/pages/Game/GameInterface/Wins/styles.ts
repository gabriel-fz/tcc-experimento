import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  height: 35px;
  width: 125px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.play};
  padding: 0 7px 0 15px;

  strong {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 25px;
    width: 25px;
    background: #fff;
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.play};
  }

  span {
    width: 160px;
    padding: 8px;
    border-radius: 5px;
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.colors.play};
    text-align: center;

    &::before {
      content: '';
      bottom: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid ${({ theme }) => theme.colors.play};
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
