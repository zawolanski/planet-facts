import styled from 'styled-components';
import { IStyledMenuItemProps } from '../mobileMenu/mobileMenu.types';

export const ListItem = styled.li<IStyledMenuItemProps>`
  list-style: none;

  :last-of-type a {
    border: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    transition: border 0.15s;
    margin: 0 16px;
    border-bottom: 4px solid transparent;

    :hover {
      border-color: ${({ theme, planet }) => theme.color.planets[planet]};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    border: 0;
    border-top: 4px solid transparent;
    :hover {
      border-color: ${({ theme, planet }) => theme.color.planets[planet]};
    }
  }
`;

export const ListItemLink = styled.a<IStyledMenuItemProps>`
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
    display: block;
    font-size: 11px;
    line-height: 1;
    letter-spacing: 1px;
    padding: 0;
    padding-top: 20px;
    color: ${({ theme }) => theme.color.white__075};
    border: 0;
    height: 100%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    padding: 34px 0;
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
      background-color: ${({ theme, planet }) => theme.color.planets[planet]};
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
