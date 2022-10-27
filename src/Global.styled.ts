import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');

*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
body{
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
     font-style: normal;
}
`;

export const theme = {
  colors: {
    primary: '#030303',
    secondary: '#FFFFFF',
    accentLL: '#9D8665', //accent light light
    accentLD: '#7E6C51', //accent light dark
    accentD: '#710707', //accent dark
  },
};
