import styled from 'styled-components';
import { IStyledImgWrapperProps } from './image.types';

export const ImgContainer = styled.div`
  width: 100%;
  min-height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    min-height: 450px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    min-height: 670px;
    margin-right: 90px;
  }
`;

export const ImgWrapper = styled.div<IStyledImgWrapperProps>`
  width: ${({ $sizes, $name }) => `${$sizes[$name].mobile}px`};
  height: ${({ $sizes, $name }) => `${$sizes[$name].mobile}px`};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: ${({ $sizes, $name }) => `${$sizes[$name].tablet}px`};
    height: ${({ $sizes, $name }) => `${$sizes[$name].tablet}px`};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    width: ${({ $sizes, $name }) => `${$sizes[$name].desktop}px`};
    height: ${({ $sizes, $name }) => `${$sizes[$name].desktop}px`};
  }
`;

export const Surface = styled.section`
  position: absolute !important;
  z-index: 3;
  height: 125px !important;
  width: 101px;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
`;
