import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body{
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
     font-style: normal;
     font-size: 16px;
}
`;

export const theme = {
  colors: {
    primary: '#030303', //black
    secondary: '#FFFFFF', //white
    accentLL: '#9D8665', //brown light
    accentLD: '#7E6C51', //brown dark
    accentD: '#710707', //red
  },

  fz: {
    xl: '32px',
    l: '28px',
    m: '22px',
    s: '18px',
    xs: '16px',
  },

  fw: {
    thin: '100',
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  },

  size: {
    l: '40px',
    m: '20px',
  },
};
