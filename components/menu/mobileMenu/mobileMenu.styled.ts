import styled from 'styled-components';

export const Navigation = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding-top: 4px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;
