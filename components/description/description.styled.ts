import styled from 'styled-components';
import { IStyledButtonProps } from './description.types';

export const Container = styled.div`
  width: 100%;
  padding: 0 24px 24px;
  color: ${({ theme }) => theme.color.white};
  position: relative;
  padding-top: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.antonio};
  font-size: 40px;
  line-height: 58px;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.font.spartan};
  font-size: 11px;
  line-height: 22px;
  margin-bottom: 32px;
  text-align: center;
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
`;

export const Button = styled.a<IStyledButtonProps>`
  font-family: ${({ theme }) => theme.font.spartan};
  color: ${({ theme }) => theme.color.white__05};
  text-transform: uppercase;
  margin-right: 40px;
  letter-spacing: 2px;
  font-size: 9px;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 4px solid
    ${({ theme, name, isActive }) => (isActive ? theme.color.planets[name] : 'transparent')};

  :last-of-type {
    margin: 0;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;

  .img {
    width: auto !important;
    height: auto !important;
    min-height: auto !important;
    min-width: auto !important;
  }
`;
