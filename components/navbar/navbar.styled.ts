import styled from 'styled-components';
import { IMenuButtonProps } from './navbar.types';

const Container = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.color.white__02};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    padding-top: 32px;

    .logo {
      margin-bottom: 28px;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    flex-direction: row;
    padding: 22px 32px;

    .logo {
      margin-bottom: 0;
    }
  }
`;

const MenuButton = styled.button<IMenuButtonProps>`
  border: 0;
  background: transparent;
  cursor: pointer;

  > svg * {
    fill: ${({theme, isMenuOpen}) => isMenuOpen && theme.color.white__02};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;

const Styled = {
  Container,
  MenuButton
}

export default Styled;
