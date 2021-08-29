import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${reset}

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.color.black} url('/assets/background-stars.svg');
    }

`;
