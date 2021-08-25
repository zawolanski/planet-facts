import MenuItem from '../menuItem';
import { planets } from '../data';
import { Navigation } from './mobileMenu.styled';
import { IMobileMenu } from './mobileMenu.types';
import { AnimatePresence, motion } from 'framer-motion';

const container = { show: { transition: { staggerChildren: 0.1 } } };

const MobileMenu = ({ isOpen }: IMobileMenu) => (
  <AnimatePresence>
    {isOpen ? (
      <Navigation as={motion.nav} variants={container} initial="hidden" animate="show" exit="exit">
        <motion.ul>
          {planets.map(({ id, planet }) => (
            <MenuItem key={id} href={`/${planet}/overview`} color={planet}>
              {planet}
            </MenuItem>
          ))}
        </motion.ul>
      </Navigation>
    ) : null}
  </AnimatePresence>
);

export default MobileMenu;
