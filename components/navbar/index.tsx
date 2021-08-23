import { Container, MenuButton } from './navbar.styled';
import Logo from '../../public/assets/logo.svg';
import Menu from '../../public/assets/icons/menu.svg';
import MobileMenu from 'components/mobileMenu';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <Container>
      <Logo />
      <MenuButton onClick={toggleMenu}>
        <Menu />
      </MenuButton>
      <MobileMenu isOpen={isMenuOpen} />
    </Container>
  );
};

export default Header;
