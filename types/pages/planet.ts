import { PageType, Planets } from 'types/global';

export interface IParams {
  planet: Planets;
  type: PageType;
}

export interface IPlanet {
  name: Planets;
  rotation: number;
  revolution: number;
  radius: number;
  temperature: number;
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
}
