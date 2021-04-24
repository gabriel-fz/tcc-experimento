import styled from 'styled-components';

import ButtonDefault from '../../components/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 80%;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary2};
  border: 2px solid ${({ theme }) => theme.colors.success};
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 80px;
    width: 100%;
    padding: 30px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 100%;
    margin: 30px 0 100px;
  }
`;

export const Button = styled(ButtonDefault)`
  margin-top: 30px;
  max-width: 300px;
`;
