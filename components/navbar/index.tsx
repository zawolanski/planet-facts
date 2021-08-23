import { Container, MenuButton } from './navbar.styled';
import Logo from '../../public/assets/logo.svg';
import Menu from '../../public/assets/icons/menu.svg';
import MobileMenu from 'components/mobileMenu';

const Header = () => {
  return (
    <Container>
      <Logo />
      <MenuButton>
        <Menu />
      </MenuButton>
      <MobileMenu />
    </Container>
  );
};

export default Header;
