import { createGlobalStyle } from 'styled-components';
import { devices } from 'utils';

import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  :root {
    --max-width: 1120px;
    --home-max-width: 2520px;
    --space-side: 48px;
    --space-top: 80px;

    @media only screen and ${devices.md} {
      --space-side: 20px;
      --space-top: 48px;
    }
  }
  
  .inner{
    max-width: 1600px;
  }

  * {
    box-sizing: border-box;
  }
  
  h1,h2,h3,h4,h5,p,ul {
    margin: 0px;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-weight: ${p => theme.font.weight.normal};
    font-weight: ${p => theme.font.weight.regular};
    font-family: ${p => theme.font.family};
    margin: 0px;

    //&::-webkit-scrollbar {
    //  display: none;
    //}
    

  }
  

  svg { vertical-align: baseline; }


  /* Let's get this party started */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    cursor: pointer;
  }



`;
