import { gql, GraphQLClient } from 'graphql-request';
import { getPlanet, planets } from 'graphql/planet';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IParams } from 'types/pages/planet';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

const Planet = (props: any) => {
  return <div>TEST</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const routeParams = params as IParams | undefined;

  if (routeParams === undefined) return { notFound: true };
  const { type, planet } = routeParams;

  const data = await client.request(getPlanet(type), {
    planet: `${planet[0].toUpperCase()}${planet.slice(1)}`,
  });

  return {
    props: { planet: { ...data.planets } },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.request(planets);

  const paths = (data.planets as { name: string }[]).map(({ name }) => [
    { params: { planet: name.toLowerCase(), type: 'overview' } },
    { params: { planet: name.toLowerCase(), type: 'structure' } },
    { params: { planet: name.toLowerCase(), type: 'surface' } },
  ]);

  return {
    paths: paths.flat(),
    fallback: false,
  };
};

export default Planet;
