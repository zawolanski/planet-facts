import { Planets } from 'types/global';

export interface IImageProps {
  name: Planets;
  image: {
    structure: {
      url: string;
    };
    surface: {
      url: string;
    };
    overview: {
      url: string;
    };
  };
}

export interface IDescriptionProps extends IImageProps {
  text: {
    content: string;
    source: string;
  };
}

export interface IStyledButtonProps {
  name: Planets;
  isActive: boolean;
}

export interface IStyledUnderlineProps {
  name: Planets;
}
