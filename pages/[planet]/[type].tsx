import Description from 'components/description';
import Information from 'components/information';
import { GraphQLClient } from 'graphql-request';
import { getPlanet, planets } from 'graphql/planet';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IContent, IParams, IPlanet } from 'types/pages/planet';
import { omit } from 'lodash';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

const Planet = ({
  planet: { temperature, revolution, radius, rotation, name, ...props },
}: {
  planet: IContent;
}) => {
  return (
    <>
      <section>
        <Description name={name} {...props} />
      </section>
      <Information
        radius={radius}
        temperature={temperature}
        revolution={revolution}
        rotation={rotation}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const routeParams = params as IParams | undefined;

  if (routeParams === undefined) return { notFound: true };
  const { type, planet: planetName } = routeParams;

  const data: { planets: IPlanet[] } = await client.request(getPlanet(type), {
    planet: planetName,
  });

  const planet = data.planets[0];

  if (planet === undefined) {
    return {
      notFound: true,
    };
  }

  const planetData: IContent = {
    ...omit(planet, ['overview', 'structure', 'surface']),
    text: {
      source: '',
      content: '',
    },
  };

  if (planet.overview !== undefined) planetData.text = planet.overview;
  if (planet.surface !== undefined) planetData.text = planet.surface;
  if (planet.structure !== undefined) planetData.text = planet.structure;

  return {
    props: { planet: planetData },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.request(planets);

  const paths = (data.planets as { name: string }[]).map(({ name }) => [
    { params: { planet: name, type: 'overview' } },
    { params: { planet: name, type: 'structure' } },
    { params: { planet: name, type: 'surface' } },
  ]);

  return {
    paths: paths.flat(),
    fallback: false,
  };
};

export default Planet;
