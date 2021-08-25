import { gql } from 'graphql-request';
import { PageType } from 'types/global';

export const getPlanet = (type: PageType) => gql`
query Planets($planet: String!) {
  planets(where: { name: $planet }) {
    name
    rotation
    revolution
    radius
    temperature
    image {
      ${type} {
        url
      }
    }
    ${type} {
      content
      source
    }
  }
}
`;

export const planets = gql`
  query Planets {
    planets {
      name
    }
  }
`;
