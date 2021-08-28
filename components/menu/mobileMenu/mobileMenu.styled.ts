import styled from 'styled-components';

export const Navigation = styled.nav`
  z-index: 15;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding-top: 4px;
  overflow-y: auto;
  background-color: ${({theme}) => theme.color.black};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;
