import { PageType, Planets } from 'types/global';

export interface IParams {
  planet: Planets;
  type: PageType;
}

export interface ISurface {
  image: {
    surface: {
      url: string;
    };
  };
  surface: {
    content: string;
    source: string;
  };
}

export interface IOverview {
  image: {
    overview: {
      url: string;
    };
  };
  overview: {
    content: string;
    source: string;
  };
}

export interface IStructure {
  image: {
    structure: {
      url: string;
    };
  };
  structure: {
    content: string;
    source: string;
  };
}

export interface IPlanet {
  name: Planets;
  rotation: number;
  revolution: number;
  radius: number;
  temperature: number;
}
