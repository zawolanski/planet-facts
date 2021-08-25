import styled from 'styled-components';

export const Navigation = styled.nav`
  z-index: 15;
  display: none;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
`;
