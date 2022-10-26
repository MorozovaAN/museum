import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './Global.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);

reportWebVitals();
