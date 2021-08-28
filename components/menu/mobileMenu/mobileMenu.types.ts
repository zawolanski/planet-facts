import { Planets } from 'types/global';

export interface IPlanets {
  id: string;
  planet: Planets;
}

export interface IMenuItemsProps {
  href: string;
  color: Planets;
  children: string;
}

export interface IMobileMenu {
  isOpen: boolean;
}

export interface IStyledMenuItemProps {
  planet: Planets;
}
