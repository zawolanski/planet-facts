import Link from 'next/link';
import { ListItemLink, ListItem } from './mobileMenu.styled';
import { IMenuItemsProps } from './mobileMenu.types';

const MenuItem = ({ children, href, color }: IMenuItemsProps) => (
  <ListItem>
    <Link href={href} passHref>
      <ListItemLink color={color}>{children}</ListItemLink>
    </Link>
  </ListItem>
);

export default MenuItem;
