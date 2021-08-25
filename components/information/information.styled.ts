import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.color.white};
  padding: 0 24px 24px;
  width: 100%;
  max-width: 1100px;
`;

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.color.white__02};
  margin-bottom: 8px;
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  :nth-of-type(1) > p:last-of-type::after,
  :nth-of-type(2) > p:last-of-type::after {
    content: ' days';
  }

  :nth-of-type(3) > p:last-of-type::after {
    content: ' km';
  }

  :nth-of-type(4) > p:last-of-type::after {
    content: '°C';
  }
`;

export const CardTitle = styled.p`
  font-family: ${({ theme }) => theme.font.spartan};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white__05};
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.75px;
`;

export const CardValue = styled.p`
  font-family: ${({ theme }) => theme.font.antonio};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  letter-spacing: -0.75px;
  height: 22px;
`;
