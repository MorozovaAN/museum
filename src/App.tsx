import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './Global.styled';
import { Header } from './components/Header/Header';
import { Promo } from './components/Promo/Promo';
import { VirtualTour } from './components/VirtualTour/VirtualTour';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
      <Promo />
      <VirtualTour />
    </ThemeProvider>
  );
};
export default App;
