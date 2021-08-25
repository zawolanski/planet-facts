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
} from './description.styled';
import Image from 'next/image';
import { IDescriptionProps } from './description.types';

const Description = ({ name, overview, structure, surface, image }: IDescriptionProps) => {
  const { asPath } = useRouter();

  return (
    <Container>
      <ImgWrapper>
        {image.overview !== undefined ? (
          <Image width="300" height="300" src={image.overview.url} alt={`The image of ${name}`} />
        ) : null}
        {image.structure !== undefined ? (
          <Image width="300" height="300" src={image.structure.url} alt={`The image of ${name}`} />
        ) : null}
        {image.surface !== undefined ? (
          <Image width="300" height="300" src={image.surface.url} alt={`The image of ${name}`} />
        ) : null}
      </ImgWrapper>
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