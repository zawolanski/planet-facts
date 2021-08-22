import styled from 'styled-components';
import hexRgb from 'hex-rgb';

export const Container = styled.header`
  padding: 16px 24px;
  border-bottom: 1px solid
    ${({ theme }) => hexRgb(theme.color.white, { format: 'css', alpha: 0.2 })};
`;
