import { gql, GraphQLClient } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

const Planet = (props: any) => {
  console.log(props);
  return <div>TEST</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const param = params as { planet: string; type: 'overview' | 'surface' | 'structure' };
  const planet = `${param.planet[0].toUpperCase()}${param.planet.slice(1)}`;
  const query = gql`
    query Planets($planet: String!) {
      planets(where: { name: $planet }) {
        name
        rotation
        revolution
        radius
        temperature
        image {
          ${param.type} {
            url
          }
        }
        ${param.type} {
          content
          source
        }
      }
    }
  `;

  const data = await client.request(query, { planet });
  console.log(data.planets);

  return {
    props: { planet: { ...data.planets } },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Planets {
      planets {
        name
      }
    }
  `;

  const data = await client.request(query);

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
