import { planets } from '../data';
import MenuItem from '../menuItem';
import { List, Navigation } from './desktopMenu.styled';

const DesktopMenu = () => (
  <Navigation>
    <List>
      {planets.map(({ id, planet }) => (
        <MenuItem key={id} href={`/${planet}/overview`} color={planet}>
          {planet}
        </MenuItem>
      ))}
    </List>
  </Navigation>
);

export default DesktopMenu;
