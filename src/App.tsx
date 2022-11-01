import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './Global.styled';
import { Header } from './components/Header/Header';
import { Promo } from './components/Promo/Promo';
import { VirtualTour } from './components/VirtualTour/VirtualTour';
import { Explore } from './components/Explore/Explore';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Header />
      <main>
        <Promo />
        <VirtualTour />
        <Explore />
      </main>
    </ThemeProvider>
  );
};
export default App;
