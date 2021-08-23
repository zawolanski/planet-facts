import hexRgb from 'hex-rgb';
import link from 'next/link';
import styled from 'styled-components';
import { IMenuItemsProps, IMobileMenu } from './mobileMenu.types';

export const Navigation = styled.nav<IMobileMenu>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 4px 24px 0;
  background-color: ${({ theme }) => theme.color.black};
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: none;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid
    ${({ theme }) => hexRgb(theme.color.white, { format: 'css', alpha: 0.1 })};

  :last-of-type {
    border: 0;
  }
`;

export const ListItemLink = styled.a<Pick<IMenuItemsProps, 'color'>>`
  font-family: ${({ theme }) => theme.font.spartan};
  text-decoration: none;
  padding: 20px 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.35px;
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.color.white};

  ::before {
    content: '';
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 24px;
    vertical-align: middle;
    background-color: ${({ theme, color }) => theme.color.planets[color]};
  }

  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 5px;
    height: 10px;
    right: 8px;
    background: url('/assets/icons/chevron-right.svg') no-repeat;
    background-size: cover;
  }
`;
