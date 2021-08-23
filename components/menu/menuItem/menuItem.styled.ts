import styled from 'styled-components';
import hexRgb from 'hex-rgb';
import { IMenuItemsProps } from '../mobileMenu/mobileMenu.types';

export const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid
    ${({ theme }) => hexRgb(theme.color.white, { format: 'css', alpha: 0.1 })};

  :last-of-type {
    border: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    border: 0;
  }
`;

export const ListItemLink = styled.a<Pick<IMenuItemsProps, 'color'>>`
  font-family: ${({ theme }) => theme.font.spartan};
  text-decoration: none;
  padding: 20px 24px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.35px;
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 11px;
    letter-spacing: 1px;
    padding: 11px 16px;
    color: ${({ theme }) => hexRgb(theme.color.white, { format: 'css', alpha: 0.65 })};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.tablet - 1}px) {
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
      right: 32px;
      background: url('/assets/icons/chevron-right.svg') no-repeat;
      background-size: cover;
    }
  }
`;
