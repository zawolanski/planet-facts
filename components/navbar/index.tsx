import { Container, MenuButton } from './navbar.styled';
import Logo from '../../public/assets/logo.svg';
import Menu from '../../public/assets/icons/menu.svg';

const Header = () => {
  return (
    <Container>
      <Logo />
      <MenuButton>
        <Menu />
      </MenuButton>
    </Container>
  );
};

export default Header;
