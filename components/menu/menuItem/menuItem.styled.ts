import styled from 'styled-components';
import { IMenuItemsProps } from '../mobileMenu/mobileMenu.types';

export const ListItem = styled.li`
  list-style: none;

  :last-of-type a {
    border: 0;
  }
`;

export const ListItemLink = styled.a<Pick<IMenuItemsProps, 'color'>>`
  font-family: ${({ theme }) => theme.font.spartan};

  border-bottom: 1px solid ${({ theme }) => theme.color.white__02};
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
    line-height: 1;
    letter-spacing: 1px;
    padding: 18px 16px;
    color: ${({ theme }) => theme.color.white__075};
    border: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    padding: 14.5px 16px;
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
