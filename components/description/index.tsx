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
import Images from './description.images';

const TYPES = ['overview', 'structure', 'surface'];

const Description = ({ name, text, image }: IDescriptionProps) => {
  const { asPath } = useRouter();

  return (
    <Container>
      <Images image={image} name={name} />
      <div>
        <Title>{name}</Title>
        <div>
          <Paragraph>{text.content}</Paragraph>
          <Wikipedia>
            Source :&nbsp;
            <a href={text.source} rel="noreferrer">
              Wikipedia
            </a>
          </Wikipedia>
        </div>
      </div>
      <Buttons>
        {TYPES.map((type) => (
          <Link href={`/${name}/${type}`} key={type} passHref>
            <Button name={name} isActive={asPath === `/${name}/${type}`}>
              {type}
            </Button>
          </Link>
        ))}
      </Buttons>
    </Container>
  );
};

export default Description;
