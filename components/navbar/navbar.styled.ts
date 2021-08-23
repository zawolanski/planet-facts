import styled from 'styled-components';
import hexRgb from 'hex-rgb';

export const Container = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid
    ${({ theme }) => hexRgb(theme.color.white, { format: 'css', alpha: 0.2 })};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    padding: 32px 24px 7px;

    .logo {
      margin-bottom: 28px;
    }
  }
`;

export const MenuButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;
