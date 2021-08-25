import { Planets } from 'types/global';

export interface IDescriptionProps {
  name: Planets;
  structure?: {
    content: string;
    source: string;
  };
  surface?: {
    content: string;
    source: string;
  };
  overview?: {
    content: string;
    source: string;
  };
  image: {
    structure?: {
      url: string;
    };
    surface?: {
      url: string;
    };
    overview?: {
      url: string;
    };
  };
}

export interface IStyledButtonProps {
  name: Planets;
  isActive: boolean;
}
