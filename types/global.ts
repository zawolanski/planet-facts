export type Planets =
  | 'mercury'
  | 'venus'
  | 'earth'
  | 'mars'
  | 'jupiter'
  | 'saturn'
  | 'uranus'
  | 'neptune';

export type PageType = 'overview' | 'surface' | 'structure';

export type Sizes = {
  [key in Planets]: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
};
