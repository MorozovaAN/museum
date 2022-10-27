import { HeaderEl, Logo, MenuIcon } from './Header.styled';
import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <HeaderEl>
      <Logo>
        <img src={logo} alt="logo" />
        <p>Louvre</p>
      </Logo>
      <MenuIcon />
    </HeaderEl>
  );
};
