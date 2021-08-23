import { Container, MenuButton } from './navbar.styled';
import Logo from '../../public/assets/logo.svg';
import Menu from '../../public/assets/icons/menu.svg';
import MobileMenu from 'components/menu/mobileMenu';
import { useState } from 'react';
import DesktopMenu from 'components/menu/desktopMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <Container>
      <Logo className="logo" />
      <MenuButton onClick={toggleMenu}>
        <Menu />
      </MenuButton>
      <MobileMenu isOpen={isMenuOpen} />
      <DesktopMenu />
    </Container>
  );
};

export default Header;
