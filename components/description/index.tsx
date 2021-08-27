import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import {
  Buttons,
  Container,
  Paragraph,
  Title,
  Wikipedia,
  Button,
  Content,
} from './description.styled';
import { IDescriptionProps } from './description.types';
import Images from 'components/image';

const TYPES = ['overview', 'structure', 'surface'];

const Description = ({ name, text, image }: IDescriptionProps) => {
  const { asPath } = useRouter();

  return (
    <Container>
      <Images image={image} name={name} />
      <Content>
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
      </Content>
    </Container>
  );
};

export default Description;
