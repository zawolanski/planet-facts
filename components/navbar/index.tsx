import { Container } from './navbar.styled';
import Logo from '../../public/assets/logo.svg';
import Menu from '../../public/assets/icons/menu.svg';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Menu />
    </Container>
  );
};

export default Header;
