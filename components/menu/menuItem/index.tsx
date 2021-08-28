import Link from 'next/link';
import { ListItemLink, ListItem } from './menuItem.styled';
import { IMenuItemsProps } from '../mobileMenu/mobileMenu.types';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeInOut' } },
  exit: { opacity: 0 },
};

const MenuItem = ({ children, href, color }: IMenuItemsProps) => (
  <ListItem as={motion.li} variants={item} planet={color}>
    <Link href={href} passHref>
      <ListItemLink planet={color}>{children}</ListItemLink>
    </Link>
  </ListItem>
);
export default MenuItem;
