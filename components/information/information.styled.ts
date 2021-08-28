import styled from 'styled-components';

export const Container = styled.section`
  color: ${({ theme }) => theme.color.white};
  padding: 0 24px 24px;
  width: 100%;
  max-width: 1190px;
  margin: 0 auto;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: flex;
    padding: 0 40px 36px;
  }
`;

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.color.white__02};
  margin-bottom: 8px;
  min-height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 11px 0 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;

    :last-of-type {
      margin-right: 0;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    padding: 25px;
    margin-right: 30px;
  }
`;

export const CardTitle = styled.p`
  font-family: ${({ theme }) => theme.font.spartan};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white__05};
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.75px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 11px;
    margin-bottom: 22px;
  }
`;

export const CardValue = styled.p`
  font-family: ${({ theme }) => theme.font.antonio};
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  letter-spacing: -0.75px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 24px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 40px;
  }
`;
