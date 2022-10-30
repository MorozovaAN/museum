import { Logo } from '../../common/components/Logo/Logo';
import { Container } from '../../common/styles/Container.styled';
import { HeaderEl, MenuIcon, HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <HeaderWrapper>
          <Logo title="Louvre" />
          <MenuIcon />
        </HeaderWrapper>
      </Container>
    </HeaderEl>
  );
};
