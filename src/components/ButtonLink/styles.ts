import styled, { css } from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonLinkProps extends LinkProps {
  color: 'play';
}

const colorVariations = {
  play: css`
    background: ${({ theme }) => theme.colors.playGradient};
  `,
};

export const Container = styled(Link)<ButtonLinkProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  text-decoration: none;

  ${({ color }) => colorVariations[color || 'play']}
`;
