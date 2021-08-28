import { motion } from 'framer-motion';
import styled from 'styled-components';
import { IStyledButtonProps, IStyledUnderlineProps } from './description.types';

export const Container = styled.section`
  width: 100%;
  max-width: 1190px;
  margin: 0 auto;
  padding: 0 24px 24px;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  padding-top: 50px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 0 40px 40px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    display: flex;
  }
`;

export const Content = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: flex;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    width: 350px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.antonio};
  font-size: 40px;
  line-height: 58px;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: left;
    margin-bottom: 30px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 80px;
    line-height: 115px;
  }
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.font.spartan};
  font-size: 11px;
  line-height: 22px;
  margin-bottom: 32px;
  text-align: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: left;
    margin-bottom: 44px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 14px;
    line-height: 25px;
  }
`;

export const Wikipedia = styled.p`
  font-family: ${({ theme }) => theme.font.spartan};
  color: ${({ theme }) => theme.color.white__05};
  font-size: 12px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 25px;

  a {
    color: ${({ theme }) => theme.color.white__05};
    font-weight: 700;
  }

  ::after {
    content: '';
    display: inline-block;
    background: url(/assets/icons/source.svg) no-repeat;
    background-size: cover;
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    text-align: left;
    justify-content: flex-start;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 14px;
    margin-bottom: 38px;
  }
`;

export const Buttons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.color.white__02};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    position: static;
    border: 0;
    margin-left: 70px;
    flex-direction: column;
    height: auto;
    width: auto;

    div a::before {
      content: '01';
      margin: 0 16px 0 20px;
      color: ${({ theme }) => theme.color.white__05};
    }

    div:nth-of-type(2) a::before {
      content: '02';
    }

    div:nth-of-type(3) a::before {
      content: '03';
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin-left: 0;
  }
`;

export const Underline = styled(motion.div)<IStyledUnderlineProps>`
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${({ theme, name }) => theme.color.planets[name]};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-right: 40px;
  position: relative;

  :last-of-type {
    margin: 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0;
    margin-bottom: 16px;
  }
`;

export const Button = styled.a<IStyledButtonProps>`
  font-family: ${({ theme }) => theme.font.spartan};
  color: ${({ theme }) => theme.color.white__05};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 9px;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 280px;
    height: 40px;
    border: 1px solid
      ${({ theme, name, isActive }) =>
        isActive ? theme.color.planets[name] : theme.color.white__02};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, name, isActive }) =>
      isActive ? theme.color.planets[name] : 'transparent'};
    transition: background-color 0.2s;

    :hover {
      background-color: ${({ theme, name, isActive }) =>
        isActive ? theme.color.planets[name] : theme.color.action.hover};
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    width: 350px;
  }
`;
