import MenuItem from './menuItem.styles';
import { planets } from './mobileMenu.data';
import { Navigation } from './mobileMenu.styled';
import { IMobileMenu } from './mobileMenu.types';

const MobileMenu = ({ isOpen }: IMobileMenu) => (
  <Navigation isOpen={isOpen}>
    {planets.map(({ id, planet }) => (
      <MenuItem key={id} href={`/${planet}`} color={planet}>
        {planet}
      </MenuItem>
    ))}
  </Navigation>
);

export default MobileMenu;
