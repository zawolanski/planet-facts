import MenuItem from './menuItem.styles';
import { planets } from './mobileMenu.data';
import { Navigation } from './mobileMenu.styled';

const MobileMenu = () => (
  <Navigation>
    {planets.map(({ id, planet }) => (
      <MenuItem key={id} href={`/${planet}`} color={planet}>
        {planet}
      </MenuItem>
    ))}
  </Navigation>
);

export default MobileMenu;
