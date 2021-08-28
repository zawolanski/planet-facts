import Styled from './navbar.styled';
import Logo from '../../public/assets/logo.svg';
import Menu from '../../public/assets/icons/menu.svg';
import MobileMenu from 'components/menu/mobileMenu';
import { useEffect, useState } from 'react';
import DesktopMenu from 'components/menu/desktopMenu';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsMenuOpen(false))
  }, [isMenuOpen, router.events])

  return (
    <Styled.Container>
      <Logo className="logo" />
      <Styled.MenuButton isMenuOpen={isMenuOpen} onClick={toggleMenu}>
        <Menu />
      </Styled.MenuButton>
      <MobileMenu isOpen={isMenuOpen} />
      <DesktopMenu />
    </Styled.Container>
  );
};

export default Header;
