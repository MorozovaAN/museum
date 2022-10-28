import { Logo } from '../common/Logo/Logo';
import { HeaderEl, MenuIcon } from './Header.styled';

export const Header = () => {
  return (
    <HeaderEl>
      <Logo title="Louvre" />
      <MenuIcon />
    </HeaderEl>
  );
};
