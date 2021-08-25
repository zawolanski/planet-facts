import { useRouter } from 'next/dist/client/router';
import { gql, GraphQLClient } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string);

const Planet = () => {
  const router = useRouter();
  console.log(router.query.slug);

  return <div>TEST</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
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
