import styled from 'styled-components';

export const ImgContainer = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    height: 420px;
  }
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .img {
    width: auto !important;
    height: auto !important;
    min-height: auto !important;
    min-width: auto !important;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 400px;
    height: 400px;

    .img {
      transform: scale(1.5);
    }
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
