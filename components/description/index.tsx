import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import {
  Buttons,
  Container,
  Paragraph,
  Title,
  Wikipedia,
  Button,
  ImgWrapper,
  ImgContainer,
  Surface,
} from './description.styled';
import Image from 'next/image';
import { IDescriptionProps } from './description.types';

const Description = ({ name, overview, structure, surface, image }: IDescriptionProps) => {
  const { asPath, query } = useRouter();

  return (
    <Container>
      <ImgContainer>
        <ImgWrapper>
          <Image
            layout="fill"
            src={query.type === 'structure' ? image.structure.url : image.overview.url}
            alt=""
            className="img"
          />
          {query.type === 'surface' ? (
            <Surface>
              <Image
                layout="fill"
                src={image.surface.url}
                alt={`The surface of ${name}`}
                className="img"
              />
            </Surface>
          ) : null}
        </ImgWrapper>
      </ImgContainer>
      <div>
        <Title>{name}</Title>
        {structure !== undefined ? (
          <div>
            <Paragraph>{structure.content}</Paragraph>
            <Wikipedia>
              Source :&nbsp;
              <a href={structure.source} rel="noreferrer">
                Wikipedia
              </a>
            </Wikipedia>
          </div>
        ) : null}
        {overview !== undefined ? (
          <div>
            <Paragraph>{overview.content}</Paragraph>
            <Wikipedia>
              Source :&nbsp;
              <a href={overview.source} rel="noreferrer">
                Wikipedia
              </a>
            </Wikipedia>
          </div>
        ) : null}
        {surface !== undefined ? (
          <div>
            <Paragraph>{surface.content}</Paragraph>
            <Wikipedia>
              Source :&nbsp;
              <a href={surface.source} rel="noreferrer">
                Wikipedia
              </a>
            </Wikipedia>
          </div>
        ) : null}
      </div>
      <Buttons>
        <Link href={`/${name.toLowerCase()}/overview`} passHref>
          <Button name={name} isActive={asPath === `/${name}/overview`}>
            overview
          </Button>
        </Link>
        <Link href={`/${name}/structure`} passHref>
          <Button name={name} isActive={asPath === `/${name}/structure`}>
            structure
          </Button>
        </Link>
        <Link href={`/${name}/surface`} passHref>
          <Button name={name} isActive={asPath === `/${name}/surface`}>
            surface
          </Button>
        </Link>
      </Buttons>
    </Container>
  );
};

export default Description;
