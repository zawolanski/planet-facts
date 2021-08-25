import Description from 'components/description';
import Information from 'components/information';
import { gql, GraphQLClient } from 'graphql-request';
import { getPlanet, planets } from 'graphql/planet';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IParams, IPlanet } from 'types/pages/planet';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

const Planet = ({
  planet: { temperature, revolution, radius, rotation, name, ...props },
}: {
  planet: IPlanet;
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
  const { type, planet } = routeParams;

  const data = await client.request(getPlanet(type), {
    planet: planet,
  });

  return {
    props: { planet: data.planets[0] },
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
