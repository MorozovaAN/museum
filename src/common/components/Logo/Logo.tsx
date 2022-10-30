import logo from '../../../assets/images/logo.svg';
import { LogoEl } from './Logo.styled';


export const Logo = ({title}:{title:string}) => {
 return  <LogoEl>
    <img src={logo} alt="logo" />
    <p>{title}</p>
  </LogoEl>;
};
